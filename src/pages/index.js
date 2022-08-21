import Layout from "../components/Layout";


export default function Home() {
  return <Layout title="Pochoclo-Time - Home">
    hola
  </Layout>;
}

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:5000");
//   const movies = await res.json();
//   return {
//     props: {
//       movies,
//   },
// };
// // };
