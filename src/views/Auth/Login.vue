<template>
  <div container>
    <div class="login">
      <header>
        <img src="../../assets/shopping-bag 1.png" alt="">
        <span class="title-blanja">Blanja</span>
        <p>Please login with your account</p>
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
            <input type="email" class="form-control" id="InputEmailSeller" aria-describedby="emailHelp" placeholder="Email" v-model="email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="InputPasswordSeller" placeholder="Password" v-model="password">
          </div>
          <div class="forgot-password">
              Forgot Password?
          </div>
          <button type="submit" class="btn" @click="handleLoginSeller">PRIMARY</button>
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
            <input type="email" class="form-control" id="InputEmailCustomer" aria-describedby="emailHelp" placeholder="Email" v-model="email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="InputPasswordCustomer" placeholder="Password" v-model="password">
          </div>
          <div class="forgot-password">
              Forgot Password?
          </div>
          <button type="submit" class="btn" @click="handleLoginCustomer">PRIMARY</button>
        </form>
      </div>
      <div class="no-account">
        Don't have a Blanja account? <span class="register">Register</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      seller: true,
      customer: false,
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['loginSeller', 'loginCustomer']),
    handleLoginSeller (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      this.loginSeller(data)
        .then(() => {
          const Toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', this.$swal.stopTimer)
              toast.addEventListener('mouseleave', this.$swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          this.$router.push('/home')
        })
    },
    handleLoginCustomer (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      this.loginCustomer(data)
        .then(() => {
          const Toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', this.$swal.stopTimer)
              toast.addEventListener('mouseleave', this.$swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          this.$router.push('/home')
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
.login {
  margin: 80px auto;
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
.register {
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
