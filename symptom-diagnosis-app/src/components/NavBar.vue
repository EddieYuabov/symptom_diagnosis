<template>
    <nav id="nav-bar">
        <router-link to="/">Home</router-link>
        <router-link to="/symptoms">Symptoms</router-link>
        <router-link to="/diagnoses">Diagnosis</router-link>
    </nav>

</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style>
#nav-bar{
    display: flex;
    justify-content: space-evenly;
    background-color: rgb(231, 231, 231);
    padding: 50px 0px 50px 0px;
}
</style>