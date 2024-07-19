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
                      :src="profile.patente_img"
                      width="120"
                      height="57"
                      lazy="loading"
                      class="img-fluid"
                    />
                  </div>
                  <div class="box">
                    <div class="boxStatus">
                      <div
                        class="status"
                        :style="{
                          backgroundColor:
                            profile.status === 'Ativo' ? '#84cc16' : '#facc15',
                        }"
                      >
                        <strong>{{ profile.status }}</strong>
                      </div>

                      <div
                        v-if="profile.patrocinador"
                        class="status"
                        :style="{ backgroundColor: '#facc15' }"
                      >
                        <strong>Patrocinador</strong>
                      </div>

                      <div v-if="profile.sigla" class="boxCP">
                        <strong>{{ profile.sigla || "N/A" }}</strong>
                      </div>
                    </div>

                    <div class="infosPromocao">
                      <div class="data" style="font-size: 12px">
                        última promoção<br />
                        <span style="font-size: 12px">{{
                          formatDate(profile.promocao)
                        }}</span>
                      </div>
                      <div class="promovidoPorQuem">
                        <img
                          :src="
                            '//www.habbo.com.br/habbo-imaging/avatarimage?user=' +
                            profile.promovido +
                            '&direction=2&head_direction=3&size=s&headonly=1'
                          "
                          style="margin: -5px"
                          width="27"
                          height="30"
                          lazy="loading"
                          class="img-fluid"
                        />
                        <span style="font-size: 12px">{{ profile.promovido }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row ListInfos">
          <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3">
            <div class="card boxCardInfo">
              <div class="card-header"><h6 class="text-center">Emblemas</h6></div>
              <div class="mt-3 text-center">
                {{ profile.emblemas || "Não há registros" }}
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3">
            <div class="card boxCardInfo">
              <div class="card-header"><h6 class="text-center">Medalhas</h6></div>
              <div class="mt-3 text-center">
                {{ profile.medalhas || "Não há registros" }}
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3">
            <div class="card boxCardInfo">
              <div class="card-header"><h6 class="text-center">Histórico</h6></div>
              <div class="mt-3 text-center">
                {{ profile.historico || "Não há registros" }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_BASE_URL } from "@/../config.js";

export default {
  name: "Perfil",
  props: {
    user: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      profile: {},
      error: null,
    };
  },
  watch: {
    user: {
      immediate: true,
      handler(newUser) {
        this.fetchProfile(newUser);
      },
    },
  },
  methods: {
    async fetchProfile(user) {
      this.error = null;
      try {
        const response = await axios.get(`${API_BASE_URL}/api/alistado?name=${user}`);
        this.profile = response.data;
      } catch (error) {
        this.error = "Erro ao carregar perfil";
      }
    },
    formatDate(dateString) {
      if (!dateString) return "";
      const [date] = dateString.split(" ");
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
  },
};
</script>

<style scoped>
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
  justify-content: end;
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
