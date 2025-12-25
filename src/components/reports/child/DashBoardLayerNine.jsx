import AverageDailySales from "./AverageDailySales";
import MonthlyCampaignState from "./MonthlyCampaignState";
import RecentActivityOne from "./RecentActivityOne";
import RevenueStatisticOne from "./RevenueStatisticOne";
import SalesByCountries from "./SalesByCountries";
import SourceVisitors from "./SourceVisitors";
import SupportTracker from "./SupportTracker";
import TransactionsTwo from "./TransactionsTwo";
import UpgradeYourPlan from "./UpgradeYourPlan";

const DashBoardLayerNine = () => {
  return (
    <div className='row gy-4'>
      {/* UpgradeYourPlan */}
      <UpgradeYourPlan />

      {/* RevenueStatisticOne */}
      <RevenueStatisticOne />

      {/* SupportTracker */}
      <SupportTracker />

      {/* AverageDailySales */}
      <AverageDailySales />

      {/* TransactionsTwo */}
      <TransactionsTwo />

      {/* SalesByCountries */}
      <SalesByCountries />

      {/* SourceVisitors */}
      <SourceVisitors />

      {/* MonthlyCampaignState */}
      <MonthlyCampaignState />

      {/* RecentActivityOne */}
      <RecentActivityOne />
    </div>
  );
};

export default DashBoardLayerNine;
