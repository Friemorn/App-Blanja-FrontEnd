<template>
    <div>
        <div class="card">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <div class="data-profile">
                    <form>
                        <div class="form-group d-flex">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1">
                        </div>
                        <div class="form-group d-flex">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="profile-pict">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'cardProfile'
}
</script>

<style scoped>
</style>
