<template>
  <div class="popover" @click.stop="onClick">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>
 <script>
  export default {
    name: "GuluPopover",
    data () {
      return {visible: false}
    },
    methods: {
      onClick () {
        this.visible = !this.visible
        if (this.visible) {
          this.$nextTick(() => {
            document.body.appendChild(this.$refs.contentWrapper)
            let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
            this.$refs.contentWrapper.style.top = top + window.scrollX + 'px'
            let eventHandler = () => {
              this.visible = false
              console.log('document 隐藏 popover')
              document.removeEventListener('click', eventHandler)
            }

            document.addEventListener('click', eventHandler)
          })
        } else {
          console.log('v-model 隐藏 popover')
        }
      }
    }
  }
</script>
 <style scoped lang="scss">
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
  }
</style> 