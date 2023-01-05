import { ProfileCard } from "./ProfileCard";
import { HomeContainer } from "./styles";

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
      <h1>Home</h1>
    </HomeContainer>
  );
}
