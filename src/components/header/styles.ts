import styled from 'styled-components';

export const AppLogo = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.COLOR_PALETTE.WHITE};
  margin-top: 15px;
`;

export const HeaderWrapper = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
`;

export const HamburgerMenuIcon = styled.span`
  cursor: pointer;
  font-size: 30px;
  color: ${props => props.theme.COLOR_PALETTE.WHITE};
`;

export const Container = styled.div`
  background-color: ${props => props.theme.COLOR.PRIMARY_COLOR};
`;
