<template>

<!--  Статус высвечивается в зависимости от добавленного класса-->

<!--  class warning - 'в работе'-->
  <!--  class stop - 'остановлено'-->
  <!--  class no-start - 'не начаты'-->
  <!--  class completed - 'завершены'-->


  <div class="case-item">
    <div class="img-box stop">
      <img src="../assets/img/case.jpg" alt="">
    </div>
    <div class="description-block">
      <div class="name-box">
        <div class="name">Содержание улично-дорожной сети (ямочный ремонт)</div>
        <a href="#" class="location">ул. Карла Маркса, д 44</a>
      </div>
      <div class="info-box">
        <div class="date">
          с 12 июня по 24 июня
        </div>
        <div class="icon-box">
          <a href="#" class="like">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3631 5.67338L8.5313 7.16133H10.236H14.55C14.7463 7.16133 14.8344 7.22735 14.8839 7.28309C14.949 7.35651 14.9997 7.47819 14.9997 7.62133C14.9997 7.76969 14.945 7.89522 14.876 7.96859L14.2314 8.65444L14.877 9.33936C14.9452 9.41172 15 9.53645 15 9.68531C15 9.81161 14.96 9.92401 14.9039 9.99928C14.8563 10.063 14.7884 10.1152 14.6679 10.136L13.4104 10.3531L13.9218 11.5223C13.951 11.5889 13.9679 11.6679 13.9679 11.749C13.9679 11.8966 13.9177 12.0098 13.8552 12.0807C13.8067 12.1357 13.7355 12.1808 13.629 12.1999L12.3817 12.4241L12.8898 13.5851C12.9191 13.6521 12.936 13.731 12.936 13.813C12.936 13.9561 12.8853 14.0778 12.8201 14.1512C12.7707 14.207 12.6827 14.273 12.4863 14.273H8.99851C7.48953 14.273 6.46976 13.9729 5.2594 13.5607V7.75115C6.01994 7.37849 6.63076 7.06204 7.3077 6.38511C7.84794 5.84486 8.20477 4.96016 8.43438 4.22024C8.6723 3.45353 8.835 2.63264 8.90109 2.00571C9.20039 2.04168 9.47958 2.22324 9.6694 2.7266L9.66955 2.727C9.97947 3.54776 9.85646 4.79084 9.3631 5.67338ZM13.8552 12.0807C13.8554 12.0806 13.8555 12.0804 13.8557 12.0802L14.6056 12.741L13.8552 12.0807ZM4.2594 7.22271V14.2748L4.56075 14.3782C5.95401 14.8585 7.1581 15.273 8.99851 15.273H12.4863C13.4018 15.273 13.8974 14.5934 13.9339 13.896C13.9353 13.8684 13.936 13.8407 13.936 13.813C13.936 13.5976 13.8924 13.3818 13.8059 13.1841C14.0359 13.1428 14.2451 13.0512 14.4212 12.9148C14.4877 12.8633 14.5496 12.8054 14.606 12.7414C14.8174 12.5011 14.9428 12.1893 14.9645 11.8541C14.9668 11.8193 14.9679 11.7843 14.9679 11.749C14.9679 11.5344 14.9243 11.3186 14.838 11.1214C15.084 11.079 15.2921 10.9822 15.4611 10.8488C15.8171 10.568 16 10.1249 16 9.68531C16 9.30927 15.866 8.93066 15.6047 8.65345C15.8655 8.37598 15.9997 7.99737 15.9997 7.62133C15.9997 6.89569 15.5015 6.16133 14.55 6.16133H11.3488H10.236C10.4065 5.85622 10.5438 5.51678 10.644 5.16133C10.9059 4.23246 10.9149 3.19428 10.6051 2.37374C10.2904 1.53927 9.68898 1.05234 8.91072 1.00281L8.89815 1.00178C8.39171 0.97072 7.9533 1.35009 7.91121 1.85576C7.80032 2.98105 7.30724 4.97135 6.60059 5.678C6.0056 6.27299 5.49635 6.52222 4.65212 6.93497L4.61842 6.95146C4.50554 7.00671 4.3836 7.06638 4.25529 7.1303C4.25786 7.16085 4.2594 7.19139 4.2594 7.22271ZM0.445342 6.77733H3.11714C3.36663 6.77733 3.56248 6.97318 3.56222 7.22268V14.3474C3.56222 14.5969 3.36663 14.7927 3.11714 14.7927H0.445342C0.195848 14.7927 0 14.5969 0 14.3474V7.22268C0 6.97318 0.195848 6.77733 0.445342 6.77733Z"/>
            </svg>
            <span>816</span>
          </a>
          <a href="#" class="stars">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.45406 0.924914C7.63036 0.358363 8.36964 0.358361 8.54594 0.924914L9.69682 4.62341C9.90233 5.28383 10.5007 5.7512 11.1976 5.7512H14.9219C15.1882 5.7512 15.3883 5.92046 15.4679 6.17611C15.5478 6.4331 15.4825 6.71064 15.2522 6.88537L12.2391 9.17116C11.6889 9.5886 11.4685 10.3168 11.673 10.9742L12.8239 14.6727C12.9175 14.9734 12.803 15.2343 12.6083 15.382C12.4168 15.5273 12.1702 15.5508 11.9477 15.382L8.93467 13.0962C8.37887 12.6745 7.62113 12.6745 7.06533 13.0962L4.05229 15.382C3.82981 15.5508 3.58325 15.5273 3.39175 15.382C3.19705 15.2343 3.08251 14.9734 3.17608 14.6727L4.32696 10.9742C4.53152 10.3168 4.31111 9.5886 3.76085 9.17116L0.747811 6.88537C0.517484 6.71064 0.452178 6.4331 0.532147 6.17611C0.611699 5.92046 0.811802 5.7512 1.07808 5.7512H4.80241C5.49932 5.7512 6.09767 5.28383 6.30318 4.6234L7.45406 0.924914Z"/>
            </svg>
          </a>
        </div>
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

  .case-item {
    display: flex;
    background: #FFFFFF;
    box-shadow: 0px 0px 16px rgba(52, 58, 64, 0.12);
    border-radius: 4px;
    overflow: hidden;
    height: 154px;
    margin-bottom: 16px;

    .img-box {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      width: 185px;
      height: 100%;
      position: relative;

      img {
        object-fit: cover;
        min-width: 100%;
        width: 100%;
        height: auto;
        min-height: 100%;
      }

      &:after {
        position: absolute;
        right: 5px;
        top: 5px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 8px;
        color: white;
      }

      &.warning:after {
        content: 'В работе';
        background: rgba(255, 156, 7, 0.6);
      }

      &.stop:after {
        content: 'Остановлены';
        background: rgba(233, 95, 95, 0.6);
      }

      &.no-start:after {
        content: 'Не начаты';
        background: rgba(115, 122, 130, 0.6);
      }

      &.completed:after {
        content: 'Завершены';
        background: rgba(91, 184, 70, 0.6);
      }
    }
  }

  .description-block {
    width: calc(100% - 185px);
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .name {
      font-family: 'Segoe UI', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 1.2;
      color: #2F2F2F;
      margin-bottom: 8px;
    }

    .location {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 1.4;
      color: #A3A3A3;
      position: relative;
      padding-left: 16px;
      &:before {
        content: url("../assets/img/Location.png");
        margin-right: 5px;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(3px);
      }
    }
  }

  .info-box {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .date {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 1.4;
      color: #2F2F2F;
    }

    .icon-box {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      a {
        padding: 8px;
        background: #F5F5F5;
        border-radius: 4px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 1;
        color: #A3A3A3;
        margin-left: 4px;
        transition: all 0.5s ease;

        span {
          margin-left: 4px;
        }

        &.stars svg {
          stroke: #A3A3A3;
        }

        &.like svg {
          fill: #A3A3A3;
        }

        &:hover, &.active {
          background: #A3A3A3;

          span {
            color: white;
          }

          &.stars svg {
            stroke: white;
            fill: white;
          }

          &.like svg {
            fill: white;
          }
        }
      }
    }
  }

</style>
