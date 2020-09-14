<template>
<div>
  <NavbarBefore/>
  <div>
  <div class="row no-gutters">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
      <CarouselTrend/>
    </div>
  </div>
  <div class="row no-gutters category">
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 my-3">
      <div class="row no-gutters">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <h4 class="text-left mb-2">Category</h4>
          <p class="text-left">What are you currently looking for</p>
        </div>
      </div>
    </div>
    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 my-3">
      <CarouselCategory/>
    </div>
  </div>
  <div class="row no-gutters new my-3 body">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-left">
      <div class="row no-gutters header">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-left">
        <h4>New</h4>
        <p>You’ve never seen it before!</p>
        </div>
      </div>
      <div class="row no-gutters">
          <CardProduct
          v-for="(item, index) in allProducts" :key="index"
          :data="item"
          @select-product="addBag(item)"/>
      </div>
    </div>
  </div>
  <div class="row no-gutters my-3  popular body">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-left">
      <div class="row no-gutters header my-3">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-left">
          <h4>Popular</h4>
          <p>Find clothes that are trending recently</p>
        </div>
      </div>
      <div class="row no-gutters">
          <CardProduct
          v-for="(item, index) in allProducts" :key="index"
          :data="item"
          @select-product="addBag(item)"/>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import NavbarBefore from '../../components/_base/NavbarBefore'
import CardProduct from '../../components/_base/CardProduct'
import CarouselTrend from '../../components/_base/CarouselTrend'
import CarouselCategory from '../../components/_base/CarouselCategory'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Homepage',
  components: {
    NavbarBefore,
    CardProduct,
    CarouselTrend,
    CarouselCategory
  },
  methods: {
    ...mapActions(['getAllProducts']),
    ...mapMutations(['addBag'])
  },
  computed: {
    ...mapGetters(['allProducts'])
  },
  mounted () {
    this.getAllProducts()
  }
}
</script>

<style scoped>
h4{
  font-family: 'Metropolis-Bold';
  letter-spacing: 1px;
  margin: 0;
}
p{
  letter-spacing: 1px;
  margin: 0;
}
.category{
  padding-left: 100px;
  padding-right: 100px;
  background-color: #F0F1F9;
}
.body {
  padding-left: 100px;
  padding-right: 100px;
}
</style>
