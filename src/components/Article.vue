<template>
  <div class="bg-gray-600 p-5 m-2">
    <h1 class="font-bold uppercase">{{ article.title }}</h1>
    <p>by {{ article.author }}</p>
    <img
      v-if="article.urlToImage !== null"
      :src="article.urlToImage"
      :alt="article.title"
    />
    <p>
      {{ article.description }}
    </p>
  </div>
</template>
<script setup>
import { defineComponent, defineProps } from "vue";

defineComponent({
  name: "Article",
});

defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>
