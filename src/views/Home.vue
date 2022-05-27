<template>
  <main class="page-home">
    <section class="section-featured">
      <div class="container-sm">
        <h1>What are we cooking today?</h1>

        <SearchBar />
      </div>
    </section>

    <section class="section-latest-meals">
      <div class="container">
        <h2 class="title-lined"><span>Latest meals</span></h2>

        <recipe-list :recipes="latest_meals" recipeClass="col-6 col-lg-3" />
      </div>
    </section>

    <section class="section-categories">
      <div class="container">
        <h2 class="title-lined"><span>Categories</span></h2>

        <category-list :categories="categories" />
      </div>
    </section>

    <section class="section-random-recipes">
      <div class="container">
        <h2 class="title-lined"><span>Random meals</span></h2>
        <recipe-list
          :recipes="random_meals"
          recipeClass="col-6 col-md-4"
          rowClass="row-cols-lg-5"
        />
      </div>
    </section>

    <section class="section-newsletter section-doodle">
      <div class="container">
        <h2 class="title">Newsletter</h2>
        <p>
          Receive a weekly email with new recipes and recommendations for your
          cooking
        </p>
        <form>
          <input
            class="form-control"
            type="email"
            placeholder="Your email address"
          />
          <button class="btn btn-secondary" type="button">Suscribe</button>
        </form>
      </div>
    </section>

    <section class="section-pic-week container">
      <div class="row justify-content-space-between">
        <div class="main-content col-lg-6">
          <span class="upper-title">Pick of the week</span>
          <h2>Mini chicken pot pies</h2>
          <p>
            When it’s cold and rainy outside there’s nothing better than a
            chicken pot pie. But if you’re gluten-free or paleo it can be hard
            to find a delicious recipe that gets you excited and tastes as good
            as the traditional version. Well, I think this recipe is gonna get
            you excited.
          </p>
          <a href="#" class="btn btn-outline-primary">View recipe</a>
        </div>
        <div class="col-lg-6">
          <img
            src="@/assets/pick-week.jpg"
            class="img-fluid"
            alt="mini chicken pot pies"
          />
        </div>
      </div>
    </section>

    <section class="section-shop">
      <div class="shop-box">
        <h2 class="title-lined"><span>Shop</span></h2>
        <p>Curious what equipment and pantry staples we love?</p>
        <p>
          Check out our shop, where we share our go-to and recommend appliances,
          ingredients, tools, and more!
        </p>
        <p class="cta-text">
          <a href="" title="Visit our shop">Shop our recomendations</a>
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import mealsJson from "@/json/meals.json";
import categoriesJson from "@/json/categories.json";
import SearchBar from "@/components/SearchBar";
import RecipeList from "@/components/RecipeList";
import CategoryList from "@/components/CategoryList";

export default {
  name: "Home",
  components: { SearchBar, RecipeList, CategoryList },
  data() {
    return {
      latest_meals: mealsJson.data.slice(-4),
      random_meals: mealsJson.data.slice(0, 10),
      categories: categoriesJson.data,
    };
  },
};
</script>

<style scoped>
</style>