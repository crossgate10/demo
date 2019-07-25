<template>
    <div>
        <div class="spec-sub-links">
            <div class="spec-sub-links-grid-item"><router-link to="/download/specs/1f">厚生1樓 水生動物房</router-link></div>
            <div class="spec-sub-links-grid-item"><router-link to="/download/specs/5f">厚生5樓 水生動物房</router-link></div>
            <div class="spec-sub-links-grid-item"><router-link to="/download/specs/7f">厚生7樓 院及動物房</router-link></div>
            <div class="spec-sub-links-grid-item"><router-link to="/download/specs/farm">楠梓校區 養殖場</router-link></div>
        </div>
        <main-content/>
    </div>
</template>

<script>
import Content from '../Content.vue'

export default {
    components:{
        'main-content': Content
    }
}
</script>

<style scoped>
.spec-sub-links {
    border: lightgray 3px solid;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1px;
}
.spec-sub-links-grid-item {
    padding: 5px;
    border: black 1px solid;
}
.spec-sub-links-grid-item a {
    text-decoration: none;
}
</style>


