<template>
  <div>
    <ul>
      <li v-for="item in news" :key=item>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: ['财经', '体育', '娱乐', '游戏'],
    }
  }
}
</script>

<style>

</style>