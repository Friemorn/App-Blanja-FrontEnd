<template>
    <div class="card bg-transparent shadow-sm">
        <a class="nav-link" href="#">
            <div class="image-container" @click="$emit('select-product')">
                <img :src="data.image" class="card-img-top" alt="blackforest">
            </div>
            <div class="card-body">
                <div class="title-product">{{data.title}}</div>
                <div class="price-product">{{data.price}}</div>
                <div class="branch-product">{{data.nameBrand}}</div>
            </div>
        </a>
        <div class="ratting-product">
            <Rating :grade="5" :maxStars="5" :hasCounter="true"/>
        </div>
    </div>
</template>

<script>
import Rating from '../_base/Rating'
export default {
  name: 'CardProduct',
  props: {
    data: {
      type: Object
    }
  },
  components: {
    Rating
  },
  beforeCreate: function () {
    document.body.className = 'home'
  }
}
</script>

<style scoped>
.image-container{
    width: 100%;
    height: 160px;
}
.image-container img {
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.card {
    border: none;
    flex-basis: 19%;
    margin: 10px 10px 10px 0;
}

.card-body{
    color: black;
    padding: 5px;
}

.price-product{
    font-size: 16px;
    letter-spacing: 2px;
    color: #DB3022;
}

.title-product {
    font-size: 16px;
    font-weight: 600;
}
.branch-product{
    font-size: 12px;
    color: #9B9B9B;
}
.nav-link{
    padding: 0;
}
.ratting-product{
    padding-left: 5px;
}
@media screen and (max-width: 933px) {
    .card {
        flex-basis: 45%;
    }
    .image-container{
    width: 100%;
    height: 140px;
}
  }

@media screen and (max-width: 690px) {
    .card {
        flex-basis: 100%;
    }
    .image-container{
    width: 100%;
    height: 190px;
    }
  }

@media screen and (max-width: 480px) {
    .card {
        flex-basis: 100%;
    }
    .image-container{
    width: 100%;
    height: 130px;
    }
  }
</style>
