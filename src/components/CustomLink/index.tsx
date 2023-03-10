import { ReactNode } from "react";
import { LinkContainer, OutsideLinkContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const parseIconSize: any = {
  "0.75": "xs",
  "1": "sm",
  "1.25": "lg",
};

export enum CustomLinkType {
  ACCESS_PAGE = "ACCESS_PAGE",
  BACK_PAGE = "BACK_PAGE",
}

interface CustomLinkProps {
  children: ReactNode;
  to: string;
  type: CustomLinkType;
  outsideSite?: boolean;
  size?: 0.75 | 0.875 | 1 | 1.25;
}

export function CustomLink({
  children,
  to,
  type,
  outsideSite,
  size,
}: CustomLinkProps) {
  const sizeIcon = parserIconSize();

  function parserIconSize(): "xs" | "sm" | "lg" | "xl" {
    if (size) {
      return parseIconSize[`${size}`];
    } else {
      return "xs";
    }
  }
  return (
    <>
      {!outsideSite ? (
        <LinkContainer
          to={to}
          target={outsideSite ? "_blank" : ""}
          rel="noopener noreferrer"
          size={size}
        >
          {type === CustomLinkType.BACK_PAGE && (
            <FontAwesomeIcon icon={faChevronLeft} size={sizeIcon} />
          )}
          {children}
          {type === CustomLinkType.ACCESS_PAGE && (
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={sizeIcon} />
          )}
        </LinkContainer>
      ) : (
        <OutsideLinkContainer
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          size={size}
        >
          {type === CustomLinkType.BACK_PAGE && (
            <FontAwesomeIcon icon={faChevronLeft} size={sizeIcon} />
          )}
          {children}
          {type === CustomLinkType.ACCESS_PAGE && (
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={sizeIcon} />
          )}
        </OutsideLinkContainer>
      )}
    </>
  );
}
