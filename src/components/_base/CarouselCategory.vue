<template>
<carousel class="carousel"
  :navigationEnabled="true"
  :navigation-next-label="navigationNextCategory()"
  :navigation-prev-label="navigationPrevCategory()"
  :perPageCustom="[[768, 4], [1024, 4]]"
  >
  <slide class="slide">
    <img src="../../assets/hiclipart 15.png" alt="">
    <label for="slide">Black Edition</label>
  </slide>
  <slide class="slide">
    <img src="../../assets/hiclipart 21.png" alt="">
    <label for="slide">Black Edition</label>
  </slide>
  <slide class="slide">
    <img src="../../assets/hiclipart 22.png" alt="">
    <label for="slide">Black Edition</label>
  </slide>
  <slide class="slide">
    <img src="../../assets/hiclipart 26.png" alt="">
    <label for="slide">Black Edition</label>
  </slide>
  <slide class="slide">
    <img src="../../assets/hiclipart 26.png" alt="">
    <label for="slide">Black Edition</label>
  </slide>
</carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'CarouselCategory',
  components: {
    Carousel,
    Slide
  },
  methods: {
    navigationNextCategory: function () { return '<button class="btn-right category"><i class="fas fa-chevron-right"></i></button>' },
    navigationPrevCategory: function () { return '<button class="btn-left category"><i class="fas fa-chevron-left"></i></button>' }
  }
}
</script>

<style scoped>
.VueCarousel-slide {
  min-width: 70px;
  position: relative;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  height: 70px;
  border-radius: 10px;
  margin: 10px;
}
.VueCarousel-slide img{
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.VueCarousel-pagination[data-v-438fd353]{
  text-align: left;
}
label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Metropolis-Medium';
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 2px;
}
.VueCarousel-navigation-prev[data-v-453ad8cd]{
    color: lawngreen;
}
.btn-left.category{
  position: absolute;
  width: 35px;
  height: 35px;
  left: 60px;
  top: -50px;
  border-radius: 50px;
  border: none;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(181, 181, 181, 0.25);
}

.btn-right.category{
  position: absolute;
  width: 35px;
  height: 35px;
  right: 60px;
  top: -50px;
  border-radius: 50px;
  border: none;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(181, 181, 181, 0.25);
}
</style>
