<template>
    <div class="address-template">
      <div class="card">
        <div class="card-header">
          <span class="h4 d-flex">Choose Another Address</span>
          <span class="d-flex">Manage your shipping address</span>
        </div>
        <div class="card-body">
          <div class="address-data">
            <div class="row mx-5">
              <div class="col-lg-12 p-4" style="border:1px dashed #9B9B9B">
                <span class="add-address h4" data-toggle="modal" data-target="#newAddress">Add new adrress</span>
              </div>
            </div>
            <div class="row mx-5 mt-4">
              <div class="col-lg-12 p-3" style="border:1px solid #DB3022">
                <div class="card-text text-left d-flex flex-column" v-for="(address, index) in addresses" :key="index">
                  <span>
                    {{address.rumah}}
                    {{address.kecamatan}}
                    Kab. {{address.kabupaten}}, {{address.provinsi}}, {{address.postalCode}}
                    </span>
                    <a class="text-left change mt-3" data-toggle="modal" data-target="#address" @click="edit(address)">Change Address</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <modalAddress :data="addressData"/>
      <modalNewAddress/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import modalAddress from './modal-address'
import modalNewAddress from './modal-new-address'
export default {
  name: 'addressCard',
  components: {
    modalAddress,
    modalNewAddress
  },
  data () {
    return {
      addressData: {
        rumah: '',
        kecamatan: '',
        kabupaten: '',
        postalCode: '',
        provinsi: '',
        recipientsName: ''
      }
    }
  },
  methods: {
    addNewAddress () {

    },
    edit (address) {
      console.log(address)
      this.addressData.rumah = address.rumah
      this.addressData.kecamatan = address.kecamatan
      this.addressData.kabupaten = address.kabupaten
      this.addressData.postalCode = address.postalCode
      this.addressData.provinsi = address.provinsi
      this.addressData.recipientsName = address.recipientsName
    }
  },
  computed: {
    ...mapGetters({
      addresses: 'get_address'
    })
  }
}
</script>

<style scoped>
.address-template {
  background: #F5F5F5;
}
.change:hover {
  cursor: pointer;
}
.add-address {
  color: #9B9B9B;
}
.add-address:hover {
  cursor: pointer;
}
@media screen and (min-width: 1200px) {
  .card-text {
    width: 700px;
    margin: auto;
  }
}
@media screen and (max-width: 1359px) {
  .card-text {
    margin: auto;
  }
  .card-text span {
    text-align: center;
  }
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
  body {
    background-color: olive;
  }
}
</style>
