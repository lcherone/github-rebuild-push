<template>
  <div>
    <article>
      <section class="my-5">
        <div class="container text-center">
          <h1 class="text-black pt-4 my-3 font-weight-bold">Example Page</h1>
          <h3 class="text-muted pb-3 my-1 font-weight-bold">
            Nothing to see here!
          </h3>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: 'page-index',
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss"></style>
