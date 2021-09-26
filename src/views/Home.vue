<template>
  <div class="container mx-auto">
    <Banner msg="NewsAPi with Vue 3" />
    <div>
      <input type="text" v-model="search" class="p-3 rounded m-2" />
      <Button :loading="loading" :func="process" />
    </div>
    <Article
      v-for="(article, index) in articles"
      :key="index"
      :article="article"
    />
  </div>
</template>

<script setup>
import Banner from "@/components/Banner.vue";
import Button from "@/components/Button.vue";
import Article from "@/components/Article.vue";
import { useFetchNews } from "@/composables/News";

const { process, loading, articles, search } = useFetchNews();
</script>
