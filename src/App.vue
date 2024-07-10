<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
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
            <router-link to="/" class="nav-link active" aria-current="page"
              >Início</router-link
            >
          </li>
          <!-- <li class="nav-item dropdown">
            <router-link to="/sobre-nos" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sobre-nós
            </router-link>
            <ul class="dropdown-menu">
              <li><router-link to="/historia" class="dropdown-item">História</router-link></li>
              <li><router-link to="/hierarquia-militar" class="dropdown-item">Hierarquia Militar</router-link></li>
            </ul>
          </li> -->
          <li class="nav-item dropdown">
            <router-link
              to="/instituicao"
              class="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Instituição
            </router-link>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/fardamentos" class="dropdown-item"
                  >Fardamentos</router-link
                >
              </li>
              <!-- <li><a href="https://www.fabhabbo.com/fardamentos" class="dropdown-item">Fardamentos</a></li> -->
              <!-- <li><a href="https://www.fabhabbo.com/instituicao/academias" class="dropdown-item">Academias</a></li> -->
            </ul>
          </li>
          <!-- <li class="nav-item dropdown">
            <router-link to="/companhias" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Companhias
            </router-link>
            <ul class="dropdown-menu">
              <li><router-link to="/1-companhia" class="dropdown-item">1° Companhia</router-link></li>
              <li><router-link to="/2-companhia" class="dropdown-item">2° Companhia</router-link></li>
              <li><router-link to="/3-companhia" class="dropdown-item">3° Companhia</router-link></li>
            </ul>
          </li> -->
          <!-- <li class="nav-item dropdown">
            <router-link to="/grupos-externos" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Grupos externos
            </router-link>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item"><img src="https://www.habbo.com.br/habbo-imaging/badge/b19114s36054s12114s41114t44014088f6424db55912a2d9c160141bd114b.gif" alt="" style="margin-right: 5px;width: 33px;"> Auxiliares</a></li>
              <li><a href="#" class="dropdown-item"><img src="https://www.habbo.com.br/habbo-imaging/badge/b19114s36054s12114s41114s17014434dbced752aad3a67d874e816a588ac.gif" alt="" style="margin-right: 5px;width: 33px;"> Coordenadores</a></li>
              <li><a href="#" class="dropdown-item"><img src="https://www.habbo.com.br/habbo-imaging/badge/b19114s36054s12114s41114s5701454f45cd2f53c15d6cb46f7676f1a2671.gif" alt="" style="margin-right: 5px;width: 33px;"> Palestrantes</a></li>
            </ul>
          </li> -->
          <li class="nav-item dropdown">
            <router-link
              to="/apostilas"
              class="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Apostilas
            </router-link>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/apostilas/peles-e-cabelos" class="dropdown-item"
                  >Peles e Cabelos</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />

  <Footer />
</template>
