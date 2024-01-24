import { Routes, Route } from "react-router-dom";
import { Movielist, MovieDetails, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route
          path=""
          element={<Movielist apiPath="movie/now_playing" title="Home" />}
        />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route
          path="Search"
          element={<Search apiPath="search/movie" title="Search" />}
        />
        <Route path="*/" element={<PageNotFound />} />
        <Route
          path="movie/upcoming"
          element={<Movielist apiPath="movie/upcoming" title="upcoming" />}
        />
        <Route
          path="movie/popular"
          element={<Movielist apiPath="movie/popular" title="now_playing" />}
        />
        <Route
          path="movie/top_rated"
          element={<Movielist apiPath="movie/top_rated" title="top" />}
        />
      </Routes>
    </div>
  );
};
