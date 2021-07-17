import React, { useEffect, useState } from 'react';
import { fetchLaunchesData } from './api/launchDashboard';
import LauncBarChart from './components/launchBarChart';
import LaunchDashboard from './components/launchDashboard';
import LaunchPadLocations from './components/launchPadLocations';
import LaunchTimeLine from './components/launchTimeline';
import { ChartWrapper, DashboardWrapper } from './styles';

const Dashboard: React.FunctionComponent = () => {
  const [allLaunches, setAllLaunches] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // fetch all launches
      let launches = await fetchLaunchesData();

      setAllLaunches(launches);
    }

    fetchData();
  }, []);
  return (
    <DashboardWrapper>
      <LaunchDashboard />
      <ChartWrapper>
        <LaunchPadLocations />
        <LauncBarChart allLaunches={allLaunches} />
        <LaunchTimeLine allLaunches={allLaunches} />
      </ChartWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;
