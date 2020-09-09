<template>
    <div>
        <div class="wrapper d-flex bg-warning">
            <div class="profile bg-info ml-5">
              <div class="profile-user d-flex ml-5 bg-danger">
                <div class="user-img">
                  <img class="rounded-circle ml-4" src="../../assets/d8p1wqo-3b4d78e8-db49-4a66-99c1-882a64c82be0.jpg" alt="">
                </div>
                <div class="prof-update d-flex flex-column mx-2" v-for="(profile, index) in profiles" :key="index">
                  <span>{{profile.name}}</span>
                  <span class="change" @click="edit(profile)">Ubah Profile</span>
                </div>
              </div>
              <div class="profile-data ml-5 mt-5">
                <div class="account d-flex ml-4">
                  <div class="account-logo">
                    <img src="../../assets/user-profile.png">
                  </div>
                  <span class="click" @click="toggle">My Account</span>
                </div>
                <div class="address d-flex ml-4">
                  <div class="pinpoint">
                    <img src="../../assets/pin.png">
                  </div>
                  <span class="click" @click="toggle">Shipping Address</span>
                </div>
                <div class="order d-flex ml-4">
                  <div class="clipboard">
                    <img src="../../assets/clipboard.png">
                  </div>
                  <span class="click" @click="toggle">My Order</span>
                </div>
              </div>
            </div>
            <div class="card-profile flex-grow-1" v-for="(profile, index) in profiles" :key="index">
              <cardProfile v-if="showing==='My Account'" :data="profile"/>
              <addressCard v-else-if="showing==='Shipping Address'" />
              <orderCard v-else-if="showing==='My Order'"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import sidebar from './sidebar'
import cardProfile from './card-profile'
import addressCard from './address-card'
import orderCard from './orders-card'
export default {
  name: 'profileContainer',
  components: {
    // sidebar,
    cardProfile,
    addressCard,
    orderCard
  },
  data () {
    return {
      showing: 'My Account'
    }
  },
  methods: {
    toggle (e) {
      console.log(e.target.innerText)
      this.showing = e.target.innerText
    },
    edit (profile) {
      console.log(profile)
    }
  },
  computed: {
    ...mapGetters({
      profiles: 'get_profiles'
    })
  }
}
</script>

<style scoped>
/* Sidebar */
.user-img {
  border: 1px solid black;
  width: 90px;
  height: 60px;
}
.user-img img {
  border: 1px solid green;
  width: 60px;
  height: 60px;
  object-fit: cover;
}
.change {
  cursor: pointer;
  text-decoration-line: underline;
}
.click {
  cursor: pointer;
}
</style>
