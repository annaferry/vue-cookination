<template>
  <!-- <router-link :to="{ name: 'category', params: { id: category.idCategory } }"> -->
  <router-link to="">
    <img
      class="category-img"
      :src="category.strCategoryThumb"
      :category="category.strCategory"
    />
    <h3 class="category-title">{{ category.strCategory }}</h3>
  </router-link>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    category: Object,
  },
};
</script>