<template>
 <div class="row no-gutters shadow mt-3 px-3 py-1 d-flex align-items-center mr-3 rounded">
                    <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
                        <label class="container">
                            <input type="checkbox" checked="checked">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                        <div class="row no-gutters d-flex align-items-center">
                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                                <div class="container-img">
                                    <img src="../../assets/dummy.png" alt="dumy">
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7">
                                <div class="row no-gutters">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 title-product">Men's formal suit - Black</div>
                                </div>
                                <div class="row no-gutters">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 branch-product">Zalora Cloth</div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                <div class="row no-gutters d-flex align-items-center">
                                    <button class="col minus">-</button>
                                    <div class="col control-num text-center"> 1 </div>
                                    <button class="col plus">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 text-right">
                        <div class="row no-gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 price text-right"> Rp. 12.000</div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
  name: 'ItemCarts'
}
</script>

<style scoped>
.content{
    margin: 0 130px;
}
h4{
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 1px;
}
.title{
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
}
.title-price{
    font-size: 16px;
    font-weight: 400;
    color: #9B9B9B;
    letter-spacing: 1px;
}
.price{
    font-weight: 700;
    letter-spacing: 1px;
}
.btn-danger{
    width: 100%;
    border-radius: 25px;
    letter-spacing: 1px;
}
.btn-outline-danger{
    border: none;
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 25px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.select{
    font-size: 16px;
    font-weight: 500;
}
.select span {
    color: #D5D5D5;
}
.container-img{
    width: 70px;
    height: 70px;
}
.container-img img{
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
/* Hide the browser's default checkbox */
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.checkmark {
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    height: 21px;
    width: 21px;
    background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #fc0000;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.title-product{
    font-size: 18px;
    font-weight: 700;
}
.branch-product{
    font-size: 14px;
    font-weight: 400;
    color:  #D5D5D5;
}
.minus{
    width: 36px;
    height: 36px;
    border-radius: 50px;
    border: none;
    background: #D5D5D5;
}
.plus{
    width: 36px;
    height: 36px;
    border-radius: 50px;
    border: none;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(142, 142, 142, 0.25);
}
</style>
