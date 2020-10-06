<template>
  <div v-if="Object.keys(good).length !== 0" class="base-info">
    <div class="info-title">{{good.title}}</div>
    <div class="info-price">
      <span class="n-price">{{good.newPrice}}</span>
      <span class="o-price">{{good.oldPrice}}</span>
      <span v-if="good.discount" class="discount">{{good.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{good.columns[0]}}</span>
      <span>{{good.columns[1] | collect}}</span>
      <span>{{good.services[good.services.length-1].name | time}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in good.services.length-1" :key="index">
        <img :src="good.services[index-1].icon">
        <span>{{' ' + good.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
	export default {
		name: "DetailBaseInfo",
    props: {
		  good: {
		    type: Object
      }
    },
    filters: {
      collect(str) {
        return str.slice(0, 2) + ' ' + str.slice(2, -1)
      },
      time(str) {
        return str.slice(0, 2) + ' ' + str.slice(2)
      }
    }
	}
</script>

<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-title {
    color: #222
  }

  .info-price {
    margin-top: 10px;
  }

  .info-price .n-price {
    font-size: 24px;
    color: var(--color-high-text);
  }

  .info-price .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .info-price .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }

  .info-other {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }

  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 40px;
  }

  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .info-service-item span {
    font-size: 12px;
    color: #333;
  }
</style>
