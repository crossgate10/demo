<template>
    <div>
        <div class="member-grid-row">
            <div class="member-grid-item"><p>高科大_實驗動物照護及使用委員會名冊10712</p></div>
            <div class="member-grid-item"><a href="./menu02/高科大_實驗動物照護及使用委員會名冊10712.doc" >下載</a></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.member-grid-row {
    display: grid;
    grid-template-columns: 4fr 1fr;
    border: 3px solid lightgray;
    grid-gap: 2px;
}
.member-grid-row > .member-grid-item:first-child {
    justify-content: left;
    text-align: left;
}
.member-grid-item {
    border: 1px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
}
.member-grid-item p {
    margin: 5px;
}
</style>

