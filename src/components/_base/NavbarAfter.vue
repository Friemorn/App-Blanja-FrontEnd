<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <div class="logo">
          <div>
            <img id="logo-blanja" src="../../assets/shopping-bag 1.png" alt="">
          </div>
          <div id="blanja">Blanja</div>
        </div>
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
              <img src="../../assets/cart.png" alt="mybag">
            </router-link>
            <div class="notif">
              <img src="../../assets/notif.png" alt="notif">
            </div>
            <div class="mail">
              <img src="../../assets/mail.png" alt="mail">
            </div>
            <div class="user">
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavbarAfter'
}
</script>

<style scoped>
/* Desktop */
.navbar {
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
  color: #787983;
  font-size: 24px;
  font-weight: 550;
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
.cart, .mail, .notif, .user {
  height: 35px;
  width: 35px;
  margin: 0 10px;
}
.user {
  border: 2px solid #8E8E93;
  border-radius: 50%;
  background-image: url('./../../assets/user.png');
  background-repeat: no-repeat;
  background-size: cover
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
