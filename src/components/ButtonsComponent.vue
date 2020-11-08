<template>
  <div class="buttons">
    <a href="#" class="main-link">Работы <span>+4</span></a>
    <a href="#">Проблемы <span>+5</span></a>
    <a href="#">Инициативы <span>+3</span></a>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  }
};
</script>

<style lang="scss" scoped>
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 4px;
    width: max-content;

    a {
      padding: 15px;
      background-color: #F5F5F5;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 1.4;
      color: #2F2F2F;
      position: relative;
      border-left: 1px solid white;
      span {
        position: absolute;
        top: 8px;
        right: 8px;
        color: #6FB90F;
        font-size: 13px;
      }
      &.main-link {
        background-color: #77C216;
        color: white;
        border: none;
        span {
          color: white;
        }
      }
    }
  }
</style>
