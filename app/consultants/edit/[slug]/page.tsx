import EditConsultantClient from "@/components/consultant/EditConsultantClient";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function EditConsultantPage({
  params,
}: Props) {
  const { slug } = await params;

  return <EditConsultantClient slug={slug} />;
}