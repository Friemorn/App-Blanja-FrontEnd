<template>
    <div class="row no-gutters shadow mt-3 px-3 py-1 d-flex align-items-center mr-3 p-2 rounded">
        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
            <div class="row no-gutters d-flex align-items-center">
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                    <div class="container-img">
                        <img :src="data.image" alt="dumy">
                    </div>
                </div>
                <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7">
                    <div class="row no-gutters mx-2">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 title-product">{{data.nameProduct}}</div>
                        </div>
                        <div class="row no-gutters mx-2">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 branch-product">{{data.nameBrand}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-right">
                    <div class="row no-gutters">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 price text-right">Rp. {{(data.price*data.qty).toLocaleString('de-DE')}}</div>
                    </div>
            </div>
    </div>
</template>

<script>
export default {
  name: 'CartCheckout',
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style scoped>
.title{
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1px;
}
.title-price{
    font-size: 16px;
    font-weight: 400;
    color: #9B9B9B;
    letter-spacing: 1px;
}
.price{
    font-weight: 700;
    letter-spacing: 1px;
}
.container-img{
    width: 70px;
    height: 70px;
}
.container-img img{
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.title-product{
    font-size: 18px;
    font-weight: 700;
}
.branch-product{
    font-size: 14px;
    font-weight: 400;
    color:  #D5D5D5;
}
</style>
