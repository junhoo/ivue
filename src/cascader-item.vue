<template>
  <div class="cascaderItem" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click="leftSelected = item">
        {{item.name}}
        <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <yi-cascader-item :items="rightItems" :height="height"></yi-cascader-item>
    </div>
  </div>
</template>

<script>
  import Icon from './icon'
  export default {
    name: "YiCascaderItem",
    components: {Icon},
    props: {
      items: {
        type: Array
      },
      height: {
        type: String
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
  @import "variables";
  .cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100px;
    .left {
      height: 100%;
      padding: .3em 0;
    }
    .right {
      height: 100%;
      border-left: 1px solid $border-color-light;
    }
    .label {
      padding: .3em 1em;
      display: flex;
      align-items: center;
      .icon {
        margin-left: 1em;
        transform: scale(0.5);
      }
    }
  }
</style> 
