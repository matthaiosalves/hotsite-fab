<template>
  <div class="conteudos mb-3">
    <div
      class="informativo mb-3"
      v-for="(informativo, index) in informativos"
      :key="index"
    >
      <div class="card">
        <div class="infor-content">
          <div
            class="infor-img"
            :style="
              'background: url(' +
              informativo.avatar +
              ') -10px -20px; width: 45px; float: left; height: 50px; border-bottom: 1px solid #1f4c64;'
            "
          ></div>
          <div class="infor-text">
            <span class="infor-text-name pull-left white-text">{{
              informativo.autor
            }}</span>
            <br />
            <span class="infor-text-type" style="font-size: 8pt; color: white">{{
              informativo.tipo
            }}</span>
          </div>
          <img
            :src="informativo.icone"
            alt="Icone da Fab"
            width="111"
            height="auto"
            lazy="loading"
          />
        </div>
        <p style="font-size: 9pt; color: white" class="pt-2">{{ informativo.texto }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Informativos",
  data() {
    return {
      informativos: [
        {
          avatar:
            "https://www.habbo.com.br/habbo-imaging/avatarimage?hb=image&user=Alex-Pearce&headonly=2&direction=2&head_direction=2&size=m",
          autor: "Alex-Pearce",
          tipo: "Aviso militar Global",
          icone: "https://www.fab.mil.br/images/sistema/geral/gladio_80px.png",
          texto:
            "Bem-vindo a Força Aérea Brasileira Habbo, faça seu cadastro e aproveite nosso sistema. Procure por Alex-Pearce e aliste-se!",
        },
        {
          avatar:
            "https://www.habbo.com.br/habbo-imaging/avatarimage?hb=image&user=Alex-Pearce&headonly=2&direction=2&head_direction=2&size=m",
          autor: "Alex-Pearce",
          tipo: "Aviso militar Global",
          icone: "https://www.fab.mil.br/images/sistema/geral/gladio_80px.png",
          texto:
            "A prova da EEAr possui o custo de 10 câmbios. Procure um Oficial Superior para realizá-la, podendo atingir até 3° Sargento. Estamos te esperando de braços abertos!",
        },
        {
          avatar:
            "https://www.habbo.com.br/habbo-imaging/avatarimage?hb=image&user=Alex-Pearce&headonly=2&direction=2&head_direction=2&size=m",
          autor: "Alex-Pearce",
          tipo: "Aviso militar Global",
          icone: "https://www.fab.mil.br/images/sistema/geral/gladio_80px.png",
          texto:
            "A prova da EEAr possui o custo de 10 câmbios. Procure um Oficial Superior para realizá-la, podendo atingir até 3° Sargento. Estamos te esperando de braços abertos!",
        },
        {
          avatar:
            "https://www.habbo.com.br/habbo-imaging/avatarimage?hb=image&user=Alex-Pearce&headonly=2&direction=2&head_direction=2&size=m",
          autor: "Alex-Pearce",
          tipo: "Aviso militar Global",
          icone: "https://www.fab.mil.br/images/sistema/geral/gladio_80px.png",
          texto:
            "A prova da EEAr possui o custo de 10 câmbios. Procure um Oficial Superior para realizá-la, podendo atingir até 3° Sargento. Estamos te esperando de braços abertos!",
        },
        {
          avatar:
            "https://www.habbo.com.br/habbo-imaging/avatarimage?hb=image&user=Alex-Pearce&headonly=2&direction=2&head_direction=2&size=m",
          autor: "Alex-Pearce",
          tipo: "Aviso militar Global",
          icone: "https://www.fab.mil.br/images/sistema/geral/gladio_80px.png",
          texto:
            "A prova da EEAr possui o custo de 10 câmbios. Procure um Oficial Superior para realizá-la, podendo atingir até 3° Sargento. Estamos te esperando de braços abertos!",
        },
      ],
    };
  },
};
</script>
