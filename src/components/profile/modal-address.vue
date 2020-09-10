<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="address" tabindex="-1" role="dialog" aria-labelledby="addressLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addressLabel">Add New Address</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="home" class="text-left d-flex">Save address as (ex : home address, office address)</label>
                            <input type="text" class="form-control" placeholder="Rumah" v-model="data.rumah">
                        </div>
                        <div class="form-group row">
                            <div class="class-one col-lg-6">
                                <label class="d-flex">Recipient’s telephone Number</label>
                                <input type="number" class="form-control">
                            </div>
                            <div class="class-two col-lg-6">
                                <label class="d-flex">Recipient’s name</label>
                                <input type="text" class="form-control" v-model="data.recipientsName">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="class-one col-lg-6">
                                <label class="d-flex">Address</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="class-two col-lg-6">
                                <label class="d-flex">Postal Code</label>
                                <input type="number" class="form-control" v-model="data.postalCode">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="class-one col-lg-6">
                                <label class="d-flex">City or Subdistrict</label>
                                <input type="text" class="form-control" v-model="data.kecamatan">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="$emit('fire-event')">Save</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'modalAddress',
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
