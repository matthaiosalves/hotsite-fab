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
import axios from "axios";
import { API_BASE_URL } from "@/../config.js";

export default {
  name: "CorpoDeOficiais",
  data() {
    return {
      users: [],
      rankGroups: [],
      BASE_URL:
        "https://www.habbo.com.br/habbo-imaging/avatarimage?&action=sit&direction=2&head_direction=3&img_format=gif&gesture=sml&frame=1&headonly=0&size=m",
    };
  },
  methods: {
    getImageUrl(userName) {
      return `${this.BASE_URL}&user=${userName}`;
    },
    fetchUsers() {
      const apiUrl = `${API_BASE_URL}/fetch/oficiais`;
      axios
        .get(apiUrl)
        .then((response) => {
          this.users = response.data.success.map((item) => ({
            name: item.alistado_nome,
            rank: item.patente_nome,
          }));
          this.groupUsersByRank();
        })
        .catch((error) => {
          console.error("Erro ao buscar os dados:", error);
        });
    },
    groupUsersByRank() {
      this.rankGroups = [
        {
          rank: "Generais",
          class: "generais",
          users: this.users.filter(
            (user) => user.rank.includes("Marechal") || user.rank.includes("Brigadeiro")
          ),
        },
        {
          rank: "Superiores",
          class: "superiores",
          users: this.users.filter((user) => user.rank.includes("Major")),
        },
        {
          rank: "Intermediários",
          class: "intermediarios",
          users: this.users.filter((user) => user.rank.includes("Capitão")),
        },
        {
          rank: "Subalternos",
          class: "subalternos",
          users: this.users.filter(
            (user) => user.rank.includes("Tenente") || user.rank.includes("Aspirante")
          ),
        },
      ];
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>
