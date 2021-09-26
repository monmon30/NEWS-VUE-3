<template>
  <button @click="func" class="p-3 bg-blue-900 text-blue-100 rounded-lg">
    {{ loading ? "Loading" : "Fetch News" }}
  </button>
</template>

<script setup>
import { defineComponent, defineProps } from "vue";
defineComponent({
  name: "Button",
});

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  func: {
    type: Function,
    required: true,
  },
});
</script>
