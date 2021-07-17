import { map } from 'lodash';
import { LaunchHeading } from 'pages/dashboard/styles';
import React from 'react';
import Slider from 'react-slick';
import { LaunchItem, MissionName, SlideItemWrapper, Wrapper } from '../styles';

type Props = {
  data: any[];
  heading: string;
};

// slide settings

const LaunchList: React.FunctionComponent<Props> = props => {
  const { data, heading } = props;
  const settings = {
    speed: 500,
    slidesToShow: 1,
  };

  return (
    <Wrapper>
      <LaunchHeading>{heading}</LaunchHeading>
      <Slider {...settings}>
        {map(data, eachItem => {
          return (
            <SlideItemWrapper>
              <LaunchItem>
                <MissionName>{eachItem.mission_name}</MissionName>
              </LaunchItem>
            </SlideItemWrapper>
          );
        })}
      </Slider>
    </Wrapper>
  );
};

export default LaunchList;
