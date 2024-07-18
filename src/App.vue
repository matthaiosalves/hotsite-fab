<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/HeaderOne.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Header />
  <Navbar />
  <RouterView />
  <Footer />
</template>
