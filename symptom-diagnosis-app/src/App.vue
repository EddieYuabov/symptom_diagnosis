<template>
  <div>
    <header>
      <InputComp/>
    </header>
  </div>
</template>

<script>
import InputComp from './components/Input';
export default {
  name: 'App',
  components: {InputComp}
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
