import VendorDetailPage from "@/app/components/partner/VendorDetailPage";

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return <VendorDetailPage slug={slug} />;
}
