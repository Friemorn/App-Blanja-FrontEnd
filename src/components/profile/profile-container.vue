<template>
    <div>
        <div class="wrapper d-flex bg-warning">
            <sidebar/>
            <cardProfile class="flex-grow-1" v-for="(profile, index) in profiles" :key="index" :data="profile"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import sidebar from './sidebar'
import cardProfile from './card-profile'
export default {
  name: 'profileContainer',
  components: {
    sidebar,
    cardProfile
  },
  computed: {
    ...mapGetters({
      profiles: 'get_profiles'
    })
  }
}
</script>

<style scoped>

</style>
