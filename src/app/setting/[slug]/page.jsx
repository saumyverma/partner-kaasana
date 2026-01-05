import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ViewCompanyProfileLayer from "@/components/settings/company-profiles";
import TncLayer from "@/components/settings/tnc/TncLayer";
import MarkupLayer from "@/components/settings/markup/MarkupLayer";
import NotificationLayer from "@/components/settings/notification/NotificationLayer";
import CommunicationLayer from "@/components/settings/communication/CommunicationLayer";
import SubscriptionPlansLayer from "@/components/settings/subscription-plans";
import OtherSettingsLayer from "@/components/settings/other-settings";
import MasterLayout from "@/masterLayout/MasterLayout";
import ProtectedRoute from "@/components/ProtectedRoute";

const Page = ({ params }) => {
  const resolvedParams = React.use(params);
  const slug = resolvedParams?.slug;
  
  const getBreadcrumbLabel = (slug) => {
    const labels = {
      "profile": "Company Profile",
      "tnc": "Terms and Conditions",
      "markups": "Markups",
      "notifications": "Notifications",
      "communications": "Communications",
      "subscription-plan": "Subscription Plans",
      "other-settings": "Other Settings"
    };
    return labels[slug] || slug;
  };

  const breadcrumbs = [
    { label: "Settings", href: "#" },
    { label: getBreadcrumbLabel(slug), href: "#" },
  ];

  const getComponent = () => {
    switch (slug) {
      case "profile":
        return <ViewCompanyProfileLayer />;
      case "tnc":
        return <TncLayer />;
      case "markups":
        return <MarkupLayer />;
      case "notifications":
        return <NotificationLayer />;
      case "communications":
        return <CommunicationLayer />;
      case "subscription-plan":
        return <SubscriptionPlansLayer />;
      case "other-settings":
        return <OtherSettingsLayer />;
      default:
        return (
          <div className='p-24'>
            <h1 className='text-primary-light'>{slug}</h1>
          </div>
        );
    }
  };

  return (
    <ProtectedRoute>
      <MasterLayout>
        <Breadcrumb title={getBreadcrumbLabel(slug)} breadcrumbs={breadcrumbs} />
        {getComponent()}
      </MasterLayout>
    </ProtectedRoute>
  );
};

export default Page;
