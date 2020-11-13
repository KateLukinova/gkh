<template>
  <div class="case-card-page">
    <MHeader></MHeader>
    <div class="page-header">
      <div class="text-block">
        <h1>Карта</h1>
        <buttons-component></buttons-component>
      </div>
      <select-view @selected-view="switchView"></select-view>
    </div>
    <div class="page-body" v-bind:class="{ 'card-view': changeClass('card-view'), 'list-view': changeClass('list-view') }">
      <div class="list-container">
        <case-item></case-item>
        <case-item></case-item>
        <case-item></case-item>
        <case-item></case-item>
        <case-item></case-item>
        <case-item></case-item>
        <case-item></case-item>
        <case-item></case-item>
      </div>
      <div class="map-container">
        <MapMain></MapMain>
      </div>
    </div>
    <MFooter></MFooter>
  </div>
</template>

<script>

  import ButtonsComponent from '~/components/ButtonsComponent.vue';
  import MHeader from '~/components/MHeader.vue';
  import SelectView from '~/components/SelectView.vue';
  import MapMain from '~/components/MapMain.vue';
  import MFooter from '~/components/MFooter.vue';
  import CaseItem from '~/components/CaseItem.vue';

  export default {
    components: {
      ButtonsComponent,
      SelectView,
      MHeader,
      MapMain,
      CaseItem,
      MFooter
    },

    data() {
      return {
        selectedView: ''
      };
    },

    methods: {
      changeClass (className) {
        console.log('dddd')
        return this.selectedView == className
      },
      switchView (view) {

        this.selectedView = view;
      }
    }
  };
</script>

<style lang="scss" scoped>

  .map-container {
    width: 100%;
  }

  .page-body {
    display: flex;
    padding-bottom: 200px;

    &.card-view {
      padding-bottom: 0;
      .list-container {
        display: none;
      }

      .map-container {
        min-height: 100vh;
        height: 100vh;

        .map-main-wrapper {
          height: 100%;
        }
      }
    }
    &.list-view {
      .map-container {
        display: none;
      }

      .list-container {
        width: 90%;
        max-width: 1400px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 40px;
        grid-row-gap: 40px;
        margin: auto;
        padding-left: 0;
        min-width: auto;
        padding-right: 0;
      }
    }
  }

  .list-container {
    background-color: white;
    padding-left: calc(14vw);
    padding-top: 220px;
    min-width: calc(600px + 14vw);
    width: calc(600px + 14vw);
    padding-right: 40px;
    box-sizing: border-box;
  }

</style>
