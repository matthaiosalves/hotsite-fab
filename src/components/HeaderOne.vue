<template>
  <div class="wrapper_brasilflag">
    <div class="container">
      <div class="flag">
        <a
          href="https://www.gov.br/pt-br"
          target="_blank"
          rel="noopener noreferrer"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          data-bs-title="Este site está em pt-br (Brasil)"
          >Brasil</a
        >
      </div>
    </div>
  </div>

  <header>
    <div class="container">
      <div class="d-flex flex-column align-items-center">
        <img
          :src="`${API_BASE_URL}/public/images/logo_aberto.png`"
          alt="Icone do grupo aberto da Forca Aerea"
          style="transform: scale(0.8)"
          width="402"
          height="253"
          loading="lazy"
        />
        <h1 class="logo_aberto" :class="{ fadeIn: fadeInText }">
          Força Aérea Brasileira
        </h1>
        <span
          :class="{ fadeIn: fadeInText }"
          style="
            font-family: Titillium Web;
            color: rgb(255, 255, 255);
            line-height: 1.2;
            text-align: left;
            margin-top: -5px;
            font-size: 18px;
          "
          >Asas que protegem nosso país!</span
        >
      </div>
    </div>
  </header>
</template>

<script>
import { API_BASE_URL } from "@/../config.js";
export default {
  name: "HeaderOne",
  data() {
    return {
      rotateImage: false,
      fadeInText: false,
    };
  },
  mounted() {
    this.rotateImage = true;
    this.fadeInText = true;
  },
};
</script>

<style scoped>
header {
  color: var(--color-text-white);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 12px 0;
  background-size: cover;
  background-image: linear-gradient(207deg, #47ade100 0%, #47ade1 50%),
    url(https://www.fabhabbo.com/public/images/bg.png);
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.logo_aberto {
  font-size: 40px;
  color: rgb(255, 255, 255);
  line-height: 1.2;
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.75);
  text-transform: uppercase;
  font-weight: 900;
  margin-top: -105px;
  letter-spacing: -2px;
  text-align: center;
}
.logo_aberto img.rotate {
  animation: rotate 0.3s linear;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  animation: fadeIn 1s ease-in;
}
</style>
