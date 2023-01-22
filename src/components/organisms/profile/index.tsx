import ChevronDownIcon from "../../atoms/icons/chevronDownIcon";
import FilledStarIcon from "../../atoms/icons/filledStarIcon";
import UserIcon from "../../atoms/icons/userIcon";
import { Subtitle } from "../dashboard/styles";
import FavCards from "../favCards";
import { ProfileContainer, UserInfoContainer, UserName, SubtitleBox } from "./styles";

export default function Profile() {
  return (
    <ProfileContainer>
      <UserInfoContainer>
        <UserIcon />
        <UserName>Ana Gabriela Diniz Pimentel</UserName>
        <ChevronDownIcon />
      </UserInfoContainer>
      <SubtitleBox>
        <FilledStarIcon />
        <Subtitle>Empresas favoritas</Subtitle>
      </SubtitleBox>
      <FavCards />
    </ProfileContainer>
  );
}
