<template>
    <div>
      <NavbarAfter/>
      <profileContainer/>
    </div>
</template>

<script>
import profileContainer from '../components/profile/profile-container'
import NavbarAfter from '../components/_base/NavbarAfter'
export default {
  name: 'Profile',
  components: {
    NavbarAfter,
    profileContainer
  }
}
</script>

<style scoped>

</style>
