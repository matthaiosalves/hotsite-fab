<template>
  <div class="novidades">
    <div class="card mb-3">
      <div class="card-header">
        <div class="marquee" style="background: transparent; border: transparent">
          <img
            alt="Iocne do blogspot"
            width="38"
            height="38"
            style="color: transparent"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgP81UXZ1Gp9LJLG7U3QA34-yHnEpTgHrixwtBJk4Hp0lQJHqWqFmfaqMcrAMk1pX8-GbM53k4R0DLdTB0NQeG5v-cEPM6hLz7XDu_DJa6bqLBjaswx4MsBqws-k6nKRdU5ZBBdK0ufxk5z/s1600/Image+1383.png"
          />
          <div class="marquee-style">
            <div class="animate-marquee">
              OS DESTAQUES SEMANAIS SÃO OS MILITARES QUE MELHOR SE DESEMPENHARAM EM SUAS
              FUNÇÕES!
            </div>
          </div>
        </div>
      </div>

      <div
        id="carouselNovidades"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="(item, index) in carouselItems"
            :key="index"
            :class="{ active: index === 0 }"
            data-bs-interval="10000"
          >
            <a :href="item.link" target="_blank">
              <img
                :src="item.image"
                class="d-block w-100"
                alt="Imagem do destaque"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                :data-bs-title="item.tooltip"
                width="auto"
                height="auto"
                lazy="loading"
              />
            </a>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselNovidades"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Voltar</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselNovidades"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Avançar</span>
        </button>
      </div>

      <div class="card-footer">
        <!-- Formulário para buscar o usuário -->
        <form id="buscar" @submit.prevent="handleSubmit">
          <div class="container" style="line-height: 1.1">
            <div class="buscar-input-nickname">
              <input
                type="text"
                v-model="nickname"
                placeholder="Digite o nickname do militar..."
              />
              <button type="submit" aria-label="Buscar">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </form>

        <!-- Spinner de carregamento -->
        <div v-if="isLoading" class="d-flex justify-content-center mt-3">
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        </div>

        <!-- Resultado -->
        <div id="buscar-content" v-if="showResultado" class="mt-3">
          <button @click="closeResultado" class="btn btn-sm btn-danger float-end">
            Fechar
          </button>
          <div class="row">
            <div class="col-md-4 d-flex flex-column align-items-center mb-3">
              <!-- Avatar e informações à esquerda -->
              <div class="avatar">
                <img
                  :src="avatarUrl"
                  :alt="System.name"
                  class="img-fluid rounded-circle"
                  width="auto"
                  height="auto"
                  lazy="loading"
                />
              </div>
              <router-link :to="profileUrl" class="mt-2 btn btn-primary">
                Ver Perfil
              </router-link>
            </div>
            <div class="col-md-8 boxInfoRight">
              <!-- Informações à direita -->
              <h3 class="mb-3">{{ System.name }}</h3>
              <p>
                <strong>Patente: </strong>
                <span>{{ System.rank ? System.rank : "Militar não alistado" }}</span>
              </p>
              <p>
                <strong>Alistado: </strong>
                <span>
                  {{
                    System.data_alistamento
                      ? formatDate(System.data_alistamento).data
                      : "Não alistado"
                  }}
                </span>
              </p>
              <p>
                <strong>Última promoção: </strong>
                <span>
                  {{
                    System.ultima_promocao
                      ? formatDate(System.ultima_promocao).data
                      : "Sem promoção"
                  }}
                </span>
              </p>
              <p>
                <strong>Promovido por: </strong>
                <router-link :to="promovidoPorUrl">{{
                  System.promovido_por
                }}</router-link>
              </p>
              <p>
                <strong>Status: </strong>
                <span :class="['badge', statusColor]">{{ System.status }}</span>
              </p>
            </div>
          </div>
        </div>
        <!-- Mensagem de erro -->
        <div v-if="error" class="mt-3 alert alert-danger">
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_BASE_URL } from "@/../config.js";
export default {
  name: "Novidades",
  data() {
    return {
      nickname: "",
      System: {},
      showResultado: false,
      isLoading: false,
      avatarUrl: "",
      profileUrl: "",
      promovidoPorUrl: "",
      statusColor: "",
      carouselItems: [
        {
          link: "",
          image: "https://i.imgur.com/QSWNmXp.png",
          tooltip: "Ir a página...",
        },
        {
          link: "",
          image: "https://i.imgur.com/h9SyYH0.png",
          tooltip: "Ir a página...",
        },
        {
          link: "",
          image: "https://i.imgur.com/fYRzUgt.png",
          tooltip: "Ir a página...",
        },
      ],
      error: "",
    };
  },
  methods: {
    handleSubmit() {
      this.isLoading = true;
      this.showResultado = false;
      this.error = "";
      const APP_URL = API_BASE_URL;
      const apiUrl = `${APP_URL}/api/alistado?name=${this.nickname.trim()}`;

      axios
        .get(apiUrl)
        .then((response) => {
          const dados = response.data;

          if (dados.error) {
            this.error = "Busca inválida ou militar não encontrado.";
            throw new Error(dados.error);
          }

          const user = dados;
          this.System = {
            name: user.apelido,
            rank: user.patente,
            status: user.status,
            sigla: user.sigla,
            treinamento: user.treinamento,
            moedasAtual: user.moedasAtual,
            data_alistamento: user.alistamento,
            ultima_promocao: user.promocao,
            promovido_por: user.promovido,
          };

          this.avatarUrl = `http://www.habbo.com.br/habbo-imaging/avatarimage?&user=${this.System.name}&action=std&direction=3&head_direction=3&img_format=png&gesture=std&frame=1&headonly=0&size=l`;
          this.profileUrl = `/perfil/${this.System.name}`;
          this.promovidoPorUrl = `/perfil/${this.System.promovido_por}`
            ? `/perfil/${this.System.promovido_por}`
            : "";
          this.statusColor = this.getStatusColor(this.System.status);
          this.showResultado = true;
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.status === 404) {
              this.error = "Militar não encontrado. Verifique o nome e tente novamente.";
            } else if (err.response.status === 500) {
              // this.error =
              //   "Ocorreu um erro interno no servidor. Tente novamente mais tarde.";
              this.error = "Militar não encontrado. Verifique o nome e tente novamente.";
            } else {
              this.error = "Erro ao buscar dados. Verifique o nome e tente novamente.";
            }
          } else {
            this.error = "Erro de conexão. Verifique sua internet e tente novamente.";
          }
          console.error(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    closeResultado() {
      this.showResultado = false;
    },
    getStatusColor(status) {
      switch (status) {
        case "Demitido":
          return "bg-danger"; // Demitido
        case "Ativo":
          return "bg-success"; // Ativo
        case 2:
          return "#d00000"; // Traicao
        case 3:
          return "#d00000"; // Mau Comportamento
        case 4:
          return "#d00000"; // Fake
        case 5:
          return "#e9b700"; // Aposentado
        case 6:
          return "#008000"; // Reservista
        default:
          return ""; // Status não definido
      }
    },
    formatDate(date) {
      function addZero(num) {
        return num < 10 ? `0${num}` : num;
      }

      let dataObj = new Date(date);

      let dataFormatada = `${addZero(dataObj.getDate())}/${addZero(
        dataObj.getMonth() + 1
      )}/${dataObj.getFullYear()}`;
      let horaFormatada = `${addZero(dataObj.getHours())}:${addZero(
        dataObj.getMinutes()
      )}:${addZero(dataObj.getSeconds())}`;

      return {
        data: dataFormatada,
        hora: horaFormatada,
      };
    },
  },
};
</script>

<style>
a {
  color: #fff;
  text-decoration: none;
}
.boxInfoRight p {
  margin-bottom: 0;
}
</style>
