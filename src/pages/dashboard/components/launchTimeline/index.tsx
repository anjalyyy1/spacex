import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import { sortDate } from 'utils/helpers';
import TimeLine from './components/timeline';
import moment from 'moment';
import { Wrapper } from './styles';

type Props = {
  allLaunches: any[];
};

const LaunchTimeLine: React.FunctionComponent<Props> = props => {
  const { allLaunches } = props;
  const [formattedlaunches, setFormattedLaunches] = useState<any>();

  useEffect(() => {
    let sortedLaunches = sortDate(allLaunches);
    sortedLaunches = map(sortedLaunches, eachLaunch => {
      return {
        title: moment(eachLaunch.launch_date_utc).format('ddd, MMM Do YYYY'),
        cardTitle: eachLaunch.mission_name,
      };
    });
    setFormattedLaunches(sortedLaunches);
  }, [allLaunches]);

  return (
    <Wrapper>
      <TimeLine data={formattedlaunches} />
    </Wrapper>
  );
};

export default LaunchTimeLine;
