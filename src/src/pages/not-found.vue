<template>
  <not-found :state="state"></not-found>
</template>

<script>
import notFound from '~/src/components/not-found'
export default {
  name: 'page-not-found',
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    notFound
  }
}
</script>

<style lang="scss" scoped></style>
