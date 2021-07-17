import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 33%;
  border: 1px solid #ccc;
  margin-right: 10px;
  .recharts-legend-wrapper {
    bottom: -12px;
  }
  .recharts-wrapper {
    margin-top: 35px;
    width: 100% !important;
  }
  .recharts-surface {
    width: 100% !important;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
