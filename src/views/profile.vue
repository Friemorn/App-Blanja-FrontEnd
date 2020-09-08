<template>
    <div>
        <h1 class="bg-info">Profile page</h1>
        <cardProfile/>
    </div>
</template>

<script>
import cardProfile from '../components/card-profile'
export default {
  name: 'Profile',
  components: {
    cardProfile
  }
}
</script>

<style scoped>

</style>
