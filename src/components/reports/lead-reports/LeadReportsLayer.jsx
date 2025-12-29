"use client";
import LeadReportsFilter from "./LeadReportsFilter";
import UpgradeYourPlan from "./UpgradeYourPlan";
import RevenueStatisticOne from "./RevenueStatisticOne";
import RecentActivityOne from "./RecentActivityOne";

export default function LeadReportsLayer({ pageId }) {
  return (
    <div className='row gy-4'>
      {/* LeadReportsFilter */}
      <LeadReportsFilter />
      
      {/* UpgradeYourPlan */}
      <UpgradeYourPlan />

      {/* RevenueStatisticOne */}
      <RevenueStatisticOne />
      
      {/* RecentActivityOne */}
      <RecentActivityOne />
    </div>
  );
}
