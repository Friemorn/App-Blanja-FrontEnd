<template>
    <div class="card-template">
        <div class="card">
            <div class="card-header">
                <span class="h4 d-flex">My Profile</span>
                <span class="d-flex">Manage your profile information</span>
            </div>
            <div class="card-body">
                <div class="data-profile row d-flex justify-content-between">
                    <form class="col-lg-10 col-md-8">
                        <div class="form-group row">
                            <label class="col-lg-3 col-md-4 col-sm-2 col-form-label text-left" for="name">Name</label>
                            <div class="col-lg-9 col-md-8 col-sm-10">
                                <input type="text" class="form-control" id="userName" v-model="data.name">
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
                            <label for="" class="col-lg-3 col-sm-2 text-left">Gender</label>
                            <div class="col-lg-9 col-sm-10 d-flex">
                                <label class="radio-inline mr-3" for="">
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
                            <label for="birth" class="col-lg-3 col-sm-2 text-left">Date of Birth</label>
                            <div class="col-lg-9 col-sm-10 d-flex">
                                <select class="custom-select mr-4" v-model="data.date">
                                    <option value="0">Dates:</option>
                                    <option v-for="(date, index) in dates" :key="index" :value="date">{{ date }}</option>
                                </select>
                                <select class="custom-select mx-4" v-model="data.month">
                                    <option value="0">Month:</option>
                                    <option v-for="(month, index) in months" :key="index" :value="month">{{ month }}</option>
                                </select>
                                <select class="custom-select ml-4" v-model="data.year">
                                    <option value="0">Year:</option>
                                    <option v-for="year in years" :value="year" :key="year.id">{{ year }}</option>
                                </select>
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
                        <label for="file" id="selector" class="btn btn-outline-secondary btn-sm rounded-pill my-3" style="font-size:12px">Select Image</label>
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
    },
    months () {
      const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'July', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
      return Array.from(months)
    },
    dates () {
      const dates = []
      for (let i = 1; i <= 31; i++) {
        dates.push(i)
      }
      return Array.from(dates)
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
