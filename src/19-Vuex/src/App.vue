<template>
  <div id="app" style="text-align: center;">
    <h1>{{ message }}</h1>
    <h2>---- App ----</h2>
    <h3>Count: {{ counter }}</h3>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <h3>$store.state.counter: {{ $store.state.counter }}</h3>
    <!-- <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button>-->
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <h2>---- HelloVuex ----</h2>

    <!-- 传统父子组件通信方式 -->
    <hello-vuex :counter="counter" />

    <h2>---- Getters ----</h2>
    <h3>$store.getters.powerCounter: {{ $store.getters.powerCounter }}</h3>

    <h3>
      $store.getters.greaterAgesStu:
      <br />
      {{ $store.getters.greaterAgesStu | showStuName }}
    </h3>
    <h3>
      $store.getters.greaterAgesCount:
      <br />
      {{ $store.getters.greaterAgesCount }}
    </h3>

    <h3>
      $store.getters.greaterAge(12):
      <br />
      {{ $store.getters.greaterAge(12) | showStuName}}
    </h3>

    <h2>---- Action ----</h2>
    <h2>Info</h2>
    <h3>name: {{ $store.state.info.name }}</h3>
    <h3>age: {{ $store.state.info.age }}</h3>
    <button @click="updateInfo">Change</button>

    <h2>---- Module ----</h2>
    <h2>Module A</h2>
    <h3>name: {{ $store.state.a.name}}</h3>
    <h3>age: {{ $store.state.a.age}}</h3>
    <div>
      <label for="input">
        <input type="text" id="input" v-model="name" @input="updateName"/>
      </label>
    </div>
    <h3>Full name 1: {{ $store.getters.fullName}}</h3>
    <h3>Full name 2: {{ $store.getters.fullName2}}</h3>
    <h3>Full name 3: {{ $store.getters.fullName3}}</h3>

    <button @click="asyncUpdateName">async</button>
  </div>
</template>

<script>
import HelloVuex from "@/components/HelloVuex";
import { INCREMENT } from "@/store/mutations-types";

export default {
  name: "App",
  components: {
    HelloVuex,
  },
  data() {
    return {
      message: "Hello Vuex!",
      counter: 0,
      name: ''
    };
  },
  methods: {
    add() {
      this.$store.commit(INCREMENT);
    },
    sub() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      this.$store.commit("incrementCount", count);
    },
    updateInfo() {
      // this.$store.dispatch('aUpdateInfo')

      // this.$store.dispatch('aUpdateInfo', () => {
      //   console.log('Action 已完成！');
      // })

      // this.$store.dispatch('aUpdateInfo', {
      //   message: 'message',
      //   success: () => {
      //     console.log('Action 已完成！');
      //   }
      // })

      // Promise
      this.$store.dispatch("aUpdateInfo", "message").then((res) => {
        console.log("Action 已完成");
        console.log(res);
      });
    },
    updateName() {
      this.$store.commit('updateName', this.name)
    },
    asyncUpdateName() {
      this.$store
        .dispatch('asyncUpdateName')
        .then(res => {
          console.log(res);
        })
    }
  },
  filters: {
    showStuName(stus) {
      return stus.map((s) => s.name).join(", ");
    },
  },
};
</script>

<style></style>
