<template>
  <div style="display: flex">
    <input
      id="inputSearch"
      class="outline hover:outline-dashed"
      type="text"
      name="waiterSearch"
      placeholder="search..."
      :value="searchText"
      @input="$emit('changeText', $event.target.value)"
    />
    <div
      v-if="searchText.length"
      id="clean"
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
