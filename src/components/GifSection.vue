<template>
   <div class="gif-wrap">
        <img :src="require('/src/assets/welcome.gif')" alt="">
    </div>
</template>


<style lang="scss">
    .gif-wrap {
    margin: 50px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    
    img {
        border-radius: 10px;
        display: block;
        max-width: 100%;
        width: 100%;
    }
}
</style>
