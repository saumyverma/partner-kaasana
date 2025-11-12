import FeatureOverview from "@/components/featureOverview/FeatureOverview";
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ProtectedRoute from "@/components/ProtectedRoute";

export const metadata = {
  title: "Feature Overview | Kaasana",
  description:
    "Explore all core Kaasana features including profiles, resources, inventory, CRM, financial tools, and bookings.",
};

const Page = () => {
  const breadcrumbs = [{ label: "Feature Overview", href: "/feature-overview" }];

  return (
    <ProtectedRoute>
      <MasterLayout>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <FeatureOverview />
      </MasterLayout>
    </ProtectedRoute>
  );
};

export default Page;

