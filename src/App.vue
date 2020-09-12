<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/seller">Seller</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@font-face {
font-family: 'Metropolis-Bold';
src: url('../src/assets/font/Metropolis-Bold.otf');
}
@font-face {
font-family: 'Metropolis-Light';
src: url('../src/assets/font/Metropolis-Light.otf');
}
@font-face {
font-family: 'Metropolis-Medium';
src: url('../src/assets/font/Metropolis-Medium.otf');
}
#app {
  font-family: 'Metropolis-Light', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
