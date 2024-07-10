<script setup>
import Perfil from "@/components/Perfil.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const user = route.params.user;
</script>

<template>
  <main>
    <section>
      <Perfil :user="user" />
    </section>
  </main>
</template>
