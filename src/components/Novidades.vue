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
            <a :href="item.link">
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
        <form id="buscar" @submit.prevent="handleSubmit">
          <div class="container" style="line-height: 1.1">
            <div class="buscar-input-nickname">
              <input
                type="text"
                v-model="nickname"
                placeholder="Digite o nickname do militar..."
              />
              <button type="submit">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </form>
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
                />
              </div>
              <a :href="profileUrl" target="_blank" class="mt-2 btn btn-primary"
                >Ver Perfil</a
              >
            </div>
            <div class="col-md-8">
              <!-- Informações à direita -->
              <h3 class="mb-3">{{ System.name }}</h3>
              <p>
                <b>Patente:</b>
                <span>{{
                  System.patente ? System.patente : "Militar não alistado"
                }}</span>
              </p>
              <p>
                <b>Alistado:</b>
                <span>{{
                  System.data_alistamento
                    ? formatDate(System.data_alistamento).data
                    : "Não alistado"
                }}</span>
              </p>
              <p>
                <b>Última promoção:</b>
                <span>{{
                  System.ultima_promocao
                    ? formatDate(System.ultima_promocao).data
                    : "Sem promoção"
                }}</span>
              </p>
              <p>
                <b>Promovido por:</b>
                <a :href="promovidoPorUrl" target="_blank">{{ System.promovido_por }}</a>
              </p>
              <p>
                <b>Status:</b>
                <span :style="{ backgroundColor: statusColor }">{{
                  System.status_descricao
                }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Novidades",
  data() {
    return {
      nickname: "",
      System: {},
      showResultado: false,
      avatarUrl: "",
      profileUrl: "",
      promovidoPorUrl: "",
      statusColor: "",
    };
  },
  methods: {
    handleSubmit() {
      const APP_URL = "https://www.fabhabbo.com";
      fetch(`${APP_URL}/fetch/alistado`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: this.nickname,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro na requisição");
          }
          return response.json();
        })
        .then((dados) => {
          if (dados.error) {
            throw new Error(dados.error);
          }
          this.System = dados.success;
          this.avatarUrl = `http://www.habbo.com.br/habbo-imaging/avatarimage?&user=${this.System.name}&action=std&direction=3&head_direction=3&img_format=png&gesture=std&frame=1&headonly=0&size=l`;
          this.profileUrl = `${APP_URL}/profile/${this.System.name}`;
          this.promovidoPorUrl = `${APP_URL}/profile/${this.System.promovido_por}`;
          this.statusColor = this.getStatusColor(this.System.status);
          this.showResultado = true;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    closeResultado() {
      this.showResultado = false;
    },
    getStatusColor(status) {
      switch (status) {
        case 0:
          return "#008000"; // Ativo
        case 1:
          return "#d00000"; // Dispensado
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
