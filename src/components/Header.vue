<template>
    <header>
        <div class="content">
            <div class="header">
                <div class="logo">
                    <a class="logo" href="https://freshlimesoft.com">
                        <Logo />
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Logo from '../assets/svg/Logo.vue'

export default {
    components: {
        Logo
    },
}
</script>

<style lang="scss">
$bg-color: rgba(10, 31, 42, 0.95);
$lime-green: #55af2a;


header {
    background: $bg-color;
    padding: 5px;
}

.header {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>