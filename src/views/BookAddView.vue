<template>
  <div class="flex justify-center q-pa-md">
    <h2>Add book</h2>
    <q-form @submit="onSubmit" @reset="onReset">
      <div class="row">
        <q-input
          v-model="title"
          filled
          label="Your title *"
          class="q-pl-md col-6"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          v-model="ISBN"
          filled
          type="text"
          label="Your ISBN *"
          class="q-pl-md col-6"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
          ]"
        />
        <q-input
          v-model="author"
          filled
          type="text"
          label="Author *"
          class="q-pl-md col-6"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type author',
          ]"
        />
        <q-input
          v-model="description"
          filled
          type="text"
          label="Book description"
          class="q-pl-md col-6"
          lazy-rules
        />
        <q-input
          v-model="category"
          filled
          type="text"
          label="Book category *"
          class="q-pl-md col-6"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type category',
          ]"
        />
        <q-input
          v-model="price"
          filled
          type="number"
          label="Book price *"
          class="q-pl-md col-6"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type price',
            (val) => (val > 0 && val < 1000000) || 'Please type a real price',
          ]"
        />
        <q-file v-model="image" class="q-pl-md" outlined>
          <template #prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file>
      </div>
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";
import store from "@/store";
import { useRouter } from "vue-router";

const $q = useQuasar();
const title = ref(null);
const ISBN = ref(Math.random().toString(16).slice(2));
const author = ref(null);
const image = ref(null);
const description = ref(null);
const category = ref(null);
const price = ref(null);
const isCorrectData = ref(true);
const router = useRouter();

function onSubmit() {
  if (isCorrectData.value) {
    let objBook = {
      id: ISBN.value,
      title: title.value,
      ISBN: ISBN.value,
      author: author.value,
      image: "",
      description: description.value,
      category: category.value,
      price: price.value,
    };
    store.dispatch("addBook", objBook);
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "Submitted",
    });
    router.push("/");
  } else {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "You need to accept the license and terms first",
    });
  }
}

function onReset() {
  title.value = null;
  ISBN.value = null;
  author.value = null;
  image.value = null;
  description.value = null;
  category.value = null;
  price.value = null;
}
</script>

<style lang="scss" scoped></style>
