<template>
  <div class="bg-gray-600 p-5 m-2">
    <p>{{ article.title }} by {{ article.author }}</p>
    <img :src="article.urlToImage" :alt="article.title" />
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
