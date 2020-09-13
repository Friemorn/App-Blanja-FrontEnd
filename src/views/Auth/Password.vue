<template>
  <div container>
    <div class="reset-password" v-show="resetPass">
      <header>
        <img src="../../assets/shopping-bag 1.png" alt="">
        <span class="title-blanja">Blanja</span>
        <p>Reset password</p>
      </header>
      <div class="password-form">
        <div class="form-group">
          <input type="email" class="form-control" id="InputEmailReset" aria-describedby="emailHelp" placeholder="Email">
        </div>
        <div class="forgot-password">
            Forgot Password?
        </div>
        <button type="submit" class="btn" @click="reset">PRIMARY</button>
      </div>
      <div class="no-account">
        Don't have a Blanja account? <span class="register">Register</span>
      </div>
    </div>
    <div class="confirm-password" v-show="confPass">
      <header>
        <img src="../../assets/shopping-bag 1.png" alt="">
        <span class="title-blanja">Blanja</span>
        <p>Reset password</p>
        <div class="new">You need to change your password to active your account</div>
      </header>
      <div class="password-form">
        <div class="form-group">
          <input type="password" class="form-control" id="InputPasswordOld" placeholder="Password">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="InputPasswordNew" placeholder="Confirmation New Password">
        </div>
        <div class="forgot-password">
            Forgot Password?
        </div>
        <button type="submit" class="btn" @click="confirm">PRIMARY</button>
      </div>
    </div>
    <div class="confirm-password-login" v-show="confPassLogin">
      <header>
        <img src="../../assets/shopping-bag 1.png" alt="">
        <span class="title-blanja">Blanja</span>
        <p>Please Login with your account</p>
        <div class="checkMail">
          We have sent an email containing a password reset instruction to your email please check your email.
        </div>
      </header>
      <div class="password-form">
        <div class="form-group">
          <input type="email" class="form-control" id="InputEmailReset" aria-describedby="emailHelp" placeholder="Email">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="InputPasswordNew" placeholder="Password">
        </div>
        <div class="forgot-password">
            Forgot Password?
        </div>
        <button type="submit" class="btn">PRIMARY</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      resetPass: true,
      confPass: false,
      confPassLogin: false
    }
  },
  methods: {
    reset () {
      this.resetPass = false
      this.confPass = true
      this.confPassLogin = false
    },
    confirm () {
      this.resetPass = false
      this.confPass = false
      this.confPassLogin = true
    }
  }
}
</script>

<style scoped>
.reset-password, .confirm-password, .confirm-password-login {
  margin: 80px auto;
  width: 600px;
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
.new {
  font-size: 15px;
  color: #273AC7;
}
.title-blanja {
  font-size: 30px;
  color: #273AC7;
}
.password-form {
  margin: auto;
  width: 400px;
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
.checkMail {
  color: #9B9B9B;
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
