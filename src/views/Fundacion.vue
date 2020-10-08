<template>
  <div class="fundacion container">
    <div class="col s12 m3">
      <Menu></Menu>
    </div>

    <main>
      <div class="section no-pad-bot" id="index-banner">
        <div class="container-fluid">
          <div class="row center">
            <div class="col s12 m10 offset-m1">
              <h1 class="header">Mascotas</h1>
            </div>
            <div class="col s12 m10 offset-m1">
              <h4 class="light">
                “No vamos a salvar el mundo cuando rescatamos a un animal, pero
                para ese animal su mundo somos nosotros”
              </h4>
            </div>
          </div>

          <br />
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import Menu from "./fundacion/MenuFundacion.vue";
export default {
  components: {
    Menu,
  },
};
</script>
<style>
header,
main,
footer {
  padding-left: 300px;
}

@media only screen and (max-width: 992px) {
  header,
  main,
  footer {
    padding-left: 0;
  }
  main {
    width: 100%;
  }
}
</style>
