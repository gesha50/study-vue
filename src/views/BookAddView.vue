<template>
  <div class="flex justify-center q-pa-md">
    <h2>Add book</h2>
    <q-form @submit="onSubmit" @reset="onReset">
      <div class="row">
        <q-input
          v-model="book.title"
          filled
          label="Your title *"
          class="q-pl-md col-6"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          v-model="book.ISBN"
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
          v-model="book.author"
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
          v-model="book.description"
          filled
          type="text"
          label="Book description"
          class="q-pl-md col-6"
          lazy-rules
        />
        <q-input
          v-model="book.category"
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
          v-model="book.price"
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
        <q-file v-model="book.image" class="q-pl-md" outlined>
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
import { reactive, ref } from "vue";
import store from "@/store";
import { useRouter } from "vue-router";

const $q = useQuasar();
const book = reactive({
  title: null,
  ISBN: Math.random().toString(16).slice(2),
  author: null,
  image: null,
  description: null,
  category: null,
  price: null,
});
const isCorrectData = ref(true);
const router = useRouter();

function onSubmit() {
  if (isCorrectData.value) {
    let objBook = {
      id: book.ISBN,
      title: book.title,
      ISBN: book.ISBN,
      author: book.author,
      image: "",
      description: book.description,
      category: book.category,
      price: book.price,
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
  book.title = null;
  book.ISBN = null;
  book.author = null;
  book.image = null;
  book.description = null;
  book.category = null;
  book.price = null;
}
</script>

<style lang="scss" scoped></style>
