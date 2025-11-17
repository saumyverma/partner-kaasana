import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ViewCompanyProfileLayer from "@/components/settings/company_profile";
import MasterLayout from "@/masterLayout/MasterLayout";
import ProtectedRoute from "@/components/ProtectedRoute";

const Page = ({ params }) => {
  const resolvedParams = React.use(params);
  const slug = resolvedParams?.slug;
  const breadcrumbs = [
    { label: "Settings", href: "#" },
    { label: slug === "profile" ? "Company Profile" : slug, href: "#" },
  ];

  return (
    <ProtectedRoute>
      <MasterLayout>
        <Breadcrumb title={slug === "profile" ? "Company Profile" : slug} breadcrumbs={breadcrumbs} />
        {slug === "profile" ? (
          <ViewCompanyProfileLayer />
        ) : (
          <div className='p-24'>
            <h1 className='text-primary-light'>{slug}</h1>
          </div>
        )}
      </MasterLayout>
    </ProtectedRoute>
  );
};

export default Page;
