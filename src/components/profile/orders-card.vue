<template>
    <div class="order-template">
        <div class="card">
          <div class="card-header">
            <span class="d-flex">My Order</span>
            <div class="list d-flex justify-content-between">
              <span class="click" @click="toggle">All items</span>
              <span class="click" @click="toggle">Not yet paid</span>
              <span class="click" @click="toggle">Packed</span>
              <span class="click" @click="toggle">Sent</span>
              <span class="click" @click="toggle">Completed</span>
              <span class="click" @click="toggle">Order cancel</span>
            </div>
          </div>
          <div class="card-body">
            <h1 v-if="showing==='All items'">All items</h1>
            <h1 v-else-if="showing==='Not yet paid'">not yet paid</h1>
            <h1 v-else-if="showing==='Packed'">Packed</h1>
            <h1 v-else-if="showing==='Sent'">Sent</h1>
            <h1 v-else-if="showing==='Completed'">Completed</h1>
            <h1 v-else-if="showing==='Order cancel'">Order cancel</h1>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'orderCard',
  data () {
    return {
      showing: 'All items'
    }
  },
  methods: {
    toggle (e) {
      console.log(e.target.innerText)
      this.showing = e.target.innerText
    }
  }
}
</script>

<style scoped>
.order-template {
  background: #F5F5F5;
}
.card-body {
  height: 500px;
}
.click {
  cursor: pointer;
}
</style>
