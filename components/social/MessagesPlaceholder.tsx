export default function MessagesPlaceholder() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-900">Messages</h2>
      </div>
      <input
        type="search"
        disabled
        placeholder="Search chats"
        aria-label="Search chats"
        className="mt-3 w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500"
      />
      <p className="mt-6 rounded-xl bg-slate-50 px-4 py-8 text-center text-sm leading-6 text-slate-500">
        Direct messages will show up here.
      </p>
    </section>
  );
}
