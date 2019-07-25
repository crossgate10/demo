<template>
    <div>
        <div class="guide-grid-row">
            <div class="guide-grid-item"><p>實驗動物法案</p></div>
            <div class="guide-grid-item"><a href="./menu05/02/實驗動物法案.doc" >下載</a></div>
        </div>
        <div class="guide-grid-row">
            <div class="guide-grid-item"><p>行政院農業委員會實驗動物照護及使用指引</p></div>
            <div class="guide-grid-item"><a href="./menu05/02/行政院農業委員會實驗動物照護及使用指引.pdf" target="_blank" >下載</a></div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.guide-grid-row {
    display: grid;
    grid-template-columns: 4fr 1fr;
    border: 3px solid lightgray;
    grid-gap: 2px;
}
.guide-grid-row > .guide-grid-item:first-child {
    justify-content: left;
    text-align: left;
}
.guide-grid-item {
    border: 1px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
}
.guide-grid-item p {
    margin: 5px;
}
</style>

