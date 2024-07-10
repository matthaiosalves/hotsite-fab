<template>
  <div class="conteudos mb-3">
    <div class="card">
      <div class="card-header">Conteúdos</div>
      <ul>
        <li v-for="(item, index) in conteudos" :key="index">
          <a :href="item.link">
            <img :src="item.imagem" alt="" />
            <div>
              <b>{{ item.titulo }}</b>
              <br />
              <span style="opacity: 0.6">{{ item.descricao }}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conteudos",
  data() {
    return {
      conteudos: [
        {
          imagem:
            "https://www.habbo.com.br/habbo-imaging/badge/b10054s36114t47114s11017t1401468befb0d0b509d6e45186a86cbc3eecb.gif",
          titulo: "Adquira nossos patrocínios!",
          descricao:
            "Apoie a FAB e tenha acesso a novos uniformes, grupos e muito mais! Tudo por 20 créditos. Fale com um membro do Alto Comando.",
          link: "#",
        },
        {
          imagem:
            "https://www.habbo.com.br/habbo-imaging/badge/b10054s36164s11017t47114s79014b5fd1b8f46b215ca117d9df4400d7164.gif",
          titulo: "Adquira nossos patrocínios!",
          descricao:
            "Apoie a FAB e tenha acesso a novos uniformes, grupos e muito mais! Tudo por 20 créditos. Fale com um membro do Alto Comando.",
          link: "#",
        },
        {
          imagem:
            "https://www.habbo.com.br/habbo-imaging/badge/b10054s36114s11017t47114s90014fb1ff22dc38072f95d0c44c8bf29b18f.gif",
          titulo: "Adquira nossos patrocínios!",
          descricao:
            "Apoie a FAB e tenha acesso a novos uniformes, grupos e muito mais! Tudo por 20 créditos. Fale com um membro do Alto Comando.",
          link: "#",
        },
      ],
    };
  },
};
</script>
