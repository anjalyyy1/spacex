import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  width: calc(100% - 200px);
  padding: 10px 19px;
`;

export const ChartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 90px;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const LaunchHeading = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;
