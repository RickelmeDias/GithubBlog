import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CustomLink, CustomLinkType } from "../../components/CustomLink";
import { githubRepo, githubUser } from "../../enviroments/settings";
import { httpGet } from "../../lib/axios";
import { GithubIssues } from "../../models/GithubIssues";
import {
  Infos,
  MenuPost,
  PostContainer,
  PostContent,
  PostInformations,
} from "./styles";

export function Post() {
  const [post, setPost] = useState<GithubIssues>();
  const { id } = useParams();

  useEffect(() => {
    httpGet<GithubIssues>(
      `repos/${githubUser}/${githubRepo}/issues/${id}`,
      setPost
    );
  }, []);

  return (
    <PostContainer>
      <PostInformations>
        <MenuPost>
          <CustomLink type={CustomLinkType.BACK_PAGE} to="/">
            VOLTAR
          </CustomLink>
          <CustomLink
            type={CustomLinkType.ACCESS_PAGE}
            outsideSite={true}
            to="https://github.com"
          >
            VER NO GITHUB
          </CustomLink>
        </MenuPost>
        <h2>{post && post.title}</h2>
        <Infos>
          <p>
            <FontAwesomeIcon icon={faGithub} size="sm" className="icon" />
            {post && post.user.login.toLowerCase()}
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarDay} size="sm" className="icon" />
            {post && formatDistanceToNow(new Date(post.created_at))}
          </p>
          <p>
            <FontAwesomeIcon icon={faComment} size="sm" className="icon" />
            {post && `${post.comments} comentários`}
          </p>
        </Infos>
      </PostInformations>
      <PostContent>{post && post.body}</PostContent>
    </PostContainer>
  );
}
