<template>
    <nav id="nav-bar">
        <router-link class="nav-links" to="/">Home</router-link>
        <router-link class="nav-links" to="/symptoms">Symptoms</router-link>
        <router-link class="nav-links" to="/diagnoses">Diagnosis</router-link>
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
.nav-links{
    color:black
}
a:link{
    text-decoration: none;
}
</style>