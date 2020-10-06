<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/admin/">Admin</router-link> |
    <router-link to="/fundacion/">Fundacion</router-link> |
    <router-link to="/adoptante/">Adoptante</router-link> |
    <a  v-if="isLogin" v-on:click="logOut" >logOut</a>
    <router-link to="/login/" v-else>Login</router-link>
    
  </div>
  <router-view/>
</template>

<script>
export default {

  data: () => ({
    isLogin:false,
    user:null
  }),
  created() {
    if (localStorage.isLogin=='true') {
      this.isLogin=true
    }
  },
  watch: {
    isLogin(newLogin) {
      localStorage.isLogin = newLogin;
    }
  },
  methods: {
    logOut() {
        this.isLogin=false
        localStorage.setItem('isLogin', 'true'),
        //localStorage.setItem('token', this.token),
        localStorage.removeItem('token')
        this.$router.push('/')
      
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
