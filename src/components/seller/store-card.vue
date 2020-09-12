<template>
    <div class="card-template">
        <div class="card">
            <div class="card-header">
                <span class="h4 d-flex">My Profile Store</span>
                <span class="d-flex">Manage your profile information</span>
            </div>
            <div class="card-body">
                <div class="data-profile row d-flex justify-content-between">
                    <form class="col-lg-10 col-md-8">
                        <div class="form-group row">
                            <label class="col-lg-3 col-md-4 col-sm-2 col-form-label text-left" for="name">Store Name</label>
                            <div class="col-lg-9 col-md-8 col-sm-10">
                                <input type="text" class="form-control" v-model="data.name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-md-4 col-sm-2 col-form-label text-left" for="email">Email</label>
                            <div class="col-lg-9 col-md-8 col-sm-10">
                                <input type="email" class="form-control" v-model="data.email">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-md-4 col-sm-2 col-form-label text-left" for="phone">Phone Number</label>
                            <div class="col-lg-9 col-md-8 col-sm-10">
                                <input type="number" class="form-control" id="phone" v-model="data.phoneNumber">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="" class="col-lg-3 col-md-4 col-sm-2 text-left">Store Description</label>
                            <div class="col-lg-9 col-md-8 col-sm-10">
                                <textarea class="form-control" rows="7"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3"></div>
                            <div class="col-lg-9">
                                <button class="btn btn-sm btn-primary rounded-pill d-flex">Save</button>
                            </div>
                        </div>
                    </form>
                    <div class="profile-pict col-lg-2 col-md-4 px-4">
                        <div class="img-profile">
                            <img class="rounded-circle" src="../../assets/d8p1wqo-3b4d78e8-db49-4a66-99c1-882a64c82be0.jpg" alt="">
                        </div>
                        <input type="file" id="file" hidden>
                        <label for="file" id="selector" class="btn btn-outline-secondary btn-sm rounded-pill my-3">Select Image</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'storeCard',
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style scoped>
.card-template {
    background: #F5F5F5;
}
.img-profile img {
    width: 111px;
    height: 111px;
    object-fit: cover;
}
@media screen and (max-width: 765px) {
  .data-profile {
      flex-direction: column-reverse;
  }
}
</style>
