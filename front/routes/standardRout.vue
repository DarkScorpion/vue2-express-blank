<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-sm-12">
        <div align="center">
          <simpleComponent/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import simpleComponent from '../components/simpleComponent.vue'

  export default {
    components: {
      simpleComponent
    },

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
