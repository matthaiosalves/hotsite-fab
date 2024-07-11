<script setup>
import AcessoRapido from "@/components/AcessoRapido.vue";
import Fardamentos from "@/components/Fardamentos.vue";
import PracaDestaque from "@/components/PracaDestaque.vue";
import OficialDestaque from "@/components/OficialDestaque.vue";
</script>

<template>
  <main>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <Fardamentos />
          </div>
          <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <PracaDestaque />
            <OficialDestaque />
            <AcessoRapido />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
