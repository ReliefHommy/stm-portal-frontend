import VendorDetailPage from "@/app/components/partner/VendorDetailPage";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <VendorDetailPage slug={slug} />;
}
