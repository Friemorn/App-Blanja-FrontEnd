<template>
  <div>
    <form>
        <div class="role">
          <div class="customer active">
            Customer
          </div>
          <div class="seller inactive" @click="$emit('switch-seller')">
            Seller
          </div>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="InputNameSeller" placeholder="Name">
        </div>
        <div class="form-group">
          <input type="email" class="form-control" id="InputEmailSeller" aria-describedby="emailHelp" placeholder="Email">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="InputPasswordSeller" placeholder="Password">
        </div>
        <button type="submit" class="btn" @click="addCustomer">PRIMARY</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginCustomer',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    addCustomer () {
      axios.post('http://localhost:4000/api/v1/customer/signup', {
        name: this.name,
        email: this.email,
        password: this.password
      })
        .then((res) => {
          // this.$swal('Register Success', 'User Added Successfully', 'success')
          alert('User Added Successfully')
        })
        .catch((res) => {
          // this.$swal('Warning!', 'User Already Registered', 'warning')
          alert('User Already Registered')
        })
    }
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
