// Component(s)
import Layout from "../../components/Layout/Index";
import Header from "../../components/Header/Index";
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
        <Header title="Recipes" subtitle="For Ninjas" />
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
                  time={recipe.time}
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
                  time={recipe.time}
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
