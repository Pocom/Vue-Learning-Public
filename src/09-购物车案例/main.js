const vm = new Vue({
  el: '#app',
  data: {
    books: [{
      id: 1,
      name: '《算法导论》',
      date: '2006-9',
      price: 85.00,
      count: 1
    },
    {
      id: 2,
      name: '《UNIX编程艺术》',
      date: '2006-2',
      price: 59.00,
      count: 1
    },
    {
      id: 3,
      name: '《编程珠玑》',
      date: '2008-10',
      price: 39.00,
      count: 1
    },
    {
      id: 4,
      name: '《代码大全》',
      date: '2006-3',
      price: 128.00,
      count: 1
    }]
  },
  computed: {
    totalPrice() {
      let totalPrice = 0
      // 1. for() 普通循环
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      

      // 2. for( in ) 循环
      // for (let i in this.books) {
      //   // console.log(i)
      //   totalPrice += this.books[i].price * this.books[i].count
      // }

      // 3. for( of ) 循环
      // for (let i of this.books) {
      //   totalPrice += i.price * i.count
      // }

      // return totalPrice
    
      // 4. reduce
      return this.books.reduce((preVal, book) =>  preVal + book.price * book.count, 0)
    }
  },
  methods: {
    getFinalPrice(price) {
      return '￥' + price.toFixed(2)
    },
    // increment(obj) {
    //   obj.count += 1
    // },
    // decrement(obj) {
    //   obj.count -= 1
    // }
    increment(index) {
      if (this.books[index].count)
        this.books[index].count += 1
    },
    decrement(index) {
      this.books[index].count -= 1
    },
    removeHandler(index) {
      this.books.splice(index, 1)
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})

// 编程范式：命令式/声明式
// 编程范式：面型对象编程（第一公民：对象）/函数式编程（第一公民：函数）

// 高阶函数：
// filter(callbackfn(n): return boolean)：过滤
// map(callbackfn(n): return fn(n))：映射
// reduce(callbackfn(preValue, n), initialValue)：汇总