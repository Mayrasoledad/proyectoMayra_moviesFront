import { useState } from "react";
import MovieList from "../components/MovieList";
import Layout from "../components/Layout";
import SearchInput from "../components/SearchInput";

export default function Home({ movies }) {

  const [keyword, setKeyword] = useState("");

  const filteredMovies = movies.data.movies.filter((movies) =>
  movies.title.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return ( 
    <Layout title="Pochoclo-Time - Home" movies={movies.data.movies}>
      <div>Found {movies.data.movies.length} movies</div>
      <SearchInput placeholder="Filter by name" onChange={onInputChange} />
      <MovieList movies={filteredMovies} />
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
