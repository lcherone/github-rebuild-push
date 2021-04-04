<template>
  <div>
    <article>
      <section class="my-5">
        <div class="container text-center">
          <h1 class="text-black pt-4 my-3 font-weight-bold">Error!</h1>
          <h3 class="text-muted pb-3 my-1 font-weight-bold">
            404 Page not found!
          </h3>
          <p>
            The page you are looking for was not found, it may have been
            renamed, moved or removed.
            <br />Check the link/url and try again.
          </p>
          <div class="mt-4">
            <router-link class="btn btn-link" to="/">
              Go back to homepage
            </router-link>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped></style>
