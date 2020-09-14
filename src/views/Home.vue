<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#filter">
      Filter
    </button>
    <filterModal/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import filterModal from '../components/filter'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    filterModal
  }
}
</script>
