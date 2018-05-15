<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Vue2 Express</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto"></ul>
          <div class="mt-2 mt-md-0">
            <ul class="navbar-nav mr-auto">
              <li><router-link class="nav-link" :to="{ path: '/' }">Main</router-link></li>
              <li><router-link class="nav-link" :to="{ path: '/standardRoute' }">Standard</router-link></li>
              <li><router-link class="nav-link" :to="{ path: '/chankRoute' }">Chank</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div> <br>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',

    mounted() {
    },

    data() {
      return {
      }
    },

    methods: {
    }

  }
</script>

<style lang="css">
</style>
