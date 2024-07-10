<template>
  <div class="destaques mb-3" v-for="(destaque, index) in destaques" :key="index">
    <div class="card">
      <div class="card-header">
        <!-- Usando router-link em vez de <a> -->
        <router-link :to="{ path: '/oficiais' }">
          <img
            :src="destaque.badgeImage"
            alt="Imagem de destaque"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            :data-bs-title="destaque.tooltip"
            width="auto"
            height="auto"
          />
        </router-link>
        <span style="font-weight: 700">{{ destaque.title }}</span>
      </div>
      <div
        :style="{
          color: 'white',
          backgroundImage: 'url(' + destaque.backgroundImage + ')',
          backgroundPosition: 'center',
        }"
      >
        <div class="destaques-body">
          <img :src="destaque.avatarImage" :alt="destaque.username" />
          <div class="destaques-text">
            <span>{{ destaque.username }}</span>
            <span>{{ destaque.rank }}</span>
            <router-link :to="{ path: '/perfil/' + destaque.username }">
              Ver Perfil <i class="bi bi-info-circle"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OficialDestaque",
  data() {
    return {
      destaques: [
        {
          badgeImage:
            "https://www.habbo.com.br/habbo-imaging/badge/b10054s36114s40014s42114s39114c0655ecc1d5780f98c2aceff273f9ca3.gif",
          tooltip: "Ir a página de Oficiais",
          title: "Oficial Destaque",
          backgroundImage: "https://i.imgur.com/94ITkXn.png",
          avatarImage:
            "https://www.habbo.com.br/habbo-imaging/avatarimage?user=Alex-Pearce&action=std&direction=2&head_direction=3&gesture=sml&size=l",
          username: "Alex-Pearce",
          rank: "Marechal-do-Ar ★★★★★",
        },
      ],
    };
  },
};
</script>
