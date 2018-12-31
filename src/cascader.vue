<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-item :items="source" class="popover"
        :height="popoverHeight"></cascader-item>
    </div>
  </div>
</template>

<script>
  import CascaderItem  from './cascader-item'
  export default {
    name: 'YiCascader',
    components: { CascaderItem },
    props: {
      source: {
        type: Array
      },
      popoverHeight: {
        type: String
      }
    },
    data () {
      return {
        popoverVisible: false,
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "variables";
  .cascader {
    position: relative;
    .trigger {
      height: 32px;
      width: 100px;
      border: 1px solid black;
    }
    .popover {
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      display: flex;
      @extend .box-shadow;
    }
  }
</style>
