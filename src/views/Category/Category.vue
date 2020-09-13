<template>
<div class="container-fluid">
  <div class="row no-gutters new mx-5 my-4">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-left">
      <div class="row no-gutters header">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-left">
          <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
          </nav>
        </div>
      </div>
      <div class="row no-gutters header">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-left">
        <h4>T-Shirt</h4>
        </div>
      </div>
      <div class="row no-gutters body">
        <div class="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12 text-left d-flex flex-wrap">
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import CardProduct from '../../components/_base/CardProduct'
export default {
  name: 'Category',
  components: {
    CardProduct
  }
}
</script>

<style scoped>
h4{
  font-family: 'Metropolis-Bold';
  letter-spacing: 1px;
  margin: 0;
}
p{
  letter-spacing: 1px;
  margin: 0;
}
.breadcrumb{
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  background-color: transparent;
}
.breadcrumb-item+.breadcrumb-item::before{
  content: ">";
}
</style>
