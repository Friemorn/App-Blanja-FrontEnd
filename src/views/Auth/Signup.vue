<template>
  <div container>
    <div class="signup">
      <header>
        <img src="../../assets/shopping-bag 1.png" alt="">
        <span class="title-blanja">Blanja</span>
        <p>Please sign up with your account</p>
      </header>
      <div class="login-form">
        <form v-show="seller">
          <div class="role">
            <div class="customer inactive" @click="switchCustomer">
              Customer
            </div>
            <div class="seller active">
              Seller
            </div>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="InputNameSeller" placeholder="Name" v-model="name">
          </div>
          <div class="form-group">
            <input type="email" class="form-control" id="InputEmailSeller" aria-describedby="emailHelp" placeholder="Email" v-model="email">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="InputPhoneSeller" placeholder="Phone Number" v-model="phoneNumber">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="InputStoreSeller" placeholder="Store Name" v-model="storeName">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="InputPasswordSeller" placeholder="Password" v-model="password">
          </div>
          <button type="submit" class="btn" @click="addSeller">PRIMARY</button>
        </form>
        <form v-show="customer">
          <div class="role">
            <div class="customer active">
              Customer
            </div>
            <div class="seller inactive" @click="switchSeller">
              Seller
            </div>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="InputNameCustomer" placeholder="Name" v-model="name">
          </div>
          <div class="form-group">
            <input type="email" class="form-control" id="InputEmailCustomer" aria-describedby="emailHelp" placeholder="Email" v-model="email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="InputPasswordCustomer" placeholder="Password" v-model="password">
          </div>
          <button type="submit" class="btn" @click="addCustomer">PRIMARY</button>
        </form>
      </div>
      <div class="no-account">
        Already have a Blanja account?
          <router-link class="login" to="/login">
            <span class="login">Login</span>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Signup',
  data () {
    return {
      seller: true,
      customer: false,
      name: '',
      email: '',
      phoneNumber: '',
      storeName: '',
      password: '',
      roleId: ''
    }
  },
  methods: {
    addSeller () {
      axios.post('http://localhost:3000/api/v1/users/register', {
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
        storeName: this.storeName,
        password: this.password,
        roleId: this.roleId = 'seller'
      })
        .then((res) => {
          // this.$swal('Register Success', 'User Added Successfully', 'success')
          alert('User Added Successfully')
        })
        .catch((res) => {
          // this.$swal('Warning!', 'User Already Registered', 'warning')
          alert('User Already Registered')
        })
    },
    addCustomer () {
      axios.post('http://localhost:3000/api/v1/users/register', {
        name: this.name,
        email: this.email,
        password: this.password,
        roleId: this.roleId = 'customer'
      })
        .then((res) => {
          // this.$swal('Register Success', 'User Added Successfully', 'success')
          alert('User Added Successfully')
        })
        .catch((res) => {
          // this.$swal('Warning!', 'User Already Registered', 'warning')
          alert('User Already Registered')
        })
    },
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
.role {
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}
.customer {
  width: 100px;
  padding: 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.seller {
  width: 100px;
  padding: 10px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.active {
  color: white;
  background-color: #273AC7;
  border: 1px solid #273AC7;
}
.inactive {
  color: #9B9B9B;
  background-color: white;
  border: 1px solid #9B9B9B;
}
.btn {
  width: 100%;
  color: white;
  background-color: #273AC7;
  font-size: 14px;
  padding: 10px;
  border-radius: 25px;
}
.forgot-password {
  color: #273AC7;
  text-align: right;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
