<template>
<transition name="modal">
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-headers">
                        <div class="row no-gutters d-flex align-items-center mr-3">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-right title-modal">
                                <button class="close-btn"  @click="$emit('close-modal')"><i class="fas fa-times"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="row no-guttersd-flex justify-content-center">
                            <div class="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11 text-right title-modal">
                                <button type="button" class="btn btn-outline-secondary">Add new address</button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body address-list">
                        <div class="row no-gutters d-flex justify-content-center">
                            <div class="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11 text-left">
                                <AddressList/>
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
import AddressList from '../../components/_base/AddressList'
export default {
  name: 'ModalShiping',
  components: {
    AddressList
  }
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
.btn-outline-secondary{
    width: 100%;
    height: 90px;
    border-style: dashed;
}
.btn-outline-secondary:hover{
    background-color: rgba(0, 0, 0, 0.233);
    color: rgba(128, 128, 128, 0.527);
}
.address-list{
    height: 350px;
}
</style>
