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
        <form id="buscar" action="#">
          <div class="container" style="line-height: 1.1">
            <div class="buscar-input-nickname">
              <input
                type="text"
                name="nickname"
                id="nickname"
                placeholder="Digite o nickname do militar..."
              />
              <button id="buscar-search" type="submit" for="buscar">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </form>
        <div id="buscar-content" style="display: none"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Novidades",
  data() {
    return {
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
    };
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", this.setupForm);
  },
  methods: {
    setupForm() {
      const form_buscar = document.getElementById("buscar");
      const APP_URL = "https://www.fabhabbo.com";
      form_buscar.addEventListener("submit", (event) => {
        event.preventDefault();
        let buscar_content = document.getElementById("buscar-content");
        let nickname = document.getElementById("nickname");

        buscar_content.removeAttribute("style");
        buscar_content.style.display = "block";
        buscar_content.innerHTML = `
          <div class="d-flex justify-content-center">
            <div class="spinner-border" style="color:white !important;" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>`;
        fetch(`${APP_URL}/fetch/alistado`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: nickname.value,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new error("Erro na requisição");
            }
            return response.json();
          })
          .then((dados) => {
            if (dados.error) {
              throw new Error(dados.error);
            }

            this.Resultado(dados.success);
          })
          .catch((err) => {
            buscar_content.textContent = err.message;
            buscar_content.style.backgroundColor = "#e40000";
          });
      });
    },
    Resultado(success) {
      // Implement your Resultado logic here
    },
  },
};
</script>
