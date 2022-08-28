import Layout from "../../components/Layout";
import styles from "./Movie.module.css";

const Movie = ({ movies }) => {
return <Layout title={`Movie - ${movies.data.movie.title}`}>
    <div className={styles.container}>
    
    <div className={styles.movie_container}>
    <h1 className={styles.title}>{ movies.data.movie.title }</h1>
    <img className={styles.image} src= { movies.data.movie.image } width="500px" />
    <button className={styles.buttton}>Ver Trailer</button>
    </div>
    
    <div>
    <div>Director: { movies.data.movie.director }</div>
    <div>Año: { movies.data.movie.year }</div>
    <div>Genero: { movies.data.movie.genre }</div>
    <div>Sinopsis: { movies.data.movie.description }</div>
    </div>
    
    </div>
    
    </Layout>
};

export default Movie;


export const getServerSideProps = async ({params}) => {
   const res = await fetch(`http://localhost:5000/movies/${params.id}`);
   const movies = await res.json()
   return {
    props: {
        movies,
    },
   };
};


