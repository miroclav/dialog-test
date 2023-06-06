<template>
    <div class="header">
        <nav>
            <router-link class="link" to="/">Галерея собак</router-link>
            <router-link class="link" to="/slider">Слайдер</router-link>
        </nav>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 76px;
    background: #ffffff;
    box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
    margin-bottom: 20px;
}

.logo {
    position: absolute;
    top: 22px;
    left: 51px;
    height: 32px;
    width: 175px;
}

nav {
    display: flex;
    gap: 24px;
}

.link {
    text-decoration: none;
    line-height: 24px;
    color: rgba(17, 17, 17, 0.48);
    transition: all 0.5s ease;
}

.link:hover {
    text-decoration: underline;
}
</style>
