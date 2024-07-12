<template>
  <div class="cdo mb-3" id="cdo">
    <div class="title">
      <img
        src="https://www.fab.mil.br/images/sistema/geral/gladio_80px.png"
        alt="Brasão da Aeronáutica"
        width="auto"
        height="auto"
        lazy="loading"
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
    return {
      BASE_URL:
        "https://www.habbo.com.br/habbo-imaging/avatarimage?&action=sit&direction=2&head_direction=3&img_format=gif&gesture=sml&frame=1&headonly=0&size=m",
      users: [],
      rankGroups: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch("https://fabhabbo.com/fetch/oficiais");
        const fetchedUsers = await response.json();
        const mappedUsers = fetchedUsers.map((user) => ({
          name: user.nome,
          rank: this.mapRank(user.cargo_id),
        }));
        this.rankGroups = [
          {
            rank: "Generais",
            class: "generais",
            users: mappedUsers.filter(
              (user) => user.rank.includes("Marechal") || user.rank.includes("Brigadeiro")
            ),
          },
          {
            rank: "Superiores",
            class: "superiores",
            users: mappedUsers.filter((user) => user.rank.includes("Major")),
          },
          {
            rank: "Intermediários",
            class: "intermediarios",
            users: mappedUsers.filter((user) => user.rank.includes("Capitão")),
          },
          {
            rank: "Subalternos",
            class: "subalternos",
            users: mappedUsers.filter(
              (user) => user.rank.includes("Tenente") || user.rank.includes("Aspirante")
            ),
          },
        ];
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    },
    mapRank(cargo_id) {
      const ranks = {
        1: "Marechal-do-Ar ★★★★★",
        2: "Tenente-Brigadeiro ★★★★",
        3: "Major",
        4: "Capitão",
        5: "Primeiro Tenente",
        6: "Segundo Tenente",
        7: "Aspirante-a-Oficial",
      };
      return ranks[cargo_id] || "Desconhecido";
    },
    getImageUrl(userName) {
      return `${this.BASE_URL}&user=${userName}`;
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>
