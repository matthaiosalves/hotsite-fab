<template>
  <div class="fardamentos">
    <div class="card">
      <div class="card-header">
        <span>Fardamentos da Força Aérea Brasileira</span>
        <img
          src="https://www.fabhabbo.com/public/icons/uniform.png"
          alt="Icone do uniforme"
          width="auto"
          height="auto"
        />
      </div>
      <div class="card-body">
        <div class="row">
          <div
            class="col-md-6 farda"
            v-for="(farda, index) in fardamentos.slice(0, 5)"
            :key="index"
          >
            <span>{{ farda.nome }}</span>
            <img :src="farda.image" alt="" />
          </div>
          <div
            class="col-md-6 farda"
            v-for="(farda, index) in fardamentos.slice(5, 10)"
            :key="index"
          >
            <span>{{ farda.nome }}</span>
            <img :src="farda.image" alt="" />
          </div>
        </div>
      </div>
      <div
        style="
          background-color: var(--bg-color-blue-Ofcourse);
          padding: 10px 0;
          margin-bottom: 1rem;
        "
      >
        <span style="text-align: center; display: block">Luto</span>
      </div>
      <div class="card-body">
        <div class="row">
          <div
            class="col-md-6 farda"
            v-for="(farda, index) in fardamentosLuto"
            :key="index"
          >
            <span>{{ farda.nome }}</span>
            <img :src="farda.image" alt="" />
          </div>
        </div>
      </div>
      <div
        style="
          background-color: var(--bg-color-blue-Ofcourse);
          padding: 10px 0;
          margin-bottom: 1rem;
        "
      >
        <span style="text-align: center; display: block">Ministros</span>
      </div>
      <div class="card-body">
        <div class="row">
          <div
            class="col-md-6 farda"
            v-for="(farda, index) in fardamentosMinistros"
            :key="index"
          >
            <span>{{ farda.nome }}</span>
            <img :src="farda.image" alt="" />
          </div>
        </div>
      </div>
      <div
        style="
          background-color: var(--bg-color-blue-Ofcourse);
          padding: 10px 0;
          margin-bottom: 1rem;
        "
      >
        <span style="text-align: center; display: block">Patrocinadores</span>
      </div>
      <div class="card-body">
        <div class="row">
          <div
            class="col-md-6 farda"
            v-for="(farda, index) in fardamentosPatrocinadores"
            :key="index"
          >
            <span>{{ farda.nome }}</span>
            <img :src="farda.image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Fardamentos",
  data() {
    return {
      fardamentos: [
        {
          nome: "Recruta",
          image: "https://www.fabhabbo.com/public/images/uniforms/recruta.png",
        },
        {
          nome: "Soldado a SubOficial",
          image: "https://www.fabhabbo.com/public/images/uniforms/praca.png",
        },
        {
          nome: "EEAR Aluno",
          image: "https://www.fabhabbo.com/public/images/uniforms/eear.png",
        },
        {
          nome: "EPCAR Aluno",
          image: "https://www.fabhabbo.com/public/images/uniforms/epcar.png",
        },
        {
          nome: "AFA Cadete",
          image: "https://www.fabhabbo.com/public/images/uniforms/afa.png",
        },
        {
          nome: "Aspirante-a-Oficial",
          image: "https://www.fabhabbo.com/public/images/uniforms/aspirante.png",
        },
        {
          nome: "Oficial",
          image: "https://www.fabhabbo.com/public/images/uniforms/oficial.png",
        },
        {
          nome: "Alto Comando",
          image: "https://www.fabhabbo.com/public/images/uniforms/alto_comando.png",
        },
        {
          nome: "Aposentados",
          image: "https://www.fabhabbo.com/public/images/uniforms/oficial.png",
        },
        {
          nome: "Ex-Comandantes",
          image: "https://www.fabhabbo.com/public/images/uniforms/ministros.png",
        },
      ],
      fardamentosLuto: [
        {
          nome: "Luto Praça",
          image: "https://www.fabhabbo.com/public/images/uniforms/luto_praca.png",
        },
        {
          nome: "Luto Oficial",
          image: "https://www.fabhabbo.com/public/images/uniforms/luto_oficial.png",
        },
      ],
      fardamentosMinistros: [
        {
          nome: "Normal",
          image: "https://www.fabhabbo.com/public/images/uniforms/ministros.png",
        },
        {
          nome: "Opcional",
          image: "https://www.fabhabbo.com/public/images/uniforms/ministrosOptional.png",
        },
      ],
      fardamentosPatrocinadores: [
        {
          nome: "Praças",
          image: "https://www.fabhabbo.com/public/images/uniforms/patrocinadores.png",
        },
        {
          nome: "Opcional",
          image:
            "https://www.fabhabbo.com/public/images/uniforms/patrocinadoresOptional.png",
        },
      ],
    };
  },
};
</script>
<style scoped>
.fardamentos .farda {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fardamentos .farda span {
  background-color: var(--bg-color-blue-Ofcourse);
  text-align: center;
  border-radius: 5px;
  width: 170px;
  margin-bottom: 10px;
  font-size: 11pt;
}

.fardamentos .farda img {
  margin-bottom: 2rem;
}

.fardamentos span {
  font-size: 14pt;
  font-weight: 700;
}

.fardamentos .card-header {
  position: relative;
  background-color: var(--bg-color-blue-Ofcourse);
}

.fardamentos .card-header img {
  position: absolute;
  top: 0;
  right: 10px;
}

.fardamentos .card {
  background-image: url(../assets/images/bg_blue.png);
  color: white;
}
</style>
