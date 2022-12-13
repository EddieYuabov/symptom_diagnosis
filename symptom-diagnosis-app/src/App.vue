<template>
    <div>
      <nav>
      <NavBar/>
    </nav>
    <RouterView></RouterView>
    </div>
</template>

<script>
// import InputComponent from './components/Input';
import NavBar from './components/NavBar';
export default {
  name: 'App',
  components: {NavBar}
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
  color: #80cbc4;
  -webkit-text-stroke: .3px rgb(0, 0, 0);
  font-size: 30px;
}
</style>
