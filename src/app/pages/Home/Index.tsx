// Component(s)
import Layout from "../../components/Layout/Index";
import Card from "../../components/Card/Index";
import CardContainer from "../../components/CardContainer/Index";
import SectionTitle from "../../components/SectionTitle/Index";
import LoadMore from "../../components/LoadMore/Index";

// Recipes
import { recipes } from "../../configs/recipes";

const Home = () => {
  return (
    <Layout title="Home">
      <>
        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Ninjas</h3>
        </header>
        <div>
          <SectionTitle title="Latest Recipes" />
          <CardContainer>
            <>
              {recipes.map((recipe) => (
                <Card
                  key={recipe.id}
                  name={recipe.name}
                  by={recipe.by}
                  image={recipe.image}
                />
              ))}
            </>
          </CardContainer>
          <SectionTitle title="Most Popular" />
          <CardContainer>
            <>
              {recipes.map((recipe) => (
                <Card
                  key={recipe.id}
                  name={recipe.name}
                  by={recipe.by}
                  image={recipe.image}
                />
              ))}
            </>
          </CardContainer>
          <LoadMore />
        </div>
      </>
    </Layout>
  );
};

export default Home;
