import styled from "styled-components";
import { BarsButton, CameraButton, MicButton, NotificationButton } from "./Button";
import { useState } from "react";
import SearchBar from "./SearchBar";
import SideMenu from '../Components/SideMenu'
import logo from "../youtube_logo.png";

const StyledNavbar = styled.nav`
    position: sticky;
    top: 0px;
    width: 100%;
    height: var(--navbar-height);
    padding: 0 16px;
    background: var(--bg-a);
    display: flex;
    align-items: center;
    z-index: 2000;
    i {
      color: white;
    }
`;

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    gap: 10px;
    &:nth-child(2) {
      flex-grow: 1;
    }
`;


export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false); //estado do menu lateral

  return (
    <StyledNavbar>
      <Section id="#start">
        <SideMenu active={menuActive} />
        <BarsButton onClick={() => setMenuActive(!menuActive)} //botao que controla o estado do menu lateral
        /> 
        <img style={{width: "90px"}} src={logo} />
      </Section>
      <Section id="#center">
        <SearchBar />
        <MicButton />
      </Section>
      <Section id="#end">
        <CameraButton/>
        <NotificationButton />
      </Section>
    </StyledNavbar>
  )
}