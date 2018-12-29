<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover" v-if="popoverVisible">
      <cascader-item :items="source"></cascader-item>
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
    .trigger {
      border: 1px solid red;
      height: 32px;
      width: 100px;
    }
    .popover {
      border: 2px solid green;
      height: 200px;
      display: flex;
      .label {
        white-space: nowrap;
      }
    }
  }
</style>
