import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { About, CustomCardContainer, HeaderTitle } from "./styles";

interface CustomCardProps {
  title: string;
  children: ReactNode;
  time: string | Date;
  id: number;
}
export function CustomCard({ title, children, time, id }: CustomCardProps) {
  return (
    <CustomCardContainer to={`/post/${id}`}>
      <HeaderTitle>
        <h1>{title}</h1>
        <span>
          {formatDistanceToNow(new Date(time), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </HeaderTitle>
      <About>{children}</About>
    </CustomCardContainer>
  );
}
