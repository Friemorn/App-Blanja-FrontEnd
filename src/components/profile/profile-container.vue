<template>
    <div>
        <div class="wrapper bg-warning">
            <div class="profile bg-info" style="border:1px solid black">
              <div class="profile-user d-flex mx-5 bg-danger">
                <div class="user-img">
                  <img class="rounded-circle ml-4" src="../../assets/d8p1wqo-3b4d78e8-db49-4a66-99c1-882a64c82be0.jpg" alt="">
                </div>
                <div class="prof-update d-flex flex-column mx-2" v-for="(profile, index) in profiles" :key="index">
                  <span>{{profile.name}}</span>
                  <span class="change" @click="edit(profile)">Ubah Profile</span>
                </div>
              </div>
              <div class="profile-data mx-5 mt-5">
                <div class="account d-flex mb-3 ml-4">
                  <div class="account-logo img-round mr-3">
                    <img src="../../assets/user-profile.png">
                  </div>
                  <span class="click" @click="toggle">My Account</span>
                </div>
                <div class="address d-flex mb-3 ml-4">
                  <div class="pinpoint img-round mr-3">
                    <img src="../../assets/pin.png">
                  </div>
                  <span class="click" @click="toggle">Shipping Address</span>
                </div>
                <div class="order d-flex ml-4">
                  <div class="clipboard img-round mr-3">
                    <img src="../../assets/clipboard.png">
                  </div>
                  <span class="click" @click="toggle">My Order</span>
                </div>
              </div>
            </div>
            <div class="card-profile" v-for="(profile, index) in profiles" :key="index">
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
      profiles: 'get_profiles',
      address: 'get_address'
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
.img-round {
  width: 32px;
  height: 32px;
  border: 1px solid black;
  border-radius: 50%;
}
.change {
  cursor: pointer;
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
@media screen and (min-width: 1300px) {
  .wrapper {
    display: flex;
  }
  .card-profile {
    flex-grow: 1;
    margin: 0 90px 0px 50px;
  }
}
@media screen and (max-width: 1300px) {
  .profile {
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
