import { useFetch } from "./api";
import { ref } from "vue";

export const useFetchNews = () => {
  const articles = ref(null);
  const response = ref(null);
  const error = ref(null);
  const loading = ref(false);
  const search = ref("cryptocurrency");

  const process = async () => {
    try {
      console.log(search.value, "logme");
      loading.value = true;
      const res = await useFetch(`everything`, {
        q: search.value,
      });
      articles.value = res.data.articles;
      response.value = res;
    } catch (e) {
      error.value = `Failed to fetch data. Error: ${e}`;
    } finally {
      loading.value = false;
    }
  };

  return { articles, response, error, loading, process, search };
};
