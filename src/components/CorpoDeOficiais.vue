<template>
  <div class="cdo mb-3" id="cdo">
    <div class="title">
      <img
        src="https://www.fab.mil.br/images/sistema/geral/gladio_80px.png"
        alt="Brasão da Aeronáutica"
        width="auto"
        height="auto"
      /><br /><span>Corpo de Oficiais</span>
    </div>
    <hr />
    <div v-for="(rankGroup, index) in rankGroups" :key="index" :class="rankGroup.class">
      <template v-for="(user, idx) in rankGroup.users" :key="idx">
        <router-link
          :to="`/perfil/${user.name}`"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          :data-bs-title="`${user.rank}, ${user.name}`"
        >
          <img
            :src="getImageUrl(user.name)"
            :alt="user.name"
            width="auto"
            height="auto"
            lazy="loading"
          />
        </router-link>
      </template>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "CorpoDeOficiais",
  data() {
    const BASE_URL =
      "https://www.habbo.com.br/habbo-imaging/avatarimage?&action=sit&direction=2&head_direction=3&img_format=gif&gesture=sml&frame=1&headonly=0&size=m";

    const users = [
      {
        name: "Alex-Pearce",
        rank: "Marechal-do-Ar ★★★★★",
      },
      {
        name: "::Yashida",
        rank: "Tenente-Brigadeiro ★★★★",
      },
      {
        name: "LonaaCitan",
        rank: "Major",
      },
      {
        name: "Mascarenha",
        rank: "Major",
      },
      {
        name: "Zenitsu_l",
        rank: "Major",
      },
      {
        name: "felipeblu",
        rank: "Capitão",
      },
      {
        name: ".Apollo!",
        rank: "Primeiro Tenente",
      },
      {
        name: "barkk",
        rank: "Primeiro Tenente",
      },
      {
        name: "luizbethove",
        rank: "Segundo Tenente",
      },
      {
        name: "VIIPAZO",
        rank: "Aspirante-a-Oficial",
      },
      {
        name: "Eficientemente",
        rank: "Aspirante-a-Oficial",
      },
      {
        name: "danieljhim9",
        rank: "Aspirante-a-Oficial",
      },
      {
        name: "wosk",
        rank: "Aspirante-a-Oficial",
      },
    ];

    const getImageUrl = (userName) => `${BASE_URL}&user=${userName}`;

    const rankGroups = [
      {
        rank: "Generais",
        class: "generais",
        users: users.filter(
          (user) => user.rank.includes("Marechal") || user.rank.includes("Brigadeiro")
        ),
      },
      {
        rank: "Superiores",
        class: "superiores",
        users: users.filter((user) => user.rank.includes("Major")),
      },
      {
        rank: "Intermediários",
        class: "intermediarios",
        users: users.filter((user) => user.rank.includes("Capitão")),
      },
      {
        rank: "Subalternos",
        class: "subalternos",
        users: users.filter(
          (user) => user.rank.includes("Tenente") || user.rank.includes("Aspirante")
        ),
      },
    ];

    return {
      users,
      getImageUrl,
      rankGroups,
    };
  },
};
</script>
