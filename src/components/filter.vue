<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="filter" tabindex="-1" aria-labelledby="filterLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="filterLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body d-flex flex-column">
                    <div class="colors">
                        <h4 class="text-left">Colors</h4>
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
                        <h4 class="text-left">Sizes</h4>
                        <ul>
                            <li>
                                <label>
                                    <input type="checkbox" value="xs" v-model="sizes">
                                    <span class="size" style="background: #fff">xs</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div class="category">

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
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
      sizes: []
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
</style>
