 <template>
  <div>
    <yi-button>默认按钮</yi-button>
    <yi-button icon="settings">默认按钮</yi-button>
    <yi-button :loading="true">默认按钮</yi-button>
    <yi-button disabled>默认按钮</yi-button>

    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/button'

  export default {
    components: {
      'yi-button': Button
    },
    data () {
      return {
        content: `
        <yi-button>默认按钮</yi-button>
        <yi-button icon="settings">默认按钮</yi-button>
        <yi-button :loading="true">默认按钮</yi-button>
        <yi-button disabled>默认按钮</yi-button>
      `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script> 