<template>
  <div>
    <router-view :state="state"></router-view>
  </div>
</template>

<script>
export default {
  name: 'layout-template',
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
