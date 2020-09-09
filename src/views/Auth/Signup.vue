<template>
  <div container>
    <div class="signup">
      <header>
        <img src="../../assets/shopping-bag 1.png" alt="">
        <span class="title-blanja">Blanja</span>
        <p>Please sign up with your account</p>
      </header>
      <div class="login-form">
        <SignupSeller v-show="seller" @switch-customer = "switchCustomer"/>
        <SignupCustomer v-show="customer" @switch-seller = "switchSeller"/>
      </div>
      <div class="no-account">
        Already have a Blanja account? <span class="login">Login</span>
      </div>
    </div>
  </div>
</template>

<script>
import SignupSeller from '../../components/_base/SignupSeller'
import SignupCustomer from '../../components/_base/SignupCustomer'

export default {
  name: 'Login',
  components: {
    SignupSeller,
    SignupCustomer
  },
  data () {
    return {
      seller: true,
      customer: false
    }
  },
  methods: {
    switchSeller () {
      this.seller = true
      this.customer = false
    },
    switchCustomer () {
      this.seller = false
      this.customer = true
    }
  }
}
</script>

<style scoped>
.signup {
  margin: 40px auto;
  width: 400px;
}
header {
  padding: 20px;
  text-align: center;
}
p {
  margin-top: 20px;
  font-weight: 600;
  font-size: 18px;
}
.title-blanja {
  font-size: 30px;
  color: #273AC7;
}
.login-form {
  margin-top: 20px;
}
.no-account {
  margin-top: 30px;
  text-align: center;
  font-size: 14px;
}
.login {
  color: #273AC7;
}
</style>
