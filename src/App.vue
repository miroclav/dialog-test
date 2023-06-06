<template>
    <MyNavbar />

    <router-view />
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";

export default {
    components: {
        MyNavbar,
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap");

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    color: #111111;
}
</style>
