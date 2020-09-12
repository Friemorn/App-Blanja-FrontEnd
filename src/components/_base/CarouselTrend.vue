<template>
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
.VueCarousel-navigation-button .VueCarousel-navigation-next{
  color: aqua;
}
</style>
