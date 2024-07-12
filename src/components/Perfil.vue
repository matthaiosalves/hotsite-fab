<template>
  <div class="item perfil mb-3">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <div class="boxFotoPerfil">
              <div
                class="boxFotoPerfilBg"
                :style="{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  border: '3px solid #1e94d9',
                  borderRadius: '5px',
                  backgroundPosition: 'center top -30px',
                  backgroundImage:
                    'url(//www.habbo.com.br/habbo-imaging/avatarimage?user=' +
                    user +
                    '&direction=3&head_direction=3&size=l)',
                  backgroundRepeat: 'no-repeat',
                  padding: '10px 15px',
                }"
              >
                <div class="boxInfo">
                  <div class="boxPatente">
                    <img
                      src="https://i.postimg.cc/HxkSz9bG/Aspirante-FAB.png"
                      width="auto"
                      height="auto"
                      lazy="loading"
                      class="img-fluid"
                    />
                  </div>
                  <div class="box">
                    <div class="boxStatus">
                      <div class="status" :style="{ backgroundColor: '#84cc16' }">
                        <strong>Ativo</strong>
                      </div>
                      <div class="status" :style="{ backgroundColor: '#facc15' }">
                        <strong>Patrocinador</strong>
                      </div>
                      <div class="boxCP"><strong>2ª CP</strong></div>
                    </div>

                    <div class="infosPromocao">
                      <div class="data" style="font-size: 12px">
                        última promoção<br />
                        <span style="font-size: 12px">11/11/2011</span>
                      </div>
                      <div class="promovidoPorQuem">
                        <img
                          :src="
                            '//www.habbo.com.br/habbo-imaging/avatarimage?user=' +
                            user +
                            '&direction=2&head_direction=3&size=s&headonly=1'
                          "
                          style="margin: -5px"
                          width="auto"
                          height="auto"
                          lazy="loading"
                          class="img-fluid"
                        />
                        <span style="font-size: 12px">{{ user }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row ListInfos">
          <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div class="card boxCardInfo">
              <div class="card-header"><h6 class="text-center">Emblemas</h6></div>
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div class="card boxCardInfo">
              <div class="card-header"><h6 class="text-center">Medalhas</h6></div>
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div class="card boxCardInfo">
              <div class="card-header"><h6 class="text-center">Histórico</h6></div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
<style>
.perfil .card-body {
  background: linear-gradient(rgb(71 173 225) 5%, rgb(71 173 225) 25%);
  color: #fff;
}
.perfil .boxFotoPerfil {
  position: relative;
  background-size: cover;
  background-color: var(--bg-color-blue-dark);
  background-position: center;
  border-radius: 5px;
  width: 100%;
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
  min-height: 160px;
  margin-top: -25px;
}
.perfil .boxInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.perfil .boxStatus {
  display: flex;
  gap: 5px;
}
.perfil .status {
  max-width: fit-content;
  width: 100%;
  padding: 5px 15px;
  border-radius: 5px;
  min-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
}
.perfil .boxCP {
  padding: 5px 15px;
  background-color: var(--bg-color-blue-Ofcourse);
  border-radius: 20px;
}
.perfil .boxPatente {
  max-width: 120px;
  width: 100%;
  margin-top: -60px;
}
.perfil .boxPatente img {
  min-height: 50px;
}
.perfil .infosPromocao {
  margin-top: 15px;
  text-align: end;
}
.perfil .ListInfos {
  margin-top: 15px;
}
.perfil .ListInfos .boxCardInfo {
  background-color: var(--bg-color-blue-dark);
  min-height: 120px;
  max-width: 100%;
  border-radius: 5px;
  border: 3px solid rgb(30, 148, 217);
  background-image: none;
}
.perfil .ListInfos .boxCardInfo .card-header {
  border-radius: unset;
}
</style>
