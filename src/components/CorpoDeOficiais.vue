<template>
  <div class="cdo mb-3" id="cdo">
    <div class="title">
      <img
        src="https://www.fab.mil.br/images/sistema/geral/gladio_80px.png"
        alt="Brasão da Aeronáutica"
        width="111"
        height="78"
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
            width="64"
            height="110"
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
      CACHE_KEY: "corpoDeOficiaisCache",
      CACHE_DURATION: 1000 * 60 * 60 * 24, // 24 hours
    };
  },
  methods: {
    getImageUrl(userName) {
      return `${this.BASE_URL}&user=${userName}`;
    },
    fetchUsers() {
      // console.log("Fetching users from API...");
      const apiUrl = `${API_BASE_URL}/api/alistados/oficiais`;
      axios
        .get(apiUrl)
        .then((response) => {
          const data = {
            timestamp: new Date().getTime(),
            users: response.data.map((item) => ({
              id: item.patente_id,
              name: item.nome,
              rank: item.patente,
            })),
          };
          localStorage.setItem(this.CACHE_KEY, JSON.stringify(data));
          this.users = data.users;
          this.groupUsersByRank();
          // console.log("Data fetched and stored in cache:", data);
        })
        .catch((error) => {
          console.error("Erro ao buscar os dados:", error);
        });
    },
    groupUsersByRank() {
      const generaisIds = [1, 2, 3, 4];
      const superioresIds = [5, 6, 7];
      const intermediariosIds = [8];
      const subalternosIds = [9, 10, 11];

      this.rankGroups = [
        {
          rank: "Generais",
          class: "generais",
          users: this.users.filter((user) => generaisIds.includes(user.id)),
        },
        {
          rank: "Superiores",
          class: "superiores",
          users: this.users.filter((user) => superioresIds.includes(user.id)),
        },
        {
          rank: "Intermediários",
          class: "intermediarios",
          users: this.users.filter((user) => intermediariosIds.includes(user.id)),
        },
        {
          rank: "Subalternos",
          class: "subalternos",
          users: this.users.filter((user) => subalternosIds.includes(user.id)),
        },
      ];
    },
    loadUsers() {
      const cache = localStorage.getItem(this.CACHE_KEY);
      if (cache) {
        const data = JSON.parse(cache);
        const now = new Date().getTime();
        if (now - data.timestamp < this.CACHE_DURATION) {
          this.users = data.users;
          this.groupUsersByRank();
          // console.log("Loaded users from cache:", data.users);
          return;
        } else {
          // console.log("Cache expired, fetching new data...");
        }
      } else {
        // console.log("No cache found, fetching new data...");
      }
      this.fetchUsers();
    },
  },
  created() {
    this.loadUsers();
  },
};
</script>
