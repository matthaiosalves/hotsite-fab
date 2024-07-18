<template>
  <footer>
    <div class="wrapper_footer_links">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="wrapper_footer_links_devs">
              <a :href="footerData.links[0].url">
                <img
                  :src="footerData.links[0].imageUrl"
                  :alt="footerData.links[0].altText"
                  width="39"
                  height="39"
                  lazy="loading"
                />
              </a>
              <small style="font-weight: 700; font-size: 15pt">{{
                footerData.organization
              }}</small
              ><br />
              <small>
                © Desenvolvido por
                <a
                  :href="footerData.developer[0].url"
                  target="_blank"
                  rel="noopener"
                  style="text-decoration: none; color: white"
                >
                  <strong>{{ footerData.developer[0].name }}</strong>
                </a>
                e
                <a
                  :href="footerData.developer[1].url"
                  target="_blank"
                  rel="noopener"
                  style="text-decoration: none; color: white"
                >
                  <strong>{{ footerData.developer[1].name }}</strong>
                </a>
              </small>
              <small> - {{ footerData.year }}</small>
            </div>
          </div>
          <div class="col-12"></div>
        </div>
      </div>
    </div>
    <div class="wrapper_footer_infor">
      <div class="container">
        <span>
          © {{ footerData.year }} {{ footerData.organization }} - {{ footerData.rank }} -
          <strong>
            <a :href="footerData.links[1].url" target="_blank" rel="noopener">{{
              footerData.links[1].displayText
            }}</a>
          </strong>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    const year = new Date().getFullYear();
    return {
      footerData: {
        links: [
          {
            url: "https://fabhabbo.com/",
            imageUrl:
              "https://www.habbo.com.br/habbo-imaging/badge/b24054s02014s12114s2706403d32b6b84ee103306ec256bb91bdacc.gif",
            altText: "Emblema da Força Aérea Brasileira",
          },
          {
            url: "https://www.habbo.com.br/",
            displayText: "www.habbo.com.br",
          },
        ],
        organization: "Força Aérea Brasileira",
        year: year,
        developer: [
          {
            name: "::Yashida",
            url: "https://www.habbo.com.br/profile/::Yashida",
          },
          {
            name: "Matthaios",
            url: "https://github.com/matthaiosalves",
          },
        ],
        rank: "Marechal-do-Ar Alex-Pearce",
      },
    };
  },
};
</script>
