<template>
    <div class="product-template">
        <div class="card">
          <div class="card-header">
            <h3 class="text-left font-weight-bold">My Order</h3>
            <div class="list d-flex">
              <span class="click mr-3" @click="toggle">All items</span>
              <span class="click mx-3" @click="toggle">Get Paid</span>
              <span class="click mx-3" @click="toggle">Processed</span>
              <span class="click mx-3" @click="toggle">Sent</span>
              <span class="click mx-3" @click="toggle">Completed</span>
              <span class="click mx-3" @click="toggle">Order Cancel</span>
            </div>
          </div>
          <div class="card-body">
            <div class="all-items" v-if="showing==='All items'">
                <form class="form-inline">
                  <input type="search" class="my-3 form-control search d-flex" id="search" placeholder="Search">
                  <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> -->
                </form>
            </div>
            <h1 v-else-if="showing==='Sold Out'">Sold Out</h1>
            <h1 v-else-if="showing==='Order Cancel'">Order Cancel</h1>
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
.product-template {
  background: #F5F5F5;
}
.card-body {
  height: 500px;
}
.click {
  cursor: pointer;
}
.search {
    background-image: url('../../assets/magnifying-glass.png');
    background-repeat: no-repeat;
    padding-left: 30px;
    background-position: left;
    border-radius: 15px;
}
</style>
