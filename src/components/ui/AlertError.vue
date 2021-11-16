<template>
    <div class="alert alert-danger" role="alert">
        {{message}}
    </div>
</template>

<script>
    export default {
        props:{
            message:String,
        }
    }
</script>

<style scoped>

</style>