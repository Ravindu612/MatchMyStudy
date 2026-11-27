"use client";

import AdminNav from "@/components/admin/AdminNav";
import { getCurrentUserProfile } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

type ChatLead = {
  id: string;
  name: string;
  email: string;
  country_of_interest: string | null;
  study_level: string | null;
  message: string;
  contacted: boolean;
  contacted_at: string | null;
  created_at: string;
};

function formatWhen(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(date);
}

export default function LeadsScreen() {
  const [leads, setLeads] = useState<ChatLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pendingId, setPendingId] = useState("");

  async function load() {
    const { data, error: loadError } = await supabase
      .from("chat_leads")
      .select(
        "id, name, email, country_of_interest, study_level, message, contacted, contacted_at, created_at"
      )
      .order("created_at", { ascending: false })
      .limit(100);

    if (loadError) {
      throw loadError;
    }

    setLeads((data ?? []) as ChatLead[]);
  }

  useEffect(() => {
    let cancelled = false;

    async function start() {
      try {
        const profile = await getCurrentUserProfile();

        if (cancelled) {
          return;
        }

        if (!profile) {
          setError("You must be logged in.");
          setLoading(false);
          return;
        }

        if (profile.role !== "admin") {
          setError("You do not have permission to access this page.");
          setLoading(false);
          return;
        }

        const { data: allowed, error: adminError } = await supabase.rpc("is_admin", {
          uid: profile.id,
        });

        if (cancelled) {
          return;
        }

        if (adminError || allowed !== true) {
          setError("You do not have permission to access this page.");
          setLoading(false);
          return;
        }

        await load();

        if (!cancelled) {
          setLoading(false);
        }
      } catch (loadError) {
        console.error(loadError);

        if (!cancelled) {
          setError("Could not load contact requests.");
          setLoading(false);
        }
      }
    }

    void start();

    return () => {
      cancelled = true;
    };
  }, []);

  async function toggleContacted(lead: ChatLead) {
    setPendingId(lead.id);
    setError("");

    const { error: updateError } = await supabase
      .from("chat_leads")
      .update({ contacted: !lead.contacted })
      .eq("id", lead.id);

    if (updateError) {
      console.error(updateError);
      setError("Could not update that request.");
      setPendingId("");
      return;
    }

    try {
      await load();
    } catch (loadError) {
      console.error(loadError);
      setError("Saved, but the list could not be refreshed.");
    }

    setPendingId("");
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-slate-500">Loading contact requests...</p>
        </div>
      </main>
    );
  }

  if (error && leads.length === 0) {
    return (
      <main className="min-h-screen bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-800">{error}</div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <AdminNav />
        <div className="mt-6">
          <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            Admin
          </div>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">Contact requests</h1>
          <p className="mt-3 text-lg text-slate-600">
            Students who asked the study assistant to be contacted, newest first.
          </p>
        </div>

        {error ? (
          <p role="alert" className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800">
            {error}
          </p>
        ) : null}

        {leads.length === 0 ? (
          <p className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-slate-600">
            No contact requests yet.
          </p>
        ) : (
          <ul className="mt-8 space-y-4">
            {leads.map((lead) => (
              <li key={lead.id} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{lead.name}</p>
                    <p className="text-sm text-slate-600">{lead.email}</p>
                  </div>
                  <p className="text-sm text-slate-500">{formatWhen(lead.created_at)} UTC</p>
                </div>
                <p className="mt-3 whitespace-pre-wrap text-slate-800">{lead.message}</p>
                <p className="mt-3 text-sm text-slate-600">
                  {lead.country_of_interest ? `Country: ${lead.country_of_interest}` : "Country: not given"}
                  {" · "}
                  {lead.study_level ? `Study level: ${lead.study_level}` : "Study level: not given"}
                </p>
                <button
                  type="button"
                  disabled={pendingId === lead.id}
                  onClick={() => void toggleContacted(lead)}
                  className={
                    lead.contacted
                      ? "mt-4 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60"
                      : "mt-4 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
                  }
                >
                  {lead.contacted ? "Mark as not contacted" : "Mark as contacted"}
                </button>
                {lead.contacted_at ? (
                  <p className="mt-2 text-xs text-slate-500">
                    Contacted {formatWhen(lead.contacted_at)} UTC
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
