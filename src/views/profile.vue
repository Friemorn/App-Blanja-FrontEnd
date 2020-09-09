<template>
    <div>
        <h1 class="bg-info">Profile page</h1>
        <profileContainer/>
    </div>
</template>

<script>
import profileContainer from '../components/profile/profile-container'
export default {
  name: 'Profile',
  components: {
    profileContainer
  }
}
</script>

<style scoped>

</style>
