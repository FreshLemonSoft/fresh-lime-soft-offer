<template>
    <nav>
        <div class="content">
            <router-link to="/"></router-link>
            <ul class="nav">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/admin">Admin</router-link></li>
                <!-- <li><a href=""></a></li> -->
            </ul>
        </div>
    </nav>
</template>

<style lang="scss">
.nav {
    display: flex;
    list-style: none;

    li + li {
        margin-left: 20px;
    }
}
</style>