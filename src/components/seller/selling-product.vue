<template>
    <div class="selling-template">
        <div class="inventory">
            <div class="card">
                <div class="card-header">
                    <h3 class="text-left">Inventory</h3>
                </div>
                <div class="card-body">
                    <div class="form-group d-flex flex-column">
                        <label for="name" class="text-left">Name of goods</label>
                        <input type="text" class="form-control col-lg-4">
                    </div>
                </div>
            </div>
        </div>
        <div class="item-details my-5">
            <div class="card">
                <div class="card-header">
                    <h3 class="text-left">Item Details</h3>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group d-flex flex-column mb-3">
                            <label for="price" class="text-left">Unit Price</label>
                            <input type="text" class="form-control col-lg-4">
                        </div>
                        <div class="form-group d-flex flex-column my-4">
                            <label for="stock" class="text-left">Stock</label>
                            <input type="text" class="form-control col-lg-4">
                        </div>
                        <div class="form-group d-flex flex-column my-4">
                            <label for="" class="text-left">Stock</label>
                            <div class="d-flex">
                                <label class="radio-inline mr-2" for="baru">
                                    <input type="radio" value="baru" name="kondisi">
                                    Baru
                                </label>
                                <label class="radio-inline mx-2" for="bekas">
                                    <input type="radio" value="bekas" name="kondisi">
                                    Bekas
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="photo my-5">
            <div class="card">
                <div class="card-header">
                    <h3 class="text-left">Photo of goods</h3>
                </div>
                <div class="card-body m-4 card-border">
                    <div class="img-container my-4">
                        <img class="goods" src="../../assets/jas.jpg" alt="">
                        <img class="goods" src="../../assets/jas.jpg" alt="">
                        <img class="goods" src="../../assets/jas.jpg" alt="">
                        <img class="goods" src="../../assets/jas.jpg" alt="">
                        <img class="goods" src="../../assets/jas.jpg" alt="">
                    </div>
                    <div class="footer mx-4" style="border-top:1px solid #D4D4D4">
                        <button class="btn btn-outline-secondary rounded-pill mt-4">Upload foto</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="description">
            <div class="card">
                <div class="card-header">
                    <h3 class="text-left">Description</h3>
                </div>
                <div class="card-body">
                    <div>
                        <textarea class="form-control" rows="9"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'sellingProduct'
}
</script>

<style scoped>
.card-border {
    border:1px dashed #D4D4D4;
    border-radius: 5px;
}
.goods {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 5px;
    margin: 9px;
}
.goods:hover {
    width: 190px;
    height: 190px;
    transition: .5s;
    cursor: pointer;
}
</style>
