import { useState } from "react";
import MovieList from "../components/MovieList";
import Layout from "../components/Layout";
import SearchInput from "../components/SearchInput";

export default function Home({ movies }) {

  return (
    <Layout title="Pochoclo-Time - Home" movies={movies.data.movies}>
      <div>Found {movies.data.movies.length} movies</div>
      <SearchInput placeholder="Filter by name" />
      <MovieList movies={movies.data.movies} />
      </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/movies");
  const movies = await res.json();
  return {
    props: {
      movies,
    },
  };
};
