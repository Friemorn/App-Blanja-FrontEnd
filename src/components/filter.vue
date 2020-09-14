<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="filter" tabindex="-1" aria-labelledby="filterLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="filterLabel">Filter</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body d-flex flex-column">
                    <div class="colors">
                        <h4 class="text-left mb-4">Colors</h4>
                            <ul>
                                <li>
                                    <label>
                                        <input type="checkbox" value="black" v-model="colors">
                                        <span class="swatch" style="background: #222"></span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" value="white" v-model="colors">
                                        <span class="swatch" style="background: #FFFFFF;"></span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" value="red" v-model="colors">
                                        <span class="swatch" style="background: #B82222;"></span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" value="gray" v-model="colors">
                                        <span class="swatch" style="background: #BEA9A9;"></span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" value="cream" v-model="colors">
                                        <span class="swatch" style="background: #E2BB8D;"></span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" value="purple" v-model="colors">
                                        <span class="swatch" style="background: #151867;"></span>
                                    </label>
                                </li>
                            </ul>
                    </div>
                    <div class="sizes">
                        <h4 class="text-left my-4">Sizes</h4>
                        <ul>
                            <li>
                                <label>
                                    <input type="checkbox" value="xs" v-model="sizes">
                                    <span class="size" style="background: #fff">XS</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" value="s" v-model="sizes">
                                    <span class="size" style="background: #fff">S</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" value="m" v-model="sizes">
                                    <span class="size" style="background: #fff">M</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" value="l" v-model="sizes">
                                    <span class="size" style="background: #fff">L</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" value="xl" v-model="sizes">
                                    <span class="size" style="background: #fff">XL</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div class="categories">
                        <h4 class="text-left my-4">Category</h4>
                        <ul>
                            <li>
                                <label>
                                    <input type="checkbox" value="all" v-model="categories">
                                    <span class="category" style="background: #fff">All</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" value="women" v-model="categories">
                                    <span class="category" style="background: #fff">Women</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" value="men" v-model="categories">
                                    <span class="category" style="background: #fff">Men</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" value="boys" v-model="categories">
                                    <span class="category" style="background: #fff">Boys</span>
                                </label>
                            <li>
                                <label>
                                    <input type="checkbox" value="girls" v-model="categories">
                                    <span class="category" style="background: #fff">Girls</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div class="brands">
                        <h4 class="text-left my-4">Brands</h4>
                        <div class="form-group">
                            <select name="brands" class="form-control">
                                <option>adidas Originals, Jack & Jones, s.Oliver</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="wrapper-btn d-flex justify-content-around">
                        <button type="button" class="btn btn-outline-secondary rounded-pill my-3" data-dismiss="modal">Discard</button>
                        <button type="button" class="btn btn-primary rounded-pill my-3">Apply</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'filterModal',
  data () {
    return {
      colors: [],
      sizes: [],
      categories: [],
      brands: []
    }
  }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
li {
    display: flex;
    float: left;
    margin: 0 3px 0 3px;
}
label {
    cursor: pointer;
}
label input {
    display: none;
}
label input[type='checkbox']:checked + .swatch {
    box-shadow: inset 0 0 0 3px rgb(219, 209, 209);
}
.swatch {
    display: inline-block;
    vertical-align: middle;
    width: 36px;
    height: 36px;
    border-radius: 18px;
    border: 2px solid #d4d4d4;
}

/* Size */
label input[type='checkbox']:checked + .size {
    box-shadow: inset 0 0 0 20px rgb(37, 18, 207);
    color: white;
}
.size {
    display: inline-block;
    vertical-align: middle;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border: 0.4px solid #9B9B9B;
    border-radius: 8px;
}
/* Category */
label input[type='checkbox']:checked + .category {
    box-shadow: inset 0 0 0 20px rgb(37, 18, 207);
    color: white;
}
.category {
    display: inline-block;
    vertical-align: middle;
    width: 100px;
    height: 40px;
    line-height: 40px;
    border: 0.4px solid #9B9B9B;
    box-sizing: border-box;
    border-radius: 8px;
}

button {
    width: 120px;
    height: 36px;
}
.footer, .modal-body {
    box-shadow: 0px -8px 10px rgba(217, 217, 217, 0.25);
    border-radius: 0px 0px 8px 8px;
}
</style>
