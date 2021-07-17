import { fetchLaunchesData } from '../../api/launchDashboard';
import React, { useEffect, useState } from 'react';
import {
  LaunchDashboardWrapper,
  LaunchDashboardHeading,
  LaunchesWrapper,
} from './styles';
import LaunchList from './components/launchList';

type Props = {};

const LaunchDashboard: React.FunctionComponent<Props> = props => {
  const [upcomingLaunches, setUpcomingLaunches] = useState([]);
  const [pastLaunches, setPastLaunches] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // fetch upcoming launches
      const upcomingLaunches = await fetchLaunchesData('upcoming', 10);
      setUpcomingLaunches(upcomingLaunches);

      // fetch past launches
      const pastLaunches = await fetchLaunchesData('past', 15);
      setPastLaunches(pastLaunches);
    }

    fetchData();
  }, []);

  return (
    <LaunchDashboardWrapper>
      <LaunchDashboardHeading>Analytics Dashboard</LaunchDashboardHeading>
      <LaunchesWrapper>
        <LaunchList data={upcomingLaunches} heading="Upcoming Launches" />
        <LaunchList data={pastLaunches} heading="Past Launches" />
      </LaunchesWrapper>
    </LaunchDashboardWrapper>
  );
};

export default LaunchDashboard;
