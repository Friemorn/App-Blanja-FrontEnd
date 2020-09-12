<template>
<div>
    <div class="profile bg-info ml-5">
      <div class="profile-user d-flex ml-5 bg-danger">
        <div class="user-img">
          <img class="rounded-circle ml-4" src="../../assets/d8p1wqo-3b4d78e8-db49-4a66-99c1-882a64c82be0.jpg" alt="">
        </div>
        <div class="prof-update d-flex flex-column mx-2" v-for="(profile, index) in profiles" :key="index">
          <!-- <span>Geralt of Rivia</span> -->
          <span>{{profile.name}}</span>
          <span class="change" @click="edit(profile)">Ubah Profile</span>
        </div>
      </div>
      <div class="profile-data ml-5">
        <div class="account d-flex ml-4">
          <div class="account-logo">
            <img src="../../assets/user-profile.png" alt="">
          </div>
          <span>My Account</span>
        </div>
        <div class="address d-flex ml-4">
          <div class="pinpoint">
            <img src="../../assets/pin.png" alt="">
          </div>
          <span>Shipping Address</span>
        </div>
        <div class="order d-flex ml-4">
          <div class="clipboard">
            <img src="../../assets/clipboard.png" alt="">
          </div>
          <span>My Order</span>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'sidebar',
  components: {
  },
  data () {
    return {
      userData: {
        name: '',
        email: '',
        phoneNumber: '',
        gender: ''
      }
    }
  },
  methods: {
    edit (profile) {
      console.log(profile)
      this.userData.name = profile.name
      this.userData.email = profile.email
      this.userData.phoneNumber = profile.phoneNumber
      this.userData.gender = profile.gender
    },
    updateProfile () {

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

</style>
