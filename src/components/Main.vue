<template>
  <div>
    <MHeader></MHeader>
    <MapMain></MapMain>
    <MainTabs></MainTabs>
    <Quiz></Quiz>
    <MFooter></MFooter>
  </div>
</template>

<script>
  import MHeader from '~/components/MHeader.vue';
  import MFooter from '~/components/MFooter.vue';
  import MapMain from '~/components/MapMain.vue';
  import MainTabs from '~/components/MainTabs.vue';
  import Quiz from '~/components/Quiz.vue';

  export default {

    components: {
      MHeader,
      MFooter,
      MapMain,
      MainTabs,
      Quiz
    },

    data() {
      return {

      };
    },

    methods: {

    },
    mounted() {

    }

  };
</script>

<style lang="scss" scoped>

  section {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
  }

  .main-page {
    background-image: url("../assets/img/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    min-height: 100vh;
    height: auto;
    overflow: hidden;
    .center-block {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 100%;
      z-index: 1;
    }
  }

  .container {
    width: 90%;
    max-width: 1620px;
  }

  .parallax-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.1s linear;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .earth {
      width: 27%;
      min-width: 490px;
      img {
        width: 100%;
      }
    }

    .orbits {
      width: 55%;
      min-width: 950px;
      svg {
        width: 100%;
      }
    }
  }

  .block-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 140px;
  }

  .block-column {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;

    .block-column-left, .block-column-right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      height: 520px;
      margin-top: 75px;
    }

    .block-column-right {
      align-items: flex-end;
      margin-top: 0;

      .info-item {
        margin-bottom: 62px;
      }
    }
  }

  .info-item {
    display: flex;
    flex-direction: column;
    min-width: 180px;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 35px;
      line-height: 1.2;
      color: #EF5845;
      font-weight: 900;
    }

    &.big {
      h3 {
        font-size: 60px;
        margin-top: -30px;
      }
      span {
        font-size: 130px;
        font-family: 'Bebas Neue', sans-serif;
      }
    }
  }

  @media (max-width: 1024px) {
    .parallax-wrap .orbits {
      min-width: 700px;
    }

    .parallax-wrap .earth {
      min-width: 380px;
    }

    h1 {
      font-size: 100px;
    }

    .block-column {
      .block-column-left {
        margin-top: 40px;
      }
      .block-column-right {
        .info-item {
          margin-bottom: 40px;
        }
      }
    }

    .header {
      margin-top: 0;
    }

    .block-center {
      padding-top: 90px;
    }

    h3 {
      font-size: 30px;
    }
  }


  @media (max-width: 990px) {
    h2 {
      font-size: 40px;
    }

    .parallax-wrap {
      left: auto;
      right: 0;
    }

    h1 {
      transform: translate(-40%,-50%) rotate(90deg);
      font-size: 100px;
    }

    .block-column {
      flex-direction: column;
      align-items: flex-start;
      width: max-content;
      align-self: flex-end;
      .block-column-left, .block-column-right {
        height: auto;
        align-items: flex-start;
        margin-top: 35px;
        .info-item {
          margin-bottom: 20px;
          &.none {
            display: none;
          }
        }
      }
    }
  }

  @media (max-width: 640px) {
    .block-column {
      align-items: flex-end;
      .block-column-left, .block-column-right {
        height: auto;
        align-items: flex-end;
        margin-top: 20px;
        .info-item {
          align-items: flex-end;
          margin-bottom: 8px;
          max-width: 180px;
          h3 {
            text-align: right;
            font-size: 22px;
          }
          span {
            font-size: 20px;
          }
          &.big {
            position: absolute;
            bottom: 13vh;
            span {
              font-size: 50px;
            }
            h3 {
              font-size: 24px;
              margin-top: -15px;
            }
          }
        }
      }
    }

    h3 {
      font-size: 24px;
    }
  }

  @media (max-width: 460px) {
    .parallax-wrap .orbits {
      min-width: 670px;
    }

    .parallax-wrap .earth {
      min-width: 300px;
    }

    h1 {
      font-size: 46px;
    }

    .block-center {
      padding-top: 100px;
    }

    h2 {
      font-size: 28px;
    }
  }

</style>
