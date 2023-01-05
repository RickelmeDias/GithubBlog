import { Outlet } from "react-router-dom";
import { LayoutContainer, LogoHeader } from "./styles";
import CoverBg from "../../assets/CoverBg.svg";
import Logo from "../../assets/Logo.svg";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <img src={CoverBg} alt="" id="coverBackground" />
      <LogoHeader>
        <img src={Logo} alt="" />
      </LogoHeader>
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
}
