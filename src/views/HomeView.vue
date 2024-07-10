<script setup>
import Informativos from "@/components/Informativos.vue";
import Conteudos from "@/components/Conteudos.vue";
import PracaDestaque from "@/components/PracaDestaque.vue";
import OficialDestaque from "@/components/OficialDestaque.vue";
import CorpoDeOficiais from "@/components/CorpoDeOficiais.vue";
import AcessoRapido from "@/components/AcessoRapido.vue";
import Novidades from "@/components/Novidades.vue";
import BoasVindas from "@/components/BoasVindas.vue";
</script>

<template>
  <main>
    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <PracaDestaque />
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <OficialDestaque />
            </div>
          </div>

          <div class="row">
            <Novidades />
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div class="row">
            <Conteudos />
            <Informativos />
          </div>
        </div>

        <div class="col-sm-12 mb-3">
          <div class="row">
            <BoasVindas />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <CorpoDeOficiais />
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <AcessoRapido />
        </div>
      </div>
    </section>
  </main>
</template>
