<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="landinghome" to="/homepage">
          <div class="logo">
            <div>
              <img id="logo-blanja" src="../../assets/shopping-bag 1.png" alt="">
            </div>
            <div id="blanja">Blanja</div>
          </div>
        </router-link>
        <div class="search">
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          </form>
          <div>
            <img id="icon-search" src="../../assets/search.png" alt="">
          </div>
          <div class="filter">
            <img id="icon-filter" src="../../assets/filter.png" alt="">
          </div>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <router-link class="cart" to="/mybag">
              <span class="badge badge-secondary" v-if="getBag.length">{{totalQty}}</span>
              <img src="../../assets/cart.png" alt="mybag">
            </router-link>
            <div class="notif" @click="NotifOn">
              <img src="../../assets/notif.png" alt="notif">
              <div class="notification" v-show="showNotif">
                <img id="notif" src="../../assets/no notif.png" alt="">
              </div>
            </div>
            <div class="mail">
              <img src="../../assets/mail.png" alt="mail">
            </div>
            <div class="logout" @click="handleLogout">
              <img src="../../assets/logout.png" alt="logout">
            </div>
            <router-link class="profile" to="/profile">
              <div class="user"></div>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import popper from '../_base/Popper'
export default {
  name: 'NavbarAfter',
  components: {
    // popper
  },
  data () {
    return {
      showNotif: false
    }
  },
  methods: {
    ...mapActions(['logout']),
    handleLogout () {
      this.$swal.fire({
        title: 'Are you sure want to logout?',
        text: 'You will be return to the landing page',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Logout'
      }).then((result) => {
        if (result.value) {
          this.logout()
          this.$router.go(0)
        }
      })
    },
    NotifOn () {
      if (!this.showNotif) {
        this.showNotif = true
      } else {
        this.showNotif = false
      }
    }
  },
  computed: {
    ...mapGetters(['getBag']),
    totalQty () {
      return this.getBag.reduce((a, b) => a + b.qty, 0)
    }
  }
}
</script>

<style scoped>
/* Desktop */
.navbar {
  margin-bottom: 40px;
  box-shadow: 0px 6px 40px rgba(173, 173, 173, 0.25);
}
.logo {
  height: 55px;
  width: 115px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#blanja {
  color: #273AC7;
  font-size: 24px;
  font-weight: 600;
  padding-top: 10px;
}
.search {
  display: flex;
  flex-direction: row;
}
.form-control {
  width: 400px;
  margin-left: 50px;
  border-radius: 25px;
  border: 1px solid #8E8E93
}
#icon-search {
  height: 23px;
  width: 23px;
  margin-top: 7px;
  margin-left: -45px;
}
.filter {
  height: 35px;
  width: 35px;
  padding: 1px;
  border-radius: 12px;
  border: 1px solid #8E8E93
}
#icon-filter {
  margin: 5px 5px 0;
}
.cart, .mail, .notif, .logout, .user {
  height: 35px;
  width: 35px;
  margin: 0 10px;
}
.cart{
  position: relative;
}
.badge-secondary{
  position: absolute;
  border-radius: 50%;
  right: 0;
  top: 0;
  background-color: #273ac7;
}
.user {
  border: 2px solid #8E8E93;
  border-radius: 50%;
  background-image: url('../../assets/user.png');
  background-repeat: no-repeat;
  background-size: cover
}
.notification {
  height: 300px;
  width: 250px;
  margin: 30px 0 0 -100px;
  z-index: 999;
  background-color: white;
}
#notif{
  margin: 20px;
}

/* Tablet */
@media only screen and (max-width: 768px) {
  .form-control {
    width: 200px;
    margin-left: 20px;
  }
}
/* Smartphone */
@media only screen and (max-width: 600px) {
  .form-control {
    width: 200px;
    margin-left: 20px;
  }
}
</style>
