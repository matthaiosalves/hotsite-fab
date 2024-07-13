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
      <div class="row">
        <div class="col-md-7">
          <div class="fab_logo_name">
            <a href="/" style="text-decoration: none; color: white">
              <img
                :class="{ rotate: rotateImage }"
                src="https://www.fabhabbo.com/public/images/fab_aberto.gif"
                alt="Logo da Força Aerea Habbo"
                width="133"
                height="133"
                lazy="loading"
                class="img-fluid"
              />
            </a>
            <div class="divisor"></div>
            <h1 :class="{ fadeIn: fadeInText }">Força Aérea Brasileira</h1>
          </div>
        </div>
        <div class="col-md-5"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
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
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.fab_logo_name img.rotate {
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
