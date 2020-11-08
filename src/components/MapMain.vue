<template>
  <div class="map-main-wrapper">
    <div class="map-content">
      <div class="map-column-left">
        <img src="../assets/img/city.png" alt="">
        <div class="map-button-box">
          <a href="#" class="map-button">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="check-icon">
              <rect width="18" height="18" rx="2" fill="white"/>
              <path d="M3 8.5L6.66667 12L14 5" stroke="#528DFF" stroke-opacity="0.88" stroke-width="2"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.63281 3.25568L7.01768 0H8.98259L9.3883 0.955286L5.63281 3.25568ZM5.23739 4.1875L9.62116 1.50195L10.5488 3.68484L3.65625 7.90749L5.23739 4.1875ZM10.7815 4.22852L3.26069 8.83755L2.04688 11.6906H3.09403L11.7103 6.41141L10.7815 4.22852ZM4.21484 11.6905L11.9396 6.95703L12.8683 9.13992L8.70497 11.6905H4.21484ZM13.102 9.68652L9.83008 11.6914H13.954L13.102 9.68652ZM15.5789 12H0.421053C0.187789 12 0 12.2231 0 12.5V13.5C0 13.777 0.187789 14 0.421053 14H15.5789C15.8122 14 16 13.777 16 13.5V12.5C16 12.223 15.8122 12 15.5789 12Z" fill="white"/>
            </svg>
            <span>Работы в городе</span>
            <span class="count">32</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.19944 8L5 13L6.79915 13L11 8L6.79915 3.00167L5 3L9.19944 8Z" fill="white"/>
            </svg>
          </a>
          <a href="#" class="map-button yellow">
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="check-icon">
              <rect y="0.5" width="18" height="18" rx="2" fill="white"/>
              <path d="M3 9L6.66667 12.5L14 5.5" stroke="#FFCA00" stroke-width="2"/>
            </svg>
            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.92308 0.5C2.4215 0.5 5.3199e-07 2.44081 0 5.18589C-5.3199e-07 8.74769 2.66668 9.4936 2.66668 11.9872L7.1795 11.9872C7.17951 9.49361 9.84616 8.7477 9.84616 5.18589C9.84617 2.44082 7.42467 0.5 4.92308 0.5ZM4.46795 1.55128C4.73531 1.53863 4.96208 1.67447 4.95512 1.94231C4.96189 2.15712 4.7725 2.35867 4.55771 2.36539C3.02741 2.54387 1.84616 3.84083 1.84616 5.42308C1.84616 5.7382 1.89297 6.0408 1.98076 6.32692C2.06624 6.53752 1.93543 6.80583 1.71795 6.8718C1.50047 6.93774 1.24462 6.78668 1.19873 6.56411C1.08745 6.20198 1.02564 5.82148 1.02565 5.42308C1.02564 3.42977 2.53123 1.77719 4.46795 1.55128ZM2.66669 12.8077L2.66668 13.6282L7.1795 13.6282L7.17949 12.8077L2.66669 12.8077ZM2.66668 14.4487C2.66668 14.9201 3.05427 15.2692 3.48719 15.2693L6.35898 15.2692C6.79191 15.2693 7.17951 14.9202 7.17949 14.4487L2.66668 14.4487ZM4.10258 15.6795C4.10257 16.1341 4.46853 16.5 4.92308 16.5C5.37766 16.5 5.74361 16.1341 5.74361 15.6795L4.10258 15.6795Z" fill="white"/>
            </svg>
            <span>Инициативы</span>
            <span class="count">32</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.19944 8L5 13L6.79915 13L11 8L6.79915 3.00167L5 3L9.19944 8Z" fill="white"/>
            </svg>
          </a>
          <a href="#" class="map-button red">
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="check-icon">
              <rect y="0.5" width="18" height="18" rx="2" fill="white"/>
              <path d="M3 9L6.66667 12.5L14 5.5" stroke="#F95F5E" stroke-opacity="0.88" stroke-width="2"/>
            </svg>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.4251 14.9998H2.57528C1.48283 14.9998 0.659006 14.6143 0.254916 13.9148C-0.149174 13.2147 -0.0707739 12.3084 0.475361 11.3626L5.90026 1.96685C6.44604 1.02089 7.192 0.5 8 0.5C8.808 0.5 9.55396 1.02089 10.0997 1.96685L15.5246 11.3626C16.0708 12.3084 16.1492 13.2147 15.7451 13.9148C15.3412 14.6143 14.5173 14.9998 13.4251 14.9998ZM9.1072 11.6929C9.1072 11.129 8.64996 10.6718 8.08605 10.6718C7.52213 10.6718 7.06489 11.129 7.06489 11.6929C7.06489 12.2568 7.52213 12.7141 8.08605 12.7141C8.64996 12.7141 9.1072 12.2568 9.1072 11.6929ZM9.13476 5.54766C9.13476 4.96863 8.66525 4.49912 8.08622 4.49912C7.5072 4.49912 7.03769 4.96863 7.03769 5.54766L7.28533 9.26891H7.28871C7.32462 9.67993 7.66578 10.0035 8.08622 10.0035C8.47502 10.0035 8.79947 9.72775 8.87449 9.36118C8.88054 9.33149 8.88107 9.29984 8.88374 9.26909H8.89085L9.13476 5.54766Z" fill="white" fill-opacity="0.88"/>
            </svg>
            <span>Проблемы</span>
            <span class="count">32</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.19944 8L5 13L6.79915 13L11 8L6.79915 3.00167L5 3L9.19944 8Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="map-column-right">
        <a href="#" class="map-plus">
          Преобразить<br>
          ваш город
          <span class="plus">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 36C6 19.4315 19.4315 6 36 6V6C52.5685 6 66 19.4315 66 36V36C66 52.5685 52.5685 66 36 66V66C19.4315 66 6 52.5685 6 36V36Z" fill="#77C216"/>
                <circle opacity="0.2" cx="36" cy="36" r="36" fill="#77C216"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M37 24H35V35H24V37H35V48H37V37H48V35H37V24Z" fill="white"/>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>

  @import "../assets/scss/utils/vars";

  .map-main-wrapper {
    width: 100%;
    height: 640px;
    background-image: url("../assets/img/map.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .map-content {
    padding: 60px;
    padding-top: 160px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    @media #{$mmedia-sm} {
      padding: 15px;
      padding-top: 120px;
      flex-direction: column;
    }
  }

  .map-column-left {
    width: max-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    @media #{$mmedia-sm} {
      justify-content: flex-start;
    }
  }

  .map-button-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    .map-button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 13px;
      background: rgba(82, 141, 255, 0.88);
      border-radius: 4px;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 1.4;
      color: #FFFFFF;
      margin-top: 8px;

      @media #{$mmedia-sm} {
        font-size: 12px;
        padding: 5px;
      }

      svg {
        margin-right: 8px;
        &.check-icon {
          margin-right: 16px;
        }
      }

      &.yellow {
        background-color: #FFCA00;

        .count {
          color: #FFCA00;
        }
      }
      &.red {
        background-color: #F95F5E;
        .count {
          color: #F95F5E;
        }
      }
    }
  }

  .count {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border-radius: 4px;
    padding: 2px 4px;
    color: rgba(82, 141, 255, 0.88);
    margin-left: 20px;
    margin-right: 12px;
  }

  .map-column-right {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;

    .map-plus {
      width: 146px;
      padding: 8px;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.88);
      border-radius: 8px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 1.2;
      color: #77C216;
      height: auto;
      position: relative;

      @media #{$mmedia-sm} {
        margin-right: 28px;
      }

      .plus {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(50%, -50%);
      }
    }
  }
</style>
