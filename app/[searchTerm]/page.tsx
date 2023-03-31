import React from "react";
import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/item";

type Props = {
  params: { searchTerm: string };
};

export default async function page({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] = data?.query?.pages ?? [];

  const content = (
    <main>
      {Object.values(results).map((result) => {
        return <Item key={result.pageid} result={result} />;
      })}
    </main>
  );

  return content;
}
