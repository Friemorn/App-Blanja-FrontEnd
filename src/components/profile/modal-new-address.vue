<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="newAddress" tabindex="-1" role="dialog" aria-labelledby="newAddressLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="newAddressLabel">Add New Address</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="home" class="text-left d-flex">Save address as (ex : home address, office address)</label>
                            <input type="text" class="form-control" placeholder="Rumah">
                        </div>
                        <div class="form-group row">
                            <div class="class-one col-lg-6">
                                <label class="d-flex">Recipient’s telephone Number</label>
                                <input type="number" class="form-control">
                            </div>
                            <div class="class-two col-lg-6">
                                <label class="d-flex">Recipient’s name</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="class-one col-lg-6">
                                <label class="d-flex">Address</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="class-two col-lg-6">
                                <label class="d-flex">Postal Code</label>
                                <input type="number" class="form-control">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="class-one col-lg-6">
                                <label class="d-flex">City or Subdistrict</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group form-check d-flex">
                            <input type="checkbox" class="form-check-input" id="chec">
                            <label class="form-check-label" for="exampleCheck1">Make it primary address</label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-dark rounded-pill" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary rounded-pill" @click="$emit('fire-event')">Save</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'modalNewAddress',
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
