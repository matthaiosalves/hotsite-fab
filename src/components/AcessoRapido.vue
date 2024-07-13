<template>
  <aside class="acesso_rapido">
    <div class="card">
      <div class="card-header">
        <span style="font-size: 13pt">Acesso Rápido</span>
      </div>
      <ul>
        <li v-for="(item, index) in acessosRapidos" :key="index">
          <router-link :to="item.link" v-if="item.link !== '#'">
            <img
              :src="item.image"
              :alt="item.text"
              :width="item.width"
              :height="item.height"
              lazy="loading"
            />
            <span>{{ item.text }}</span>
          </router-link>
          <a :href="item.link" v-else>
            <img
              :src="item.image"
              :alt="item.text"
              :width="item.width"
              :height="item.height"
              lazy="loading"
            />
            <span>{{ item.text }}</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "AcessoRapido",
  data() {
    return {
      acessosRapidos: [
        {
          link: "/instituicao/fardamentos",
          image: "https://www.fabhabbo.com/public/images/icons/uniform.png",
          text: "Icone que representa um fardamento no lado esquerdo.",
          width: "40",
          height: "52",
        },
        {
          link: "/apostilas/peles-e-cabelos",
          image: "https://www.fabhabbo.com/public/images/icons/peles.png",
          text: "Icone de uma cara que representa peles e cabelos no lado esquerdo.",
          width: "40",
          height: "40",
        },
        {
          link: "#",
          image:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjv8bd1tiv_f6KCyEtq5QEB4GWM1rsPIjlY9RboA-miz22V4uM5WUM6J9QDO7sq2-0z_qZ2FH3Gqbq1bJDKV8yp8zTthPMRW1pR3fY2OkpfnrT_IYYiSyid77fxlvi2agiPhkIXmhqLGJXB/s1600/FR09A.gif",
          text:
            "Icone de um brasão para representar a hierarquia militar no lado esquerdo.",
          width: "40",
          height: "40",
        },
        {
          link: "#",
          image:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQrhMlmV231lS074OnvP4LiAgJgzbbO4GfGnmXmTBP9T8Z_3vF66WFeGIsgaiodg1FtNww326LaKNtGBp3icih82IHt5rjiw8PqKwmAKtPta9YyvLH6GEn9tntQNHD_dcrqlO0SJh5y7I/s1600/ARM28.gif",
          text:
            "Icone de um militar em um campo de instrução para representar as academias no lado esquerdo.",
          width: "40",
          height: "40",
        },
      ],
    };
  },
};
</script>
