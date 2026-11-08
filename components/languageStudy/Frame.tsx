import Breadcrumbs, { type BreadcrumbItem } from "@/components/Breadcrumbs";

export default function Frame({
  crumbs,
  children,
}: {
  crumbs: BreadcrumbItem[];
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={crumbs} className="mb-6" />
        {children}
      </div>
    </div>
  );
}
