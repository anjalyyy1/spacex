import SideBar from 'components/sidebar';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AppLogo, HeaderWrapper, HamburgerMenuIcon, Container } from './styles';

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Container>
      <HeaderWrapper>
        <AppLogo>Space X</AppLogo>
        <HamburgerMenuIcon onClick={() => setShowSidebar(true)}>
          <GiHamburgerMenu />
        </HamburgerMenuIcon>
        {showSidebar && <SideBar setShowSidebar={setShowSidebar} />}
      </HeaderWrapper>
    </Container>
  );
}
