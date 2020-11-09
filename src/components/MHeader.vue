<template>
  <div class="header" v-bind:class="{ bgWhite: scrolled }">
    <register class="register" v-bind:class="{ opened: isRegisterOpened }"></register>
    <a href="#" class="logo-mobile">
      <svg width="138" height="60" viewBox="0 0 138 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
          <path d="M49.9998 24.4848C49.7553 12.0909 40.6964 1.9697 28.3071 0.242424C27.192 0.0757576 26.092 0 24.9921 0C23.8922 0 22.7923 0.0757576 21.6924 0.242424C9.31844 1.9697 0.244199 12.0909 -0.000225418 24.4848C-0.0766079 28.7576 1.03858 33 3.08563 36.7576C5.28545 40.803 8.52406 43.6212 11.7627 46.803C11.8085 46.8636 11.8391 46.9394 11.9002 46.9849C16.1623 51.2121 20.4245 55.4242 24.656 59.6667C24.8241 59.8333 24.9921 60.0152 24.9921 60.0152C24.9921 60.0152 25.1602 59.8485 25.3282 59.6667C29.5751 55.4242 33.8372 51.2121 38.0841 46.9849C38.1299 46.9394 38.1758 46.8636 38.2216 46.803C41.4602 43.6212 44.6988 40.803 46.8986 36.7576C48.9457 33 50.0762 28.7576 49.9998 24.4848Z" fill="#77C216"/>
          <path d="M3.31445 37.1816C5.49899 40.9998 8.63067 43.7422 11.7471 46.8028C11.7929 46.8635 11.8235 46.9392 11.8846 46.9847C16.1467 51.2119 20.4089 55.4241 24.6404 59.6665C24.8085 59.8332 24.9765 60.015 24.9765 60.015V15.6816L3.31445 37.1816Z" fill="#FFCA00"/>
          <path d="M46.6699 37.1816C44.4854 40.9998 41.3537 43.7422 38.2373 46.8028C38.1914 46.8635 38.1609 46.9392 38.0998 46.9847C33.8376 51.2119 29.5755 55.4241 25.3439 59.6665C25.1759 59.8332 25.0078 60.015 25.0078 60.015V15.6816L46.6699 37.1816Z" fill="#FFA200"/>
        </g>
        <path d="M78.8562 6.90909V15.3743H81.1218L85.4471 6.90909H91.6982L85.5604 16.7749L91.9453 28H85.8178L81.7706 20.0703H78.8562V28H73.9336V20.0703H71.1119L66.9308 28H60.8445L67.3942 16.8366L61.0298 6.90909H67.3118L71.8018 15.3743H73.9336V6.90909H78.8562ZM107.151 28L100.436 19.2464H99.4888V28H94.3912V6.90909H99.4888V15.0962H100.498L107.985 6.90909H114.627L105.173 17.228L113.567 28H107.151ZM121.725 6.90909L125.577 13.5721H125.742L129.634 6.90909H135.34L128.975 17.4545L135.546 28H129.696L125.742 21.2649H125.577L121.622 28H115.814L122.354 17.4545L115.979 6.90909H121.725Z" fill="#2F2F2F"/>
        <path d="M58.7244 54H59.0568C62.1165 54 63.1222 51.5028 63.3182 45.9205L63.6165 37.5341H71.3636V54H72.429V36.5455H62.5938L62.2699 45.6222C62.0909 50.9062 61.2898 52.9858 59.1506 52.9858H58.7244V54ZM81.5947 54L83.5891 48.4176H91.1743L93.1686 54H94.2936L87.9953 36.5455H86.768L80.4697 54H81.5947ZM83.9385 47.429L87.3391 37.9176H87.4243L90.8249 47.429H83.9385ZM102.349 36.5455V54H103.389L114.52 38.4801H114.622V54H115.687V36.5455H114.639L103.508 52.0824H103.406V36.5455H102.349ZM110.488 32.1818C110.488 33.0767 110.011 33.6733 109.023 33.6733C108.034 33.6733 107.565 33.0767 107.565 32.1818H106.577C106.577 33.5966 107.514 34.5256 109.023 34.5256C110.548 34.5256 111.477 33.5966 111.477 32.1818H110.488ZM135.504 54H136.783L130.092 44.5994L135.982 36.5455H134.703L128.831 44.5653H126.59V36.5455H125.524V54H126.59V45.5455H129.479L135.504 54Z" fill="#2F2F2F"/>
        <defs>
          <clipPath id="clip0">
            <rect width="50" height="60" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </a>
    <div class="menu-icon" @click="isMenuOpened = !isMenuOpened">
      <svg width="31" height="20" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="31" height="3" rx="1" fill="#2F2F2F"/>
        <rect y="9" width="31" height="3" rx="1" fill="#2F2F2F"/>
        <rect y="18" width="31" height="3" rx="1" fill="#2F2F2F"/>
      </svg>
    </div>
    <div class="container header-container" v-bind:class="{ show: isMenuOpened }">
      <a href="#" class="menu-close" @click="isMenuOpened = !isMenuOpened">
        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" fill="black">
          <path d="M1 1L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18 1L0.999999 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <div class="header-column">
        <a href="#" class="logo">
          <svg width="138" height="60" viewBox="0 0 138 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M49.9998 24.4848C49.7553 12.0909 40.6964 1.9697 28.3071 0.242424C27.192 0.0757576 26.092 0 24.9921 0C23.8922 0 22.7923 0.0757576 21.6924 0.242424C9.31844 1.9697 0.244199 12.0909 -0.000225418 24.4848C-0.0766079 28.7576 1.03858 33 3.08563 36.7576C5.28545 40.803 8.52406 43.6212 11.7627 46.803C11.8085 46.8636 11.8391 46.9394 11.9002 46.9849C16.1623 51.2121 20.4245 55.4242 24.656 59.6667C24.8241 59.8333 24.9921 60.0152 24.9921 60.0152C24.9921 60.0152 25.1602 59.8485 25.3282 59.6667C29.5751 55.4242 33.8372 51.2121 38.0841 46.9849C38.1299 46.9394 38.1758 46.8636 38.2216 46.803C41.4602 43.6212 44.6988 40.803 46.8986 36.7576C48.9457 33 50.0762 28.7576 49.9998 24.4848Z" fill="#77C216"/>
              <path d="M3.31445 37.1816C5.49899 40.9998 8.63067 43.7422 11.7471 46.8028C11.7929 46.8635 11.8235 46.9392 11.8846 46.9847C16.1467 51.2119 20.4089 55.4241 24.6404 59.6665C24.8085 59.8332 24.9765 60.015 24.9765 60.015V15.6816L3.31445 37.1816Z" fill="#FFCA00"/>
              <path d="M46.6699 37.1816C44.4854 40.9998 41.3537 43.7422 38.2373 46.8028C38.1914 46.8635 38.1609 46.9392 38.0998 46.9847C33.8376 51.2119 29.5755 55.4241 25.3439 59.6665C25.1759 59.8332 25.0078 60.015 25.0078 60.015V15.6816L46.6699 37.1816Z" fill="#FFA200"/>
            </g>
            <path d="M78.8562 6.90909V15.3743H81.1218L85.4471 6.90909H91.6982L85.5604 16.7749L91.9453 28H85.8178L81.7706 20.0703H78.8562V28H73.9336V20.0703H71.1119L66.9308 28H60.8445L67.3942 16.8366L61.0298 6.90909H67.3118L71.8018 15.3743H73.9336V6.90909H78.8562ZM107.151 28L100.436 19.2464H99.4888V28H94.3912V6.90909H99.4888V15.0962H100.498L107.985 6.90909H114.627L105.173 17.228L113.567 28H107.151ZM121.725 6.90909L125.577 13.5721H125.742L129.634 6.90909H135.34L128.975 17.4545L135.546 28H129.696L125.742 21.2649H125.577L121.622 28H115.814L122.354 17.4545L115.979 6.90909H121.725Z" fill="#2F2F2F"/>
            <path d="M58.7244 54H59.0568C62.1165 54 63.1222 51.5028 63.3182 45.9205L63.6165 37.5341H71.3636V54H72.429V36.5455H62.5938L62.2699 45.6222C62.0909 50.9062 61.2898 52.9858 59.1506 52.9858H58.7244V54ZM81.5947 54L83.5891 48.4176H91.1743L93.1686 54H94.2936L87.9953 36.5455H86.768L80.4697 54H81.5947ZM83.9385 47.429L87.3391 37.9176H87.4243L90.8249 47.429H83.9385ZM102.349 36.5455V54H103.389L114.52 38.4801H114.622V54H115.687V36.5455H114.639L103.508 52.0824H103.406V36.5455H102.349ZM110.488 32.1818C110.488 33.0767 110.011 33.6733 109.023 33.6733C108.034 33.6733 107.565 33.0767 107.565 32.1818H106.577C106.577 33.5966 107.514 34.5256 109.023 34.5256C110.548 34.5256 111.477 33.5966 111.477 32.1818H110.488ZM135.504 54H136.783L130.092 44.5994L135.982 36.5455H134.703L128.831 44.5653H126.59V36.5455H125.524V54H126.59V45.5455H129.479L135.504 54Z" fill="#2F2F2F"/>
            <defs>
              <clipPath id="clip0">
                <rect width="50" height="60" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </a>
        <div class="header-nav">
          <h2>Давайте вместе сделаем наш город красивее и функциональнее</h2>
          <nav>
            <ul>
              <li>
                <a href="#">
                  Карта дел
                  <span class="header-count-business">+29</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Благоустройство
                </a>
              </li>
              <li>
                <a href="#">
                  Новости
                </a>
              </li>
              <li>
                <a href="#">
                  Мероприятия
                </a>
              </li>
              <li>
                <a href="#">
                  Гранты
                </a>
              </li>
              <li>
                <a href="#">
                  Обучение
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="button-box">
        <a href="#" class="m-btn transparent">Войти</a>
        <a href="#" class="m-btn" @click="isRegisterOpened = !isRegisterOpened">Регистрация</a>
      </div>
    </div>
  </div>
