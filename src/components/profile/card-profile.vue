<template>
    <div class="card-template">
        <div class="card">
            <div class="card-header">
                <span class="h4 d-flex">My Profile</span>
                <span class="d-flex">Manage your profile information</span>
            </div>
            <div class="card-body">
                <div class="data-profile row d-flex justify-content-between bg-info">
                    <form class="bg-danger col-lg-10 col-md-8">
                        <div class="form-group row">
                            <label class="col-lg-3 col-md-4 col-sm-2 col-form-label text-left" for="name">Name</label>
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
                            <label for="" class="col-sm-2 text-left">Gender</label>
                            <div class="col-sm-10 d-flex justify-content-around">
                                <label class="radio-inline" for="">
                                    <input type="radio" name="gender" value="laki-laki" v-model="data.gender">
                                    Laki-laki
                                </label>
                                <label class="radio-inline" for="">
                                    <input type="radio" name="gender" value="perempuan" v-model="data.gender">
                                    Perempuan
                                </label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="birth" class="col-sm-2 text-left">Date of Birth</label>
                            <div class="col-sm-10">
                                <select v-model="data.year">
                                    <option value="0">Year:</option>
                                    <option v-for="year in years" :value="year" :key="year.id">{{ year }}</option>
                                </select>
                            </div>
                        </div>
                    </form>
                    <div class="profile-pict col-lg-2 col-md-4 bg-success px-4">
                        <div class="img-profile">
                            <img class="rounded-circle" src="../../assets/d8p1wqo-3b4d78e8-db49-4a66-99c1-882a64c82be0.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'cardProfile',
  props: {
    data: {
      type: Object
    }
  },
  computed: {
    years () {
      const year = new Date().getFullYear()
      return Array.from({ length: year - 1900 }, (value, index) => 1901 + index)
    }
  }
}
</script>

<style scoped>
.card-template {
    background: #F5F5F5;
}
.img-profile img {
    border: 1px solid green;
    width: 111px;
    height: 111px;
    object-fit: cover;
}

</style>
