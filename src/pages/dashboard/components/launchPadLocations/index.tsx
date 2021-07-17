import { fetchLocationsData } from '../../api/launchDashboard';
import React, { useEffect, useState } from 'react';
import { Wrapper } from './styles';
import MapChart from './components/mapCharts';

type Props = {};

const LaunchPadLocations: React.FunctionComponent<Props> = props => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // fetch upcoming launches
      const locations = await fetchLocationsData();
      setLocations(locations);
    }

    fetchData();
  }, []);

  return (
    <Wrapper>
      <MapChart locations={locations} />
    </Wrapper>
  );
};

export default LaunchPadLocations;
