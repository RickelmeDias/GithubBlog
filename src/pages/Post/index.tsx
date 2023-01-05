import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import { CustomLink, CustomLinkType } from "../../components/CustomLink";
import {
  Infos,
  MenuPost,
  PostContainer,
  PostContent,
  PostInformations,
} from "./styles";

export function Post() {
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
        <h2>JavaScript data types and data structures</h2>
        <Infos>
          <p>
            <FontAwesomeIcon icon={faGithub} size="sm" className="icon" />
            {"Rickelme Dias"}
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarDay} size="sm" className="icon" />
            {formatDistanceToNow(new Date())}
          </p>
          <p>
            <FontAwesomeIcon icon={faComment} size="sm" className="icon" />
            {8 + " comentários"}
          </p>
        </Infos>
      </PostInformations>
      <PostContent>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
      </PostContent>
    </PostContainer>
  );
}
