import CampaignStaticOne from "./CampaignStaticOne";
import ClientPaymentOne from "./ClientPaymentOne";
import CountryStatusOne from "./CountryStatusOne";
import EarningStaticOne from "./EarningStaticOne";
import LastTransactionOne from "./LastTransactionOne";
import LatestPerformanceOne from "./LatestPerformanceOne";
import RevenueGrowthOne from "./RevenueGrowthOne";
import TopPerformanceOne from "./TopperformanceOne";
import UnitCountTwo from "./UnitCountTwo";

const DashBoardLayerTwo = () => {
  return (
    <section className='row gy-4'>
      {/* UnitCountTwo */}
      <UnitCountTwo />

      {/* RevenueGrowthOne */}
      <RevenueGrowthOne />

      {/* EarningStaticOne */}
      <EarningStaticOne />

      {/* CampaignStaticOne */}
      <CampaignStaticOne />

      {/* ClientPaymentOne  */}
      <ClientPaymentOne />

      {/* CountryStatusOne */}
      <CountryStatusOne />

      {/* TopPerformanceOne */}
      <TopPerformanceOne />

      {/* LatestPerformanceOne */}
      <LatestPerformanceOne />

      {/* LastTransactionOne */}
      <LastTransactionOne />
    </section>
  );
};

export default DashBoardLayerTwo;
