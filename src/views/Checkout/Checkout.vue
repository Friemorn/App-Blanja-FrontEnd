<template>
<div>
    <NavbarAfter/>
    <div class="row no-gutters content">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-left">
        <h4 class="mx-2">Checkout</h4>
        <div class="row no-gutters">
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                <div class="row no-gutters shadow px-3 py-1 d-flex align-items-center mr-3 rounded">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="row no-gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 name">
                                Andreas Jane
                            </div>
                        </div>
                        <div class="row no-gutters mt-2">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 address">
                                Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181
                            </div>
                        </div>
                        <div class="row no-gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 button mt-4 mb-2">
                                <button type="button" class="btn btn-outline-dark" @click="toggleModalShiping">Choose another address</button>
                            </div>
                        </div>
                    </div>
                </div>
            <CartCheckout v-for="item in getBag" :key="item.id"
            :data="item"/>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                <div class="row no-gutters shadow px-3 py-3 rounded">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="row no-gutters">
                            <h5 class="title">Shooping summary</h5>
                        </div>
                        <div class="row no-gutters">
                            <div class="title-price col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 mt-2">Total Price</div>
                            <div class="price col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 mt-2">Rp. 10.000</div>
                        </div>
                        <div class="row no-gutters">
                            <div class="title-price col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 mt-2">Delivery</div>
                            <div class="price col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 mt-2">Rp. 10.000</div>
                        </div>
                        <div class="row no-gutters mb-2">
                            <hr>
                            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 title">Shooping summary</div>
                            <div class="price-sum col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5">Rp. 10.000</div>
                        </div>
                        <div class="row no-gutters">
                            <button type="button" class="btn btn-danger" @click="toggleModalCheckout">Select payment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ModalCheckout v-show="modalCheckoutActive" @close-modal="toggleModalCheckout"/>
    <ModalShiping v-show="modalShipingActive" @close-modal="toggleModalShiping"/>
</div>
</div>

</template>

<script>
import NavbarAfter from '../../components/_base/NavbarAfter'
import ModalCheckout from '../../components/_base/ModalCheckout'
import ModalShiping from '../../components/_base/ModalShiping'
import CartCheckout from '../../components/_base/CartCheckout'
import { mapGetters } from 'vuex'
export default {
  name: 'Checkout',
  components: {
    NavbarAfter,
    ModalCheckout,
    ModalShiping,
    CartCheckout
  },
  data: () => ({
    modalCheckoutActive: false,
    modalShipingActive: false
  }),
  methods: {
    toggleModalCheckout () {
      this.modalCheckoutActive = !this.modalCheckoutActive
    },
    toggleModalShiping () {
      this.modalShipingActive = !this.modalShipingActive
    }
  },
  computed: {
    ...mapGetters(['getBag'])
  }
}
</script>

<style scoped>
.content{
    margin: 0 130px;
}
h4{
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 1px;
}
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
.btn-danger{
    width: 100%;
    border-radius: 25px;
    letter-spacing: 1px;
}
.btn-outline-danger{
    border: none;
}
.btn-outline-dark{
    width: 40%;
    border-radius: 25px;
    letter-spacing: 1px;
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 25px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.select{
    font-size: 16px;
    font-weight: 500;
}
.select span {
    color: #D5D5D5;
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
/* Hide the browser's default checkbox */
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.checkmark {
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    height: 21px;
    width: 21px;
    background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #fc0000;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.minus{
    width: 36px;
    height: 36px;
    border-radius: 50px;
    border: none;
    background: #D5D5D5;
}
.plus{
    width: 36px;
    height: 36px;
    border-radius: 50px;
    border: none;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(142, 142, 142, 0.25);
}
hr{
    width: 100%;
    height: 2px;
    border-color:  #D5D5D5;
}
.name{
    font-weight: 600;
    letter-spacing: 1px;
}
.address{
    letter-spacing: 1px;
    font-size: 14px;
}
.price-sum {
    color: #DB3022;
    font-weight: 600;
}
</style>
