<template>
  <div container>
    <div class="login">
      <header>
        <img src="../../assets/shopping-bag 1.png" alt="">
        <span class="title-blanja">Blanja</span>
        <p>Reset password</p>
      </header>
      <div class="reset-password-form">
        <div class="form-group">
          <input type="email" class="form-control" id="InputEmailCustomer" aria-describedby="emailHelp" placeholder="Email">
        </div>
        <div class="forgot-password">
            Forgot Password?
        </div>
        <button type="submit" class="btn" @click="handleLogin">PRIMARY</button>
      </div>
      <div class="no-account">
        Don't have a Blanja account? <span class="register">Register</span>
      </div>
    </div>
  </div>
</template>

<script>
// import LoginSeller from '../../components/_base/LoginSeller'
// import LoginCustomer from '../../components/_base/LoginCustomer'

export default {
  name: 'Login',
  components: {
    // LoginSeller,
    // LoginCustomer
  }
}
</script>

<style scoped>
.reset-password-form {
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
  font-size: 14px;
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
</style>
