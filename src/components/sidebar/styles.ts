import styled from 'styled-components';

export const IconWrapper = styled.span`
  display: inline-block;
  margin-right: 10px;
`;

export const LabelTitle = styled.span``;

export const SideBarWrapper = styled.ul`
  padding: 50px 20px;
  position: fixed;
  height: 100vh;
  right: 0;
  top: 0;
  width: 300px;
  background-color: ${props => props.theme.COLOR.SECONDARY_COLOR};
  z-index: 1;
  transition: margin-left 0.5s;
`;

export const SideBarItem = styled.li`
  padding: 20px 0;
`;

export const CrossIconWrapper = styled.span`
  position: absolute;
  right: 30px;
  top: 35px;
  cursor: pointer;
`;
