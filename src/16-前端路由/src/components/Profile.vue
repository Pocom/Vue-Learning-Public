<template>
  <div>
    <h2>Profile</h2>
    <p>Hello Profile!</p>
    <h3>Name: {{ $route.query.name }}</h3>
    <h3>Age: {{ $route.query.age }}</h3>
    <h3>Height: {{ $route.query.height }}</h3>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>