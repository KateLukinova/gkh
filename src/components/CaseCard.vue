<template>
  <div class="case-card-page">
    <MHeader></MHeader>
    <div class="page-header">
      <div class="text-block">
        <h1>Карта</h1>
        <buttons-component></buttons-component>
      </div>
      <select-view></select-view>
    </div>
  </div>
</template>

<script>

  import ButtonsComponent from '~/components/ButtonsComponent.vue';
  import MHeader from '~/components/MHeader.vue';
  import SelectView from '~/components/SelectView.vue';

  export default {
    components: {
      ButtonsComponent,
      SelectView,
      MHeader
    },

    data() {
      return {

      };
    }
  };
</script>

<style lang="scss" scoped>

</style>
