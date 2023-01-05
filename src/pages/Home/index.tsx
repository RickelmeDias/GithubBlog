import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CustomCard } from "../../components/CustomCard";
import { CustomInput } from "../../components/CustomInput/styles";
import { githubRepo, githubUser } from "../../enviroments/settings";
import { httpGet } from "../../lib/axios";
import { GithubIssues } from "../../models/GithubIssues";
import { ProfileCard } from "./ProfileCard";
import { GridPublications, HomeContainer, PublicationsInfo } from "./styles";

export function Home() {
  const [issues, setIssues] = useState<GithubIssues[]>([]);
  const [issuesFiltered, setIssuesFiltered] = useState<GithubIssues[]>([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    httpGet<GithubIssues[]>(
      `/repos/${githubUser}/${githubRepo}/issues`,
      setIssues
    );
  }, []);

  function handleFilter(event: any) {
    const text = event.target.value;
    if ((text !== undefined && text.trim() !== "") || filter.length > 0) {
      setFilter(event?.target.value);
    }
  }

  useEffect(() => {
    if (issues !== undefined && issues.length > 0) {
      const filtered = issues.filter((i) =>
        i.title.toUpperCase().includes(filter.toUpperCase())
      );

      setIssuesFiltered(filtered);
    }
  }, [filter, issues]);

  return (
    <HomeContainer>
      <ProfileCard githubUser={githubUser} />
      <PublicationsInfo>
        <h3>Publicações</h3>
        <p>{issuesFiltered.length} publicações</p>
      </PublicationsInfo>
      <CustomInput
        placeholder="Buscar conteúdo"
        type="text"
        onChange={handleFilter}
        value={filter}
      />
      <GridPublications>
        {issuesFiltered.map((i: GithubIssues) => {
          return (
            <CustomCard
              time={i.created_at}
              title={i.title}
              key={i.number}
              id={i.number}
            >
              {i.body}
            </CustomCard>
          );
        })}
      </GridPublications>
    </HomeContainer>
  );
}
