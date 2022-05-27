<template>
  <main class="page-details">
    <section class="section-featured">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img
              :src="recipe.strMealThumb"
              class="details-img"
              :alt="recipe.strMeal"
            />
          </div>
          <div class="col-lg-6 main-data">
            <header>
              <span class="details-category">{{ recipe.strCategory }}</span>
              <h1 class="main-title">
                {{ recipe.strMeal.toUpperCase() }}
              </h1>

              <div class="tag-list" v-if="tags.length">
                <span v-for="(value, key) in tags" :key="key" class="tag">{{
                  value.toUpperCase()
                }}</span>
              </div>
            </header>

            <ul class="ingredients-list">
              <li v-for="(value, key) in ingredients" :key="key">
                <span
                  v-if="value.measure.trim().length"
                  class="ingredient-measure"
                  >{{ value.measure }}
                </span>
                <span class="ingredient-name">{{ value.name }} </span>
              </li>
            </ul>

            <button class="btn btn-outline-secondary btn-add-fav" type="button">
              <img src="@/assets/icons/icon-favorite-empty.svg" /> Add to
              favorites
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="section-ingredients">
      <div class="container">
        <h2 class="title-lined title-lined-dark"><span>Ingredients</span></h2>
        <div class="row row-cols-lg-5">
          <article
            v-for="(value, key) in ingredient_images"
            :key="key"
            class="recipe col-6 col-md-4"
          >
            <img :src="value" class="recipe-img" alt="ingredient image" />
          </article>
        </div>
      </div>
    </section>
    <section class="section-instructions">
      <div class="instructions-box container">
        <h2 class="title text-uppercase">
          <span>Instructions</span>
        </h2>
        <ol>
          <li v-for="(value, key) in instructions" :key="key">
            {{ value }}
          </li>
        </ol>
      </div>
    </section>

    <section v-if="recipe.strYoutube.length" class="section-video">
      <div class="container">
        <h2 class="title-lined"><span>Video</span></h2>
        <iframe
          width="100%"
          height="600px"
          :src="video_url"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
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

    <section class="section-search section-doodle">
      <div class="container">
        <h2 class="title text-uppercase">Find your recipe</h2>
        <SearchBar />
        <ul class="search-abc">
          <li v-for="(value, key) in alphabet" :key="key">
            <router-link :to="{ name: 'home' }">{{ value }}</router-link>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import mealsJson from "@/json/meals.json";
import RecipeList from "@/components/RecipeList";

export default {
  name: "RecipeDetails",
  components: {
    RecipeList,
    SearchBar,
  },
  data() {
    return {
      recipe: {},
      idMeal: this.$route.params.id || "",
      meals: mealsJson.data,
      random_meals: mealsJson.data.slice(0, 5),
      tags: [],
      ingredients: [],
      ingredient_images: [],
      instructions: [],
      video_url: "",
      loading: true,
      alphabet: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Z",
      ],
    };
  },
  methods: {
    getRecipeContent() {
      this.idMeal = this.$route.params.id;
      this.recipe = this.getRecipeDetail(this.idMeal);
      this.tags = this.getTags();
      this.ingredients = this.getIngredients();
      this.ingredient_images = this.getIngredientImages();
      this.instructions = this.getInstructions();
      this.video_url =
        "https://youtube.com/embed/" + this.recipe.strYoutube.split("=")[1];
    },
    getRecipeDetail(idMeal) {
      return this.meals.filter((e) => e.idMeal === idMeal)[0];
    },
    getTags() {
      return this.recipe.strTags ? this.recipe.strTags.split(",") : [];
    },
    getIngredients() {
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        if (this.recipe[`strIngredient${i}`].length)
          ingredients.push({
            name: this.recipe[`strIngredient${i}`],
            measure: this.recipe[`strMeasure${i}`],
          });
      }
      return ingredients;
    },
    getIngredientImages() {
      // we don't have a nicer way to get the real images from the main ingredients
      return [
        require("@/assets/ingredients/marshmallows.png"),
        require("@/assets/ingredients/chocolate-chips.png"),
        require("@/assets/ingredients/peanut-butter.png"),
        require("@/assets/ingredients/vanilla-extract.png"),
        require("@/assets/ingredients/peanuts.png"),
      ];
    },
    getInstructions() {
      return this.recipe.strInstructions
        ? this.recipe.strInstructions.split("\r\n").filter((e) => e.length > 6)
        : [];
    },
  },
  created() {
    this.getRecipeContent();
  },
  beforeUpdate() {
    this.getRecipeContent();
  },
};
</script>