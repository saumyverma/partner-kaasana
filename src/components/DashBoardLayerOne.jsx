import GeneratedContent from "./child/GeneratedContent";
import LatestRegisteredOne from "./child/LatestRegisteredOne";
import SalesStatisticOne from "./child/SalesStatisticOne";
import TopCountries from "./child/TopCountries";
import TopPerformerOne from "./child/TopPerformerOne";
import TotalSubscriberOne from "./child/TotalSubscriberOne";
import UnitCountOne from "./child/UnitCountOne";
import UsersOverviewOne from "./child/UsersOverviewOne";

const DashBoardLayerOne = () => {
  return (
    <>
      {/* UnitCountOne */}
      <UnitCountOne />

      <section className='row gy-4 mt-1'>
        {/* SalesStatisticOne */}
        <SalesStatisticOne />

        {/* TotalSubscriberOne */}
        <TotalSubscriberOne />

        {/* UsersOverviewOne */}
        <UsersOverviewOne />

        {/* LatestRegisteredOne */}
        <LatestRegisteredOne />

        {/* TopPerformerOne */}
        <TopPerformerOne />

        {/* TopCountries */}
        <TopCountries />

        {/* GeneratedContent */}
        <GeneratedContent />
      </section>
    </>
  );
};

export default DashBoardLayerOne;
