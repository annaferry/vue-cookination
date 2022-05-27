<template>
  <router-link :to="{ name: 'recipe', params: { id: recipe.idMeal } }">
    <img
      class="recipe-img"
      :src="recipe.strMealThumb"
      :recipe="recipe.strMeal"
    />
    <h3 class="recipe-title">{{ recipe.strMeal }}</h3>
  </router-link>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    recipe: Object,
  },
};
</script>