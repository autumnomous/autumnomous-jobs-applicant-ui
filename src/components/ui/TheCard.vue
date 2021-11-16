<template>
    <!-- Card -->
    <div :id="id" class="card" v-if="active">
        <!-- Header -->
        <div class="card-header bg-img-hero py-4" style="background-image: url(../../../public/assets/svg/components/abstract-shapes-21.svg);">
            <div class="flex-grow-1">
            <h3 class="card-header-title"><slot name="cardheader"/></h3>
            </div>
        </div>
        <!-- End Header -->

        <!-- Body -->
        <div class="card-body">
        <slot name="cardbody"/>
        </div>
        <!-- End Body -->

        <!-- Footer -->
        <div class="card-footer">
            <div class="d-flex justify-content-end align-items-center">
                <slot name="cardfooter"/>
            </div>
        </div>
        <!-- End Footer -->
    </div>
    <!-- End Card -->
</template>


<script>
export default {
    props:{
        id:String,
        active:{
            type: Boolean,
            default:false
            }
    }
}
</script>

<style scoped>
  div.card-header{
      background-color:#377DFF;
      
  }

  div.card-header h3{
      color:white;
  }

</style>