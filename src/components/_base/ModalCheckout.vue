<template>
<transition name="modal">
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-headers">
                    <div class="row no-gutters d-flex align-items-center">
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
                          <button class="close-btn"  @click="$emit('close-modal')"><i class="fas fa-times"></i></button>
                        </div>
                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 title-modal text-left mx-1">
                          Payment
                        </div>
                    </div>
                  </div>
                  <div class="modal-body shadow my-2">
                    <div class="row no-gutters d-flex align-items-center">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 title-body text-left">Payment method</div>
                    </div>
                    <div class="row no-gutters d-flex align-items-center my-2">
                      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <div class="img-container">
                          <img src="../../assets/gopay.png" alt="gopay">
                        </div>
                      </div>
                      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 text-left">Gopay</div>
                      <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
                         <label class="container">
                            <input type="checkbox" checked="checked">
                            <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div class="row no-gutters d-flex align-items-center my-2">
                      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <div class="img-container">
                          <img src="../../assets/kantorpos.png" alt="kantorpos">
                        </div>
                      </div>
                      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 text-left">Kantor Pos</div>
                      <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
                         <label class="container">
                            <input type="checkbox" checked="checked">
                            <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                    <div class="row no-gutters d-flex align-items-center my-2">
                      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <div class="img-container">
                          <img src="../../assets/mastercard.png" alt="kantorpos">
                        </div>
                      </div>
                      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 text-left">Master Card</div>
                      <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
                         <label class="container">
                            <input type="checkbox" checked="checked">
                            <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="modal-body shopping summary shadow my-2">
                    <div class="row no-gutters d-flex align-items-center">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 title-body text-left">Shopping summary</div>
                    </div>
                    <div class="row no-gutters d-flex align-items-center my-2">
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-left name-transaction">Order</div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-right price">Rp. 0000</div>
                    </div>
                    <div class="row no-gutters d-flex align-items-center my-2">
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-left name-transaction">Delivery</div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-right price">Rp. 0000</div>
                    </div>
                  </div>
                  <div class="modal-body shopping summary shadow mt-2">
                    <div class="row no-gutters d-flex align-items-center">
                      <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 text-left">
                          <div class="row no-gutters d-flex align-items-center">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-left title-body">Shopping summary</div>
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-left pricing">Rp. 0000</div>
                          </div>
                      </div>
                      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 title-body text-left">
                        <button type="button" class="btn btn-danger">Buy</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
export default {
  name: 'ModalCheckout'
}
</script>

<style scoped>
.modal-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.5s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-dialog {
    font-family: 'Airbnb Cereal App Medium', sans-serif;
    letter-spacing: 1px;
    width: 1600px;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease-in-out;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.close-btn{
  border: none;
  background-color: transparent;
  font-size: 22px;
}
.img-container{
  width: 100px;
  height: 40px;
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
.btn-danger{
    width: 100%;
    border-radius: 25px;
    letter-spacing: 1px;
}
.title-body{
  font-weight: 600;
}
.pricing{
  color: #DB3022;
}
.title-modal{
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 1px;
}
</style>
