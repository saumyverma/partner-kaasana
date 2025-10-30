import DashBoardLayerOne from "@/components/DashBoardLayerOne";
import MasterLayout from "@/masterLayout/MasterLayout";
import { Breadcrumb } from "react-bootstrap";
import ProtectedRoute from "@/components/ProtectedRoute";

export const metadata = {
  title: "WowDash NEXT JS - Admin Dashboard Multipurpose Bootstrap 5 Template",
  description:
    "Wowdash NEXT JS is a developer-friendly, ready-to-use admin template designed for building attractive, scalable, and high-performing web applications.",
};

const Page = () => {
  return (
    <>
      {/* MasterLayout */}
      <ProtectedRoute>
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title={[]} />

        {/* DashBoardLayerOne */}
        <DashBoardLayerOne />
      </MasterLayout>
      </ProtectedRoute>
    </>
  );
};

export default Page;
