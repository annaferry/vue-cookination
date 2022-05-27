<template>
  <div class="row" :class="rowClass">
    <article
      v-for="recipe in recipes"
      :key="recipe.idMeal"
      class="recipe"
      :class="recipeClass"
    >
      <RecipeCard :recipe="recipe" />
    </article>
  </div>
</template>

<script>
import RecipeCard from "./RecipeCard";

export default {
  components: { RecipeCard },
  name: "RecipeList",
  props: { recipes: Array, recipeClass: String, rowClass: String },
};
</script>
