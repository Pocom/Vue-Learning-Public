export default {
  template: `
    <div style="text-align: center">
    <h1>{{ message }}</h1>
    <button @click="btnClick">Button</button>
    </div>
    `,
  data() {
    return {
      message: 'Hello Webpack!'
    }
  },
  methods: {
    btnClick() {
      console.log("btnClick!");
    }
  }
}