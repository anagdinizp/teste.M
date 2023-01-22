import Dashboard from "../../components/organisms/dashboard";
import Profile from "../../components/organisms/profile";
import Sidebar from "../../components/organisms/sidebar";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <Sidebar />
      <Dashboard />
      <Profile />
    </HomeContainer>
  );
}
