<template>
    <div class="top-banner-div">
        <img src="../assets/testBanner.png"/>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.top-banner-div{
    background-color:beige;
}

@media screen and (min-width: 0px) and (max-width: 420px) {
    .top-banner-div {
        display: none;
    }
}

@media screen and (min-width: 420px) {
    
}

</style>
