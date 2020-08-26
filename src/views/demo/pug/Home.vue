<template lang="pug">
  div
    b-jumbotron
      template(v-slot:header) BootstrapVue
      template(v-slot:lead) This is a simple hero unit, a simple jumbotron-style component for
      | calling extra attention to featured content or information.
      hr.my-4
      p It uses utility classes for typography and spacing to space content out
        | within the larger container.
      b-button(variant="primary" href="#") Do Something
      b-button(variant="success" href="#").ml-2 Do Something Else
    router-view
</template>
<script>
export default {
  name: "HomeDemoPug",
};
</script>
