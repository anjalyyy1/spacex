import { map } from 'lodash';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimeLineWrapper } from '../styles';

type Props = {
  data: any[];
};

const TimeLine: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <TimeLineWrapper>
      <VerticalTimeline layout={'1-column'}>
        {map(data, eachItem => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={eachItem.title}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">
              {eachItem.cardTitle}
            </h3>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </TimeLineWrapper>
  );
};

export default TimeLine;
