import { useSearchParams } from "react-router-dom";
import { Card } from "../components/MovieCard";
import { useFetch } from "../Hooks/useFetch";

export const Search = ({ apiPath }) => {
  const [SearchParams] = useSearchParams();
  const queryTerm = SearchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);
  return (
    <main>
      <section className="py-10 px-10 mx-10">
        <p className="text-3xl text-grey-700 dark:text-white">
          {movies.length === 0
            ? `NO RESULT FOUND FOR '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7x1 mx-auto py-7">
        <div className="flex justify-center flex-wrap other:justify-evenly">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </main>
  );
};
