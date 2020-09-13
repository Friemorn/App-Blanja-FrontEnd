<template>
    <div>
      <NavbarAfter/>
        <sellerContainer/>
    </div>
</template>

<script>
import sellerContainer from '../components/seller/seller-container'
import NavbarAfter from '../components/_base/NavbarAfter'
export default {
  components: {
    NavbarAfter,
    sellerContainer
  }
}
</script>

<style scoped>

</style>
