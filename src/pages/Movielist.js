import { Card } from "../components/MovieCard";
import { useFetch } from "../Hooks/useFetch";
import { useTitle } from "../Hooks/useTitle";

export const Movielist = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);
  return (
    <section className="max-w-7x1 mx-auto py-7">
      <div className="flex justify-center flex-wrap other:justify-evenly">
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
    </section>
  );
};
