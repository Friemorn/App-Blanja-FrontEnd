<template>
  <div container>
    <div class="login">
      <header>
        <img src="../../assets/shopping-bag 1.png" alt="">
        <span class="title-blanja">Blanja</span>
        <p>Please login with your account</p>
      </header>
      <form>
        <div class="role">
          <div class="customer inactive">
            Customer
          </div>
          <div class="seller active">
            Seller
          </div>
        </div>
        <div class="form-group">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="forgot-password">
            Forgot Password?
        </div>
        <button type="submit" class="btn">PRIMARY</button>
        <div class="no-account">
          Don't have a Blanja account? <span class="register">Register</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
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
  font-size: 14px;
}
.title-blanja {
  font-size: 30px;
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
.form-group {
  margin-top: 20px;
}
.forgot-password {
  color: #273AC7;
  text-align: right;
  font-size: 14px;
  margin-bottom: 20px;
}
.btn {
  width: 100%;
  color: white;
  background-color: #273AC7;
  font-size: 14px;
  padding: 10px;
  border-radius: 25px;
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
