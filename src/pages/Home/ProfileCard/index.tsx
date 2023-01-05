import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomLink, CustomLinkType } from "../../../components/CustomLink";
import { Informations, ProfileCardContainer, Social } from "./styles";
import { useEffect, useState } from "react";
import { GithubProfile } from "../../../models/GithubProfile";
import { httpGet } from "../../../lib/axios";

interface ProfileCardProps {
  githubUser: string;
}

export function ProfileCard({ githubUser }: ProfileCardProps) {
  const [profileJson, setProfileJson] = useState<GithubProfile>();

  useEffect(() => {
    httpGet<GithubProfile>("/users/" + githubUser, setProfileJson);
  }, [githubUser]);

  return (
    <ProfileCardContainer>
      <img src={profileJson && profileJson.avatar_url} alt="" srcSet="" />
      <Informations>
        <span>
          <h2>{profileJson && profileJson.name}</h2>
          <CustomLink
            to={profileJson?.url ? profileJson.html_url : ""}
            type={CustomLinkType.ACCESS_PAGE}
            outsideSite={true}
          >
            GITHUB
          </CustomLink>
        </span>
        <p id="about">{profileJson && profileJson.bio}</p>
        <Social>
          <p>
            <FontAwesomeIcon icon={faGithub} size="sm" className="icon" />
            {githubUser.toLowerCase()}
          </p>
          <p>
            <FontAwesomeIcon icon={faBuilding} size="sm" className="icon" />
            {profileJson && profileJson.company}
          </p>
          <p>
            <FontAwesomeIcon icon={faUserGroup} size="sm" className="icon" />
            {profileJson && profileJson.followers + " seguidores"}
          </p>
        </Social>
      </Informations>
    </ProfileCardContainer>
  );
}
