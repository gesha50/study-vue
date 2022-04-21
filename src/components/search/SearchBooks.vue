<template>
  <div style="display: flex">
    <input
      class=""
      type="text"
      name="waiterSearch"
      placeholder="search..."
      :value="searchText"
      @input="$emit('changeText', $event.target.value)"
    />
    <div
      v-if="searchText.length"
      style="margin-left: 5px; cursor: pointer"
      @click="$emit('clean')"
    >
      x
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

defineEmits(["clean", "changeText"]);

defineProps({
  searchText: {
    type: String,
    default: null,
  },
});
</script>

<style lang="scss" scoped></style>
