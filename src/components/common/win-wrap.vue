<template>
  <div class="win_wrap" @touchmove.self.prevent @click.self="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'win-wrap',
  data () {
    return {}
  }
}
</script>

<style scoped>
  .win_wrap{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.50);
    z-index:10000;
  }
</style>
