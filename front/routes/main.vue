<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-sm-12">
        <div align="center">
          <router-link class="nav-link" :to="{ path: '/standardRoute' }">Standard</router-link>
          <router-link class="nav-link" :to="{ path: '/chankRoute' }">Chank</router-link> 
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
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

<style lang="stylus" scoped>
</style>
