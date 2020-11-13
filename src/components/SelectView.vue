<template>
  <div class="aselect" :data-value="value" :data-list="list">
    <div class="selector" @click="toggle()">
      <div class="label">
        <span>Вид: {{ value }}</span>
      </div>
      <div class="arrow" :class="{ expanded : visible }">
        <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5.5 5.5L10 1" stroke="#2F2F2F" stroke-width="2"/>
        </svg>
      </div>
      <div :class="{ hidden : !visible, visible }">
        <ul>
          <li :class="{ current : item === value }" v-for="item in list" @click="select(item)">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        value: 'Список и карта',
        list: ["Список и карта","Списком","На карте"],
        visible: false
      }
    },
    methods: {
      toggle() {
        this.visible = !this.visible;
      },
      select(option) {
        this.value = option;
        this.$emit("selected-view", this.value);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .aselect {
    width: max-content;

    .selector {
      width: max-content;
      box-sizing: border-box;
      background: #FFFFFF;
      box-shadow: 0 0 12px rgba(52, 58, 64, 0.2);
      border-radius: 4px;
      position: relative;
      z-index: 1;
      padding-right: 25px;
      .arrow {
        position: absolute;
        right: 10px;
        top: 30%;
        transform: rotateZ(0deg) translateY(0px);
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(.59,1.39,.37,1.01);
      }
      .expanded {
        transform: rotateZ(180deg) translateY(2px);
      }
      .label {
        display: block;
        padding: 12px;font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 1.4;
        color: #2F2F2F;
      }
    }
    ul {
      width: 100%;
      list-style-type: none;
      padding: 0;
      margin: 0;
      font-size: 16px;
      border: 1px solid gainsboro;
      position: absolute;
      z-index: 1;
      background: #FFFFFF;
      box-shadow: 0px 0px 16px rgba(52, 58, 64, 0.12);
      border-radius: 4px;
    }
    li {
      padding: 12px;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 1.4;
      color: #2F2F2F;
      &:hover {
        color: white;
        background: #DCDFE6;
      }
    }
    .current {
      background: #eaeaea;
    }
    .hidden {
      visibility: hidden;
    }
    .visible {
      visibility: visible;
    }
  }
</style>
