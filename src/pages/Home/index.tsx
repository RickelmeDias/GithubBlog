import { CustomCard } from "../../components/CustomCard";
import { CustomInput } from "../../components/CustomInput/styles";
import { ProfileCard } from "./ProfileCard";
import { GridPublications, HomeContainer, PublicationsInfo } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard
        name="Rickelme Dias"
        about="I enjoy to study about technology and more to practice. I like to exchange knowledge, participate of events and challenges."
        imageSrc="https://avatars.githubusercontent.com/u/43411893?s=400&u=dd45c068fe47f2cf48d858a92f08b0d9a125b044&v=4"
        githubUser="RickelmeDias"
        company="IPT"
        followers="5"
      />
      <PublicationsInfo>
        <h3>Publicações</h3>
        <p>6 publicações</p>
      </PublicationsInfo>
      <CustomInput placeholder="Buscar conteúdo" type="text" />
      <GridPublications>
        <CustomCard time={new Date()} title="Hello World asassa" key={0}>
          Text
        </CustomCard>
        <CustomCard time={new Date()} title="Hello World asassa" key={0}>
          Text
        </CustomCard>
        <CustomCard time={new Date()} title="Hello World asassa" key={0}>
          Text
        </CustomCard>
        <CustomCard time={new Date()} title="Hello World asassa" key={0}>
          Text
        </CustomCard>
      </GridPublications>
    </HomeContainer>
  );
}