</template>

<script>
  import Register from '~/components/Register.vue';

export default {
  components: {
    Register
  },

  data() {
    return {
      isMenuOpened: false,
      isRegisterOpened: false,
      scrolled: false
    }
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 450) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
      console.log(this.scrolled)
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>

  @import "../assets/scss/utils/vars";

  .logo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 34px;
    width: 140px;
    svg {
      width: 100%;
    }
    @media #{$mmedia-lg} {
      width: 100px;
      margin-right: 15px;
    }

    @media #{$mmedia-md} {
      display: none;
    }
  }

  .logo-mobile {
    display: none;

    @media #{$mmedia-md} {
      display: flex;
      width: 100px;
    }
  }

  .menu-icon {
    display: none;

    @media #{$mmedia-md} {
      display: flex;
    }
  }

  .menu-close {
    display: none;
    @media #{$mmedia-md} {
      display: flex;
      position: absolute;
      top: 45px;
      right: 30px;
    }
  }


  .header-column {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    background: rgba(255, 255, 255, 0.88);
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;

    @media #{$mmedia-md} {
      padding: 0 15px;
      justify-content: space-between;
      height: 70px;
    }

    &.bgWhite {
      background-color: white;
    }
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1400px;

    @media #{$mmedia-md} {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100000;
      width: 100%;
      height: 100vh;
      background-color: white;
      flex-direction: column;
      justify-content: center;
      display: flex;
      transform: translateX(100%);
      transition: all 0.5s ease;

      &.show {
        transform: translateX(0);
      }
    }

    .button-box {
      @media #{$mmedia-md} {
        margin-top: 20px;
      }
    }
  }

  .header-nav {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    h2 {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 13px;
      line-height: 1;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #FFFFFF;
      padding: 4px 8px;
      background: #A3A3A3;
      border-radius: 2px;

      @media #{$mmedia-lg} {
        display: none;
      }
    }
    nav {
      ul {
        display: flex;
        align-items: center;
        @media #{$mmedia-md} {
          flex-direction: column;
        }
        li {
          margin-right: 32px;
          position: relative;
          margin-top: 16px;
          @media #{$mmedia-lg} {
            margin-right: 26px;
          }
          @media #{$mmedia-md} {
            margin-right: 0;
            margin-bottom: 25px;
            margin-top: 0;
          }
          a {
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 1.4;
            display: flex;
            align-items: center;
            color: #2F2F2F;
            white-space: nowrap;
            @media #{$mmedia-lg} {
             font-size: 14px;
            }
            @media #{$mmedia-md} {
              font-size: 18px;
            }
            span {
              position: absolute;
              top: -3px;
              right: 0;
              transform: translate(100%, -30%);
              color: #6FB90F;
              font-size: 12px;
              line-height: 1;
              font-weight: bold;
            }
          }
        }
      }
    }
  }

  .register {
    transform: translateX(100%);
    position: fixed;
    top: 100px;
    left: 0;
    z-index: 10000;
    width: 100vw;
    height: auto;
    transition: all 0.5s ease;

    &.opened {
      transform: translateX(0);
    }
  }

</style>
