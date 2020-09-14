<template>
<carousel class="carousel"
  :navigationEnabled="true"
  :navigation-next-label="navigationNext"
  :navigation-prev-label="navigationPrev"
  :perPageCustom="[[768, 2.5], [1024, 3.5]]"
  >
  <slide class="slide">
    <img src="../../assets/ian-dooley-10ca-K3e6Ko-unsplash 1.png" alt="">
    <label for="slide">Black Edition</label>
  </slide>
  <slide class="slide">
    <img src="../../assets/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt="">
    <label for="slide">Trends 2020</label>
  </slide>
  <slide class="slide">
    <img src="../../assets/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt="">
    <label for="slide">Favourite</label>
  </slide>
  <slide class="slide">
    <img src="../../assets/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt="">
    <label for="slide">Trending's Now</label>
  </slide>
  <slide class="slide">
    <img src="../../assets/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt="">
    <label for="slide">Trending's Now</label>
  </slide>
  <slide class="slide">
    <img src="../../assets/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt="">
    <label for="slide">Trending's Now</label>
  </slide>
  <slide class="slide">
    <img src="../../assets/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt="">
    <label for="slide">Trending's Now</label>
  </slide>
</carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'CarouselTrend',
  components: {
    Carousel,
    Slide
  },
  computed: {
    navigationNext: function () { return '<button class="btn-right"><i class="fas fa-chevron-right"></i></button>' },
    navigationPrev: function () { return '<button class="btn-left"><i class="fas fa-chevron-left"></i></button>' }
  }
}
</script>

<style>
.carousel {
  margin: auto;
  width: 80%;
  height: 100%;
}
.VueCarousel-slide {
  min-width: 400px;
  position: relative;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 150px;
  border-radius: 10px;
  margin: 10px;
}
.label {
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
.btn-left{
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
.btn-right{
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
