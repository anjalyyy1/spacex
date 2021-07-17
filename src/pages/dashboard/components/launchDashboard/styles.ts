import styled from 'styled-components';

export const LaunchDashboardHeading = styled.h2`
  font-size: 27px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const LaunchDashboardWrapper = styled.div``;

export const LaunchItem = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 20px;
  min-height: 100px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const MissionName = styled.span``;

export const SlideItemWrapper = styled.div`
  padding: 10px;
`;

export const Wrapper = styled.div`
  width: 48%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const LaunchesWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
