"use client";
import AgentPerformanceFilter from "./AgentPerformanceFilter";
import UpgradeYourPlan from "./UpgradeYourPlan";
import RevenueStatisticOne from "./RevenueStatisticOne";
import RecentActivityOne from "./RecentActivityOne";

export default function AgentPerformanceLayer({ pageId }) {
  return (
    <div className='row gy-4'>
      {/* AgentPerformanceFilter */}
      <AgentPerformanceFilter />
      
      {/* UpgradeYourPlan */}
      <UpgradeYourPlan />

      {/* RevenueStatisticOne */}
      <RevenueStatisticOne />
      
      {/* RecentActivityOne */}
      <RecentActivityOne />
    </div>
  );
}
