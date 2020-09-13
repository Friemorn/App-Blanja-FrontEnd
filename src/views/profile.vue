<template>
    <div>
        <navbar/>
        <profileContainer/>
    </div>
</template>

<script>
import navbar from '../components/navbar'
import profileContainer from '../components/profile/profile-container'
export default {
  name: 'Profile',
  components: {
    navbar,
    profileContainer
  }
}
</script>

<style scoped>

</style>
