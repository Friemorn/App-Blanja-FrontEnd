<template>
  <div>
    <NavbarBefore/>
    <!-- <NavbarAfter/> -->
    <div class="container">
      <div class="path">
        Home &gt; category &gt; Shoes
      </div>
      <div class="buy">
        <div class="images-product">
          <div class="image-product">
            <img class="img-product" src="../../assets/cruzrone-shoe-l6XXkk 1.png" alt="">
          </div>
          <div class="image-product">
            <img class="img-product" src="../../assets/cruzrone-shoe-l6XXkk 2.png" alt="">
          </div>
          <div class="image-product">
            <img class="img-product" src="../../assets/cruzrone-shoe-l6XXkk 3.png" alt="">
          </div>
          <div class="image-product">
            <img class="img-product" src="../../assets/cruzrone-shoe-l6XXkk 4.png" alt="">
          </div>
        </div>
        <div class="buy-product">
          <div class="title-product">
            <p>Nike CruzOne (Bright Crimson)</p>
          </div>
          <div class="merk">
            <p>Nike</p>
          </div>
          <div class="rating">
            <Rating :grade="5" :maxStars="5" :hasCounter="true"/>
          </div>
          <div class="price">
            <p>Price</p>
            <span id="price">$ 20.0</span>
          </div>
          <div class="color">
            <p>Color</p>
            <div class="color-list">
              <div class="border-color selected-color">
                <img class="select-color" src="../../assets/Ellipse 5.png" alt="">
              </div>
              <div class="border-color">
                <img class="select-color" src="../../assets/Ellipse 6.png" alt="">
              </div>
              <div class="border-color">
                <img class="select-color" src="../../assets/Ellipse 7.png" alt="">
              </div>
              <div class="border-color">
                <img class="select-color" src="../../assets/Ellipse 8.png" alt="">
              </div>
            </div>
          </div>
          <div class="size-qty">
            <div class="size">
              <p>Size</p>
              <div class="count">
                <img src="../../assets/min.png" alt="min">
                <div class="count-size">28</div>
                <img src="../../assets/plus.png" alt="plus">
              </div>
            </div>
            <div class="qty">
              <p>Jumlah</p>
              <div class="count">
                <img src="../../assets/min.png" alt="min">
                <div class="count-qty">1</div>
                <img src="../../assets/plus.png" alt="plus">
              </div>
            </div>
          </div>
          <div class="button">
            <div class="btn-chat-bag">
              <div class="btn-chat">
                Chat
              </div>
              <div class="btn-bag">
                Add Bag
              </div>
            </div>
            <div class="btn-buy">
              Buy Now
            </div>
          </div>
        </div>
      </div>
      <div class="information">
        <h3>Informasi Produk</h3><br>
        <h5>Condition</h5>
        <h5 class="condition">New</h5><br>
        <h5>Description</h5>
        <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque officiis illo placeat reiciendis ipsum ullam eos vel debitis, assumenda beatae sed eius ea repellendus voluptates. Tempore cum quibusdam perferendis quas.</p>
      </div>
      <div class="product-review">
        <h3>Product Review</h3><br>
        <img src="../../assets/review.jpg" alt="">
      </div>
      <div class="recomendation">
        <h1>You can also like this</h1>
        <p>You've never seen it before!</p>
        <div class="product-recomendation"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarBefore from '../../components/_base/NavbarBefore'
// import NavbarAfter from '../../components/_base/NavbarAfter'
import Rating from '../../components/_base/Rating'

export default {
  name: 'Product',
  components: {
    NavbarBefore,
    // NavbarAfter
    Rating
  }
}
</script>

<style scoped>
.container {
  width: 80%;
}
.path {
  margin: 40px 0;
  color: #9B9B9B;
}
.buy {
  height: 700px;
  display: flex;
  flex-direction: row;
}
.images-product {
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 700px;
  overflow: auto;
}
.buy-product {
  width: 50%;
  height: 100%;
  padding-left: 30px;
}
.image-product {
  width: 263px;
  height: 329px;
}
.img-product {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.title-product {
  font-size: 28px;
  font-weight: 600;
}
.merk, .price, .desc {
  color: #9B9B9B;
}
.rating {
  height: 40px;
}
#price {
  color: black;
  font-size: 33px;
  font-weight: 600;
}
.color {
  margin-top: 20px;
}
.color-list {
  display: flex;
  flex-direction: row;
}
.border-color {
  margin-right: 15px;
  padding: 5px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
.selected-color {
  border: 1px solid blue
}
.select-color {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.size-qty {
  margin-top: 20px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.size {
  margin: 5px;
  width: 30%;
}
.qty {
  margin: 5px;
  width: 30%;
}
.count {
  display: flex;
  flex-direction: row;
}
.count img {
  height: 36px;
  width: 36px;
}
.count-size, .count-qty {
  margin: auto;
  font-size: 20px;
}
.btn-chat-bag {
  margin-top: 20px;
  height: 45px;
  display: flex;
  flex-direction: row;
}
.btn-chat {
  padding-top: 8px;
  margin-right: 20px;
  text-align: center;
  width: 150px;
  border-radius: 25px;
  border: 1px solid black;
}
.btn-bag {
  padding-top: 8px;
  text-align: center;
  width: 150px;
  border-radius: 25px;
  border: 1px solid black;
}
.btn-buy {
  margin-top: 30px;
  padding-top: 8px;
  text-align: center;
  height: 45px;
  width: 320px;
  border-radius: 25px;
  color: white;
  background-color: #273AC7;
}
.information {
  margin: 40px auto;
}
.information h3 {
  font-weight: 600;
}
.condition {
  color: red;
}
.recomendation {
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid gray;
}
.recomendation p {
  color: #9B9B9B;
}
</style>
