import styled from 'styled-components';

export const TimeLineWrapper = styled.div`
  height: 350px;
  overflow: scroll;

  .vertical-timeline-element--work {
    margin: 10px;
  }

  .vertical-timeline-element-icon {
    width: 10px;
    height: 10px;
    top: 18px;
    left: -11px;
  }
  .vertical-timeline-element-content {
    margin-left: 10px;
    padding: 10px;
  }
  .vertical-timeline-element-date {
    padding: 3px 0;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  border: 1px solid #ccc;
  background: #333;
`;
