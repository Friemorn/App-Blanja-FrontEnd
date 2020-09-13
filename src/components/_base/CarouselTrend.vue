<template>
<carousel class="carousel"
  :navigationEnabled="true"
  :navigation-next-label="navigationNext"
  :navigation-prev-label="navigationPrev"
  :per-page="4"
  >
  <slide class="slide">
    Slide 1 Content
  </slide>
  <slide class="slide">
    Slide 2 Content
  </slide>
  <slide class="slide">
    Slide 3 Content
  </slide>
  <slide class="slide">
    Slide 4 Content
<carousel :data="data.navigationEnabled"
>
  <slide>
    Slide 1 Content
  </slide>
  <slide>
    Slide 2 Content
  </slide>
  <slide>
    Slide 2 Content
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
  },
  data () {
    return {
      data:
        [{
          navigationEnabled: true,
          buttonNext: '<button class="Next"><i class="fas fa-chevron-right"></i></button>'
        },
        {
          navigationEnabled: true,
          buttonPrev: '<button class="Next"><i class="fas fa-chevron-left"></i></button>'
        }]
    }
  }
}
</script>

<style>
.carousel {
  margin: auto;
  background-color: black;
  width: 80%;
  height: 100%;
}
.VueCarousel-slide {
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
.VueCarousel-dot-container{
  margin: 0;
}
.VueCarousel-navigation-button .VueCarousel-navigation-next{
  color: aqua;
}
</style>
