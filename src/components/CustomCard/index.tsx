import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ReactNode } from "react";
import { About, CustomCardContainer, HeaderTitle } from "./styles";

interface CustomCardProps {
  title: string;
  children: ReactNode;
  time: Date;
}
export function CustomCard({ title, children, time }: CustomCardProps) {
  return (
    <CustomCardContainer>
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
