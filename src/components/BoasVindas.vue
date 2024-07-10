<template>
  <div class="be-welcome">
    <div class="card card--be-welcome">
      <div>
        <h2>Boas Vindas!</h2>
        <p>Os melhores já estão aqui.</p>
      </div>
      <div class="card-body">
        <div>
          <img
            v-for="(member, index) in members"
            :key="index"
            class="new--members"
            :src="`//www.habbo.com.br/habbo-imaging/avatarimage?user=${member}&direction=2&head_direction=3&gesture=sml&size=l`"
            alt="Novos Membros"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: ["DIAMANTE-NEGRO", "DIAMANTE-NEGRO", "DIAMANTE-NEGRO", "DIAMANTE-NEGRO"],
    };
  },
};
</script>
<style>
.card--be-welcome {
  width: 100%;
  height: 110px;
  color: var(--color-text-white);
  padding: 0;
  overflow: hidden;
  box-shadow: var(--Shadow);
  border: 0;
}
.card--be-welcome > div {
  padding-top: 20px;
  padding-left: 40px;
  text-transform: uppercase;
  background: linear-gradient(
    100deg,
    var(--bg-color-blue-Ofcourse),
    var(--bg-color-blue-Ofcourse),
    var(--bg-color-blue-Ofcourse),
    var(--bg-color-blue-Ofcourse)
  );
  width: 100%;
  height: 100%;
  color: var(--color-text-white);
}
.card--be-welcome div h2 {
  font-size: 31px;
  font-weight: 900;
}
.card--be-welcome div p {
  font-size: 12px;
  font-weight: 300;
}
.card--be-welcome .card-body {
  position: relative;
}
.card--be-welcome .card-body > div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 40px;
  left: 100px;
  padding-top: 20px;
  padding-left: 40px;
  width: 100%;
  height: 100%;
  color: var(--color-text-white);
}
.card--be-welcome .card-body > div .new--members {
  margin-top: -10px;
  margin-right: -26px;
  margin-left: -24px;
}
</style>
