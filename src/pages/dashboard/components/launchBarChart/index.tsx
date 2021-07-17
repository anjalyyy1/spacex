import React, { useEffect, useState } from 'react';
import { Wrapper } from './styles';
import { groupByValue } from 'utils/helpers';
import Chart from './components/chart';
import { map } from 'lodash';
import { LaunchHeading } from 'pages/dashboard/styles';

type Props = {
  allLaunches: any[];
};

const LaunchBarChart: React.FunctionComponent<Props> = props => {
  const { allLaunches } = props;
  const [formattedlaunches, setFormattedLaunches] = useState([]);

  useEffect(() => {
    // group launch data by year
    let formattedlaunches = groupByValue(allLaunches, 'launch_year');

    // format launches data
    formattedlaunches = map(Object.keys(formattedlaunches), eachLaunch => {
      return {
        name: eachLaunch,
        count: formattedlaunches[eachLaunch].length,
      };
    });
    setFormattedLaunches(formattedlaunches);
  }, [allLaunches]);

  return (
    <Wrapper>
      <Chart data={formattedlaunches} />
    </Wrapper>
  );
};

export default LaunchBarChart;
