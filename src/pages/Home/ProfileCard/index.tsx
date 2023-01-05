import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomLink, CustomLinkType } from "../../../components/CustomLink";
import { Informations, ProfileCardContainer, Social } from "./styles";

interface ProfileCardProps {
  name: string;
  about: string;
  imageSrc: string;
  githubUser: string;
  company: string;
  followers: string;
}

export function ProfileCard({
  name,
  about,
  imageSrc,
  githubUser,
  company,
  followers,
}: ProfileCardProps) {
  const linkGitHub = `https://github.com/${githubUser}`;
  return (
    <ProfileCardContainer>
      <img src={imageSrc} alt="" srcSet="" />
      <Informations>
        <span>
          <h2>{name}</h2>
          <CustomLink
            to={linkGitHub}
            type={CustomLinkType.ACCESS_PAGE}
            outsideSite={true}
          >
            GITHUB
          </CustomLink>
        </span>
        <p id="about">{about}</p>
        <Social>
          <p>
            <FontAwesomeIcon icon={faGithub} size="sm" className="icon" />
            {githubUser.toLowerCase()}
          </p>
          <p>
            <FontAwesomeIcon icon={faBuilding} size="sm" className="icon" />
            {company}
          </p>
          <p>
            <FontAwesomeIcon icon={faUserGroup} size="sm" className="icon" />
            {followers + " seguidores"}
          </p>
        </Social>
      </Informations>
    </ProfileCardContainer>
  );
}
