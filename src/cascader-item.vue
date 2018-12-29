<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click="leftSelected = item">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <yi-cascader-item :items="rightItems"></yi-cascader-item>
    </div>
  </div>
</template>

<script>
  export default {
    name: "YiCascaderItem",
    props: {
      items: {
        type: Array
      }
    },
    data () {
      return {
        leftSelected: null
      }
    },
    computed: {
      rightItems () {
        if (this.leftSelected && this.leftSelected.children) {
          return this.leftSelected.children
        } else {
          return null
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left {
      border: 1px solid red;
    }
    .right {
      margin-top: -1px;
    }
  }
</style> 
