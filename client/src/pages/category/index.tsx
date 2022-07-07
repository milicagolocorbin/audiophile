import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";

// MARKUP
const Category = () => {
  const { name } = useParams();
  return (
    <Layout key={name}>
      <h1 className="font-bold">Audiophile Single Category Page - {name}</h1>
    </Layout>
  );
};

export default Category;
