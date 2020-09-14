<template>
    <div>
        <div class="wrapper">
            <div class="seller-profile">
              <div class="profile-seller d-flex mx-5 mt-5">
                <div class="user-img">
                  <img class="rounded-circle ml-4" src="../../assets/d8p1wqo-3b4d78e8-db49-4a66-99c1-882a64c82be0.jpg" alt="">
                </div>
                <div class="prof-update d-flex flex-column mx-2" v-for="(seller, index) in sellers" :key="index">
                  <span>{{seller.name}}</span>
                  <div class="edit">
                    <img src="../../assets/pen.png">
                    <span class="change mx-1" @click="edit(seller)"><a href="#sellerName">Ubah Profile</a></span>
                  </div>
                </div>
              </div>
              <div class="profile-data mx-5 mt-5">
                <div class="account d-flex mb-3 ml-4">
                  <div class="account-logo img-round mr-3">
                    <img src="../../assets/store.png">
                  </div>
                  <!-- <span class="click" @click="toggle">Store</span> -->
                  <div class="dropdown">
                    <nav class="navbar-toggler d-flex" type="button" data-toggle="collapse" data-target="#store">
                      <span>Store</span>
                    </nav>
                    <div class="collapse navbar-collapse" id="store">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link" href="#"><small @click="toggle">Profile</small> <span class="sr-only">(current)</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- End -->
                </div>
                <div class="address d-flex mb-3 ml-4">
                  <div class="pinpoint img-round mr-3">
                    <img src="../../assets/product.png">
                  </div>
                  <!-- <span class="click" @click="toggle">Product</span> -->
                  <div class="dropdown">
                    <nav class="navbar-toggler d-flex" type="button" data-toggle="collapse" data-target="#product">
                      <span>Product</span>
                    </nav>
                    <div class="collapse navbar-collapse" id="product">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link" href="#"><small @click="toggle">My Products</small></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link ml-3" href="#"><small @click="toggle">Selling products</small></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="order d-flex mb-3 ml-4">
                  <div class="clipboard img-round mr-3">
                    <img src="../../assets/cart.png">
                  </div>
                  <!-- <span class="click" @click="toggle">Order</span> -->
                  <div class="dropdown">
                    <nav class="navbar-toggler d-flex" type="button" data-toggle="collapse" data-target="#order">
                      <span>Order</span>
                    </nav>
                    <div class="collapse navbar-collapse" id="order">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link" href="#"><small @click="toggle">My Order</small></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link ml-3" href="#"><small @click="orderCancel">Order cancel</small></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-seller my-5" v-for="(seller, index) in sellers" :key="index">
              <storeCard v-if="showing==='Profile'" :data="seller"/>
              <productCard v-else-if="showing==='My Products'"/>
              <sellingProduct v-else-if="showing==='Selling products'"/>
              <orderCard v-else-if="showing==='My Order'"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import storeCard from './store-card'
import productCard from './product-card'
import sellingProduct from './selling-product'
import orderCard from './my-order-card'
export default {
  name: 'sellerContainer',
  components: {
    storeCard,
    productCard,
    sellingProduct,
    orderCard
  },
  data () {
    return {
      showing: 'Profile'
    }
  },
  methods: {
    toggle (e) {
      console.log(e.target.innerText)
      this.showing = e.target.innerText
    },
    orderCancel () {
      this.showing = 'My Order'
    },
    edit (seller) {
      console.log(seller)
      this.showing = 'Profile'
    }
  },
  computed: {
    ...mapGetters({
      sellers: 'get_seller',
      products: 'get_products'
    })
  }
}
</script>

<style scoped>
.wrapper {
  background: #F5F5F5;
}
.seller-profile {
  background: #fff;
}
/* Sidebar */
.user-img {
  width: 90px;
  height: 60px;
}
.user-img img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}
.img-round {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.change {
  cursor: pointer;
}
.change:hover {
  text-decoration-line: underline;
}
.click {
  cursor: pointer;
}

.account-logo {
  background: #456BF3;
}
.pinpoint {
  background: #F36F45;
}
.clipboard {
  background: #F3456F;
}
.nav-link {
  color: black;
}
@media screen and (min-width: 1300px) {
  .wrapper {
    display: flex;
  }
  .card-seller {
    flex-grow: 1;
    margin: 0 90px 0px 50px;
  }
}
@media screen and (max-width: 1300px) {
  .seller-profile {
    width: 100%;
  }
  .card-profile {
    width: 100%;
    margin: auto;
  }
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
  body {
    background-color: olive;
  }
}
</style>
