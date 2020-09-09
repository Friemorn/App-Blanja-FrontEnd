<template>
  <div>
    <form>
        <div class="role">
          <div class="customer inactive" @click="$emit('switch-customer')">
            Customer
          </div>
          <div class="seller active">
            Seller
          </div>
        </div>
        <div class="form-group">
          <input type="email" class="form-control" id="InputEmailSeller" aria-describedby="emailHelp" placeholder="Email">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="InputPasswordSeller" placeholder="Password">
        </div>
        <div class="forgot-password">
            Forgot Password?
        </div>
        <button type="submit" class="btn">PRIMARY</button>
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginSeller',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin (e) {
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
    ...mapActions(['loginSeller'])
  }
}
</script>

<style scoped>
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
