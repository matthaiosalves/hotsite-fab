<template>
  <div class="item">
    <div class="card" style="overflow: inherit">
      <div class="card-header">
        <h3>Perfil</h3>
      </div>
      <div
        style="
          background: linear-gradient(rgb(71 173 225) 5%, rgb(71 173 225) 25%);
          color: #fff;
        "
      >
        <div class="row">
          <div class="col-xs-6 col-md-5 col-lg-3">
            <!-- FOTO DO PERFIL -->
            <div
              style="
                position: relative;
                display: inline-block;
                background-size: cover;
                background-color: var(--bg-color-blue-dark);
                background-position: center;
                border-radius: 5px;
                width: 100%;
                height: 160px;
                margin-left: 13px;
                margin-top: -76px;
              "
            >
              <div
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
                }"
              ></div>
            </div>
            <!-- FOTO DO PERFIL -->
          </div>
          <div class="col-xs-6 col-md-7 col-lg-9">
            <div
              id="infos_do_habbo"
              class="grupos_habbo"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="MARECHAL-DO-AR"
            >
              <img
                src="https://i.postimg.cc/HxkSz9bG/Aspirante-FAB.png"
                style="height: 50px"
              />
            </div>

            <!-- NOME PATENTE CP PROMOCAO -->
            <h1>
              <strong>{{ user }}</strong>
            </h1>
            <h3 style="text-transform: uppercase; color: #fff">MARECHAL-DO-AR</h3>

            <div
              id="infos_CP"
              class="CP"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="Companhia"
            >
              <span style="padding: 5px 15px; background: #00446c; border-radius: 20px">
                <strong>2ª CP</strong>
                <!-- <strong>3ª CP</strong> -->
              </span>
            </div>

            <div
              id="infos_Alistamento"
              class="data_alistamento"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="Data de Alistamento"
            >
              <i class="fa fa-flag" aria-hidden="true"></i> 02/01/2021<br />
            </div>

            <div
              id="infos_Promocao"
              class="ultima_promocao"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="Última Promoção"
            >
              <i class="fa fa-level-up" aria-hidden="true"></i> 28/05/2024<br />

              <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>

              <img
                :src="
                  'https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=gif&user=' +
                  user +
                  '&direction=2&head_direction=3&size=s&headonly=1'
                "
                style="margin: -5px"
              />

              {{ user }}
            </div>
            <!-- NOME PATENTE CP PROMOCAO -->
            <div class="row">
              <div class="col-xs-12 col-md-6 col-lg-6">
                <div
                  class="status2"
                  id="status"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title=""
                  data-original-title="Status"
                >
                  Ativo
                </div>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-6">
                <!-- GRUPOS EXTERNOS PAINEL GRUPOS -->
                <!-- GRUPOS EXTERNOS PAINEL GRUPOS -->
              </div>
            </div>
            <div style="float: right; margin-right: 20px"></div>
          </div>
        </div>

        <div class="row" style="padding: 10px">
          <div class="col-xs-12 col-md-7 col-lg-8">
            <div
              style="
                background: rgb(0 68 108);
                border-radius: 5px;
                padding: 5px 5px 5px 10px;
              "
            >
              <h5 style="margin-bottom: -1px"><strong>Medalhas</strong></h5>
              <!-- Medalhas -->
            </div>
          </div>

          <div class="col-xs-12 col-md-5 col-lg-4">
            <div
              style="
                background: rgb(0 68 108);
                border-radius: 5px;
                padding: 5px 5px 5px 10px;
              "
            >
              <h5><b>Emblemas (0)</b></h5>
              <div
                style="
                  background: linear-gradient(to bottom, rgb(0 68 108) 0%, #00446c 100%);
                  border: 2px #00446c solid;
                  border-radius: 3px;
                  padding: 4px;
                  max-height: 200px;
                  overflow: overlay;
                "
              >
                <!-- Emblemas -->
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-md-12 col-lg-12">
            <br />
            <div
              style="
                background: rgb(0 68 108);
                border-radius: 5px;
                padding: 8px 5px 5px 10px;
              "
            >
              <br />
            </div>
            <br />
            <center>
              <img
                src="https://www.habbo.com.br/habbo-imaging/badge/b24054s02014s12114s2706403d32b6b84ee103306ec256bb91bdacc.gif"
              />
              <br /><br />
            </center>
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
.grupos_habbo {
  position: absolute;
  right: 0;
  margin-right: 30px;
  margin-top: -55px;
}

.patente {
  position: absolute;
  left: 0;
  margin-left: 10px;
  margin-top: -55px;
}

.data_alistamento {
  float: right;
  position: absolute;
  right: 0;
  margin-right: 30px;
  font-size: 13px;
  margin-top: -40px;
  text-align: right;
}

.ultima_promocao {
  float: right;
  position: absolute;
  right: 0;
  margin-right: 30px;
  font-size: 13px;
  margin-top: -20px;
  text-align: right;
}

.CP {
  float: right;
  position: absolute;
  right: 0;
  margin-right: 30px;
  font-size: 20px;
  margin-top: -80px;
  text-align: right;
}

.status2 {
  background: linear-gradient(to right, #00446c 0%, #00446c);
  width: 100%;
  padding: 3px 3px 3px 5px;
  border-radius: 5px;
}

.Info_Grupos_Externos {
  margin-right: 18px;
  font-size: 13px;
}

.Grupos_Externos {
  float: right;
  padding-right: 5px;
}

.Icon_Grupo_Externo {
  width: 25px;
  height: 25px;
  border-radius: 50px;
  float: right;
}

.titulo {
  filter: sepia(100%);
  width: 55px;
}

.titulo_desblock {
  background: linear-gradient(to bottom, #00446c 0%, #00446c 100%);
  border: 1px #fff solid;
  width: 85px;
  height: 85px;
  border-radius: 3px;
  padding: 8px;
  float: left;
  margin-right: 5px;
  margin-top: 5px;
}

.titulo_block {
  background: linear-gradient(to bottom, #00446c 0%, #00446c 100%);
  border: 1px #fff solid;
  width: 85px;
  height: 85px;
  border-radius: 3px;
  padding: 8px;
  float: left;
  margin-right: 5px;
  margin-top: 5px;
  opacity: 0.2;
}

.emblemas {
  margin: 1px;
}

.nao_button {
  background: transparent;
  border: 0;
}
.medalha {
  background-image: url("../assets/images/layou1.png");
  border: 1px #fff solid;
  width: 100%;
  height: 34px;
  border-radius: 3px;
  position: relative;
  margin-bottom: 5px;
}

.caixaMedalha {
  width: 23%;
  height: auto;
  float: left;
  margin-right: 5px;
  margin-top: 5px;
  position: relative;
}

.faixa {
  background-image: url("../assets/images/layou1.png");
  width: 34%;
  margin-left: 33%;
  height: 32px;
}

.faixa1 {
  background-image: url("../assets/images/layou1.png");
  width: 23%;
  margin-left: 18%;
  height: 32px;
  float: left;
}

.faixa2 {
  background-image: url("../assets/images/layou1.png");
  width: 23%;
  margin-left: 59%;
  height: 32px;
}

.emblema {
  width: 14px;
  height: 14px;
  margin-left: calc((100% - 14px) / 2);
  margin-top: 9px;
  position: absolute;
}
</style>
