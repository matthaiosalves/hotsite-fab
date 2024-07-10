<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid justify-content-center container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
          <li class="nav-item">
            <router-link
              to="/"
              :class="['nav-link', { active: isActive('/') }]"
              aria-current="page"
            >
              Início
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link
              to="/instituicao"
              :class="[
                'nav-link',
                'dropdown-toggle',
                { active: isActive(['/instituicao', '/fardamentos']) },
              ]"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Instituição
            </router-link>
            <ul class="dropdown-menu">
              <li>
                <router-link
                  to="/fardamentos"
                  :class="['dropdown-item', { active: isActive('/fardamentos') }]"
                >
                  Fardamentos
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <router-link
              to="/apostilas"
              :class="[
                'nav-link',
                'dropdown-toggle',
                { active: isActive(['/apostilas', '/apostilas/peles-e-cabelos']) },
              ]"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Apostilas
            </router-link>
            <ul class="dropdown-menu">
              <li>
                <router-link
                  to="/apostilas/peles-e-cabelos"
                  :class="[
                    'dropdown-item',
                    { active: isActive('/apostilas/peles-e-cabelos') },
                  ]"
                >
                  Peles e Cabelos
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    isActive(paths) {
      if (Array.isArray(paths)) {
        return paths.some((path) => this.$route.path.startsWith(path));
      }
      return this.$route.path === paths;
    },
  },
};
</script>
