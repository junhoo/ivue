<template>
  <svg class="yi-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
  import './svg'
  export default {
    name: 'YiIcon',
    props: ['name']
  }
</script>
<style lang="scss" scoped>
  .yi-icon {width: 1em; height: 1em; }
</style>