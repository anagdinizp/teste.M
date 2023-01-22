import HomeIcon from "../../atoms/icons/homeIcon";
import MonetusLogo from "../../atoms/logos/monetusLogo";
import { SidebarContainer, SidebarItems, MonetusContainer, HomeContainer } from "./styles";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarItems>
        <MonetusContainer>
          <MonetusLogo />
        </MonetusContainer>
        <HomeContainer>
          <HomeIcon />
        </HomeContainer>
      </SidebarItems>
    </SidebarContainer>
  );
}
