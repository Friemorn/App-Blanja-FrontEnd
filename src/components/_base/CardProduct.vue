<template>
    <div class="card bg-transparent">
        <a class="nav-link" href="#">
            <div class="image-container">
                <img src="../../assets/dummy.png" class="card-img-top" alt="blackforest">
            </div>
            <div class="card-body">
                <div class="title-product">Men's formal suit - Black & White</div>
                <div class="price-product">Rp. 90000</div>
                <div class="branch-product"> Zalora Cloth</div>
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
  components: {
    Rating
  }
}
</script>

<style scoped>
.image-container{
    width: 100%;
    height: 180px;
}
.image-container img {
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.card {
    border: none;
    flex-basis: 18%;
    margin: 15px 15px 15px 0;
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
    font-size: 20px;
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
