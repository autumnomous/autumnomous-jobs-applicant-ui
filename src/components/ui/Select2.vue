<template>
    <select class="js-custom-select custom-select dropdown-toggle">
        <slot></slot>
    </select>
</template>

<script>
import $ from 'jquery';
import 'select2/dist/js/select2.full';
import 'select2/dist/css/select2.min.css'

    export default {
        
        props:{
            options: Object,
            modelValue: String
        },
        mounted() {

            const vm = this
            $(this.$el)
            // init select2
            .select2({ data: this.options })
            .val(this.modelValue)
            .trigger('change')
            // emit event on change.
            .on('change', function() {
                vm.$emit('update:modelValue', this.value)
            })
        },
        watch: {
            modelValue(value) {
            // update value
                $(this.$el)
                    .val(value)
                    .trigger('change')
            
            },
            options(options) {
                // update options
                $(this.$el)
                    .empty()
                    .select2({ data: options })
            }
        },
        unmounted() {
            $(this.$el)
            .off()
            .select2('destroy')
        }
            }
</script>

<style scoped>

select {
  min-width: 300px;
  margin-top:2px;
  padding-top: 10px;
}

</style>