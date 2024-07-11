<script setup>
import Perfil from "@/components/Perfil.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const user = route.params.user;
</script>

<template>
  <main>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <Perfil :user="user" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
