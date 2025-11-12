import FeatureOverview from "@/components/featureOverview/FeatureOverview";
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ProtectedRoute from "@/components/ProtectedRoute";

export const metadata = {
  title: "WowDash NEXT JS - Admin Dashboard Multipurpose Bootstrap 5 Template",
  description:
    "Wowdash NEXT JS is a developer-friendly, ready-to-use admin template designed for building attractive, scalable, and high-performing web applications.",
};

const Page = () => {
  const breadcrumbs = [{ label: "Feature Overview" }];
  return (
    <>
      {/* MasterLayout */}
      <ProtectedRoute>
      <MasterLayout>
     
        <Breadcrumb title='Feature Overview' breadcrumbs={breadcrumbs} />

        <FeatureOverview />
      </MasterLayout>
      </ProtectedRoute>
    </>
  );
};

export default Page;
