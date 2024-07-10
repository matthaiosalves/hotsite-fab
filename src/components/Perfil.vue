<template>
  <div>
    <h1>Perfil do Usuário</h1>
    <p>Nome do Usuário: {{ user }}</p>
  </div>
</template>

<script>
export default {
  name: "Perfil",
  props: {
    user: {
      type: String,
      required: true,
    },
  },
};
</script>
