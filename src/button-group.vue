<template>
  <div class="yi-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'YiButtonGroup',
    mounted () {
      for (let node of this.$el.children) { // 检测子元素是不是 button
        let name = node.nodeName.toLowerCase()
        if (name !== 'button') {
          console.warn(`yi-button-group 的子元素应该全是 yi-button，但是你写的是 ${name}`)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .yi-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .yi-button {
      border-radius: 0;
      &:not(:first-child) { // 第一个元素不需要 margin left -1px
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>