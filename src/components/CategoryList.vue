<template>
  <div class="row">
    <article
      v-for="category in categories"
      :key="category.idCategory"
      class="category col-6 col-md-3 col-lg-2"
    >
      <CategoryCard :category="category" />
    </article>
  </div>
</template>

<script>
import CategoryCard from "./CategoryCard";

export default {
  components: { CategoryCard },
  name: "CategoryList",
  props: { categories: Array },
};
</script>


 