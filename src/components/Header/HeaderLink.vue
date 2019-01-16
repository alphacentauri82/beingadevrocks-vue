<template>
  <li>
    <a @click.prevent="$emit('click')" :class="{ 'active': active }">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  props: ['active']
}
</script>

<style scoped>
  li {
    cursor: pointer;
  }
</style>