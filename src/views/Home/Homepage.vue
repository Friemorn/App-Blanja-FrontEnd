<template>
<div class="container-fluid">
  <div class="row no-gutters">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
      <CarouselTrend/>
    </div>
  </div>
  <div class="row no-gutters">
    Category
  </div>
  <div class="row no-gutters new mx-5 my-4">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-left">
      <div class="row no-gutters header">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-left">
        <h4>New</h4>
        <p>You’ve never seen it before!</p>
        </div>
      </div>
      <div class="row no-gutters body">
        <div class="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12 text-left d-flex flex-wrap">
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        </div>
      </div>
    </div>
  </div>
  <div class="row no-gutters popular mx-5 my-4">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-left">
      <div class="row no-gutters header my-3">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-left">
          <h4>Popular</h4>
          <p>Find clothes that are trending recently</p>
        </div>
      </div>
      <div class="row no-gutters body">
        <div class="col-xl-12 col-lg-12 col-md-2 col-sm-6 col-12 text-left d-flex flex-wrap">
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import CardProduct from '../../components/_base/CardProduct'
import CarouselTrend from '../../components/_base/CarouselTrend'
export default {
  name: 'Homepage',
  components: {
    CardProduct,
    CarouselTrend
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
</style>
