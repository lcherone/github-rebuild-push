<template>
  <article>
    <div class="d-flex justify-content-center loading-wrap" v-if="state.loading">
      <div class="spinner-border loading-icon" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <transition name="fade">
      <div v-show="!state.loading">
        <router-view :state="state"></router-view>
      </div>
    </transition>
  </article>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      state: {
        loading: true
      }
    }
  },
  mounted(){
    setTimeout(() => this.state.loading = false, 1000)
  }
}
</script>

<style lang="scss">
@import './assets/css/style.scss';
</style>
