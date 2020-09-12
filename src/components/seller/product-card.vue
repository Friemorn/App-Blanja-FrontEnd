<template>
    <div class="product-template">
        <div class="card">
          <div class="card-header">
            <span class="d-flex">My Product</span>
            <div class="list d-flex">
              <span class="click mr-3" @click="toggle">All items</span>
              <span class="click mx-3" @click="toggle">Sold Out</span>
              <span class="click mx-3" @click="toggle">Activated</span>
            </div>
          </div>
          <div class="card-body">
            <!-- <h1 v-if="showing==='All items'">All items</h1> -->
            <div class="all-items" v-if="showing==='All items'">
                <input type="text" class="my-3 search d-flex" id="search" placeholder="Search">
                <div class="product-data">
                    <div class="card">
                        <div class="card-header d-flex">
                            <span class="flex-grow-1 text-left">Product Name</span>
                            <span class="px-5">Price</span>
                            <span class="px-5">Stock</span>
                        </div>
                    </div>
                </div>
            </div>
            <h1 v-else-if="showing==='Sold Out'">Sold Out</h1>
            <h1 v-else-if="showing==='Activated'">Activated</h1>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'productCard',
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
    border-radius: 10px;
}
</style>
