<template>
  <section class="quiz-section">
    <div class="quiz-container">
      <div class="question-block">
        <h2>Начните менять город прямо сейчас</h2>
        <div class="quiz-form">
          <form action="#" method="post">

            <div v-show="step === 1" class="question-wrap">

              <div class="form-progress">
                Шаг 1 из 5
                <span class="progress-line step-one"></span>
              </div>

              <div class="form-question">
                <div class="form-caption">Вы проживаете в городе Уфа?</div>
                <div class="radio-button-box">

                  <label for="yes1" @click.prevent="next()">Да</label>
                  <input type="radio" name="question1" id="yes1">

                  <label for="no1" @click.prevent="next()">Нет</label>
                  <input type="radio" name="question1" id="no1">

                </div>
              </div>
            </div>

            <div v-show="step === 2" class="question-wrap">

              <div class="form-progress">
                Шаг 2 из 5
                <span class="progress-line step-two"></span>
              </div>

              <div class="form-question">
                <div class="form-caption">Вы проживаете в городе Уфа?</div>
                <div class="radio-button-box">

                  <label for="yes2" @click.prevent="next()">Да</label>
                  <input type="radio" name="question2" id="yes2">

                  <label for="no2" @click.prevent="next()">Нет</label>
                  <input type="radio" name="question2" id="no2">

                </div>
              </div>

            </div>

            <div v-show="step === 3" class="question-wrap">

              <div class="form-progress">
                Шаг 3 из 5
                <span class="progress-line step-three"></span>
              </div>

              <div class="form-question">
                <div class="form-caption">Вы проживаете в городе Уфа?</div>
                <div class="radio-button-box">

                  <label for="yes3" @click.prevent="next()">Да</label>
                  <input type="radio" name="question3" id="yes3">

                  <label for="no3" @click.prevent="next()">Нет</label>
                  <input type="radio" name="question3" id="no3">

                </div>
              </div>

            </div>

            <div v-show="step === 4" class="question-wrap">

              <div class="form-progress">
                Шаг 4 из 5
                <span class="progress-line step-four"></span>
              </div>

              <div class="form-question">
                <div class="form-caption">Вы проживаете в городе Уфа?</div>
                <div class="radio-button-box">

                  <label for="yes4" @click.prevent="next()">Да</label>
                  <input type="radio" name="question4" id="yes4">

                  <label for="no4" @click.prevent="next()">Нет</label>
                  <input type="radio" name="question4" id="no4">

                </div>
              </div>

            </div>

            <div v-show="step === 5" class="question-wrap">

              <div class="form-progress">
                Шаг 5 из 5
                <span class="progress-line step-five"></span>
              </div>

              <div class="form-question">
                <div class="form-caption">Вы проживаете в городе Уфа?</div>
                <div class="radio-button-box">

                  <label for="yes5">Да</label>
                  <input type="radio" name="question5" id="yes5">

                  <label for="no5">Нет</label>
                  <input type="radio" name="question5" id="no5">

                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
      <div class="city-box">
        <img src="../assets/img/ufa.jpg" alt="">
        <div class="city-name">Уфа</div>
        <div class="city-placeholder">
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.440816 9.70152C0.195918 9.70152 0 9.5056 0 9.2607V8.73825C0 8.28111 0.212245 7.84029 0.571429 7.56274C1.63265 6.74641 2.7102 6.19131 2.93878 6.09335C2.97143 6.07703 2.98775 6.04437 2.98775 6.02805V5.37499C2.82449 5.08111 2.72653 4.7709 2.67755 4.47703C2.57959 4.47703 2.44898 4.33009 2.30204 3.82397C2.10612 3.13825 2.31837 3.04029 2.48163 3.05662C2.35102 2.69743 2.35102 2.33825 2.43265 2.01172C2.53061 1.61988 2.72653 1.32601 2.97143 1.08111C3.11837 0.917843 3.28163 0.78723 3.46122 0.672945C3.60816 0.574986 3.77143 0.493353 3.93469 0.428047C4.06531 0.379067 4.21224 0.346414 4.37551 0.346414C4.84898 0.297435 5.20816 0.428047 5.46939 0.574986C5.86122 0.78723 6.00816 1.06478 6.00816 1.06478C6.00816 1.06478 6.97143 1.13009 6.54694 3.15458C6.67755 3.20356 6.77551 3.38315 6.61224 3.9056C6.43265 4.55866 6.25306 4.59131 6.1551 4.52601C6.12245 4.75458 6.04082 4.99948 5.92653 5.22805C5.92653 5.55458 5.92653 5.86478 5.92653 5.97907C5.92653 6.01172 5.94286 6.04437 5.97551 6.04437C6.10612 6.10968 6.56327 6.33825 7.13469 6.68111C7.10204 6.69743 7.08571 6.71376 7.05306 6.74641C6.46531 7.20356 6.10612 7.93825 6.10612 8.7056V9.2607C6.10612 9.40764 6.13878 9.55458 6.17143 9.70152H0.440816ZM15.4286 7.56274C14.3673 6.74641 13.2898 6.19131 13.0612 6.09335C13.0286 6.07703 13.0122 6.0607 13.0122 6.02805C13.0122 5.91376 13.0122 5.60356 13.0122 5.27703C13.1265 5.04845 13.1918 4.78723 13.2408 4.57499C13.3388 4.64029 13.5184 4.60764 13.698 3.95458C13.8449 3.4158 13.7633 3.23621 13.6327 3.20356C14.0571 1.17907 13.0939 1.11376 13.0939 1.11376C13.0939 1.11376 12.9469 0.83621 12.5551 0.623965C12.2939 0.477027 11.9347 0.346414 11.4612 0.395394C11.3143 0.395394 11.1673 0.428047 11.0204 0.477027C10.8408 0.542333 10.6939 0.623965 10.5469 0.721925C10.3673 0.83621 10.2041 0.966822 10.0571 1.13009C9.82857 1.37499 9.61633 1.66886 9.51837 2.0607C9.43673 2.38723 9.43673 2.74641 9.56735 3.1056C9.38775 3.08927 9.19184 3.18723 9.38775 3.87294C9.53469 4.37907 9.66531 4.50968 9.76326 4.52601C9.81224 4.80356 9.89388 5.13009 10.0735 5.42396V6.07703C10.0735 6.10968 10.0571 6.14233 10.0245 6.14233C9.79592 6.25662 8.71837 6.79539 7.65714 7.61172C7.29796 7.88927 7.08571 8.33009 7.08571 8.78723V9.2607C7.08571 9.5056 7.28163 9.70152 7.52653 9.70152H15.5592C15.8041 9.70152 16 9.5056 16 9.2607V8.73825C16 8.28111 15.7878 7.84029 15.4286 7.56274Z" fill="#2F2F2F"/>
          </svg>
          Инициаторов в городе:
          <span>4 321</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


  export default {
    components: {

    },
    data() {
      return {
        step:1
      }
    },
    methods:{
      next() {
        this.step++;
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import "../assets/scss/utils/vars";

  .quiz-section {
    width: 100%;
    background: linear-gradient(90deg, #F5F5F5 0%, #FFFFFF 100%);
    padding: 120px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media #{$mmedia-md} {
      padding: 40px 0;
    }
  }

  .quiz-container {
    width: 90%;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media #{$mmedia-md} {
      flex-direction: column;
    }
  }

  .question-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h2 {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 1.2;
      color: #2F2F2F;
      margin-bottom: 60px;
      margin-right: 30px;

      @media #{$mmedia-md} {
        font-size: 28px;
        margin-bottom: 30px;
      }
    }
  }

  .form-progress {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 1.4;
    color: #77C216;
    text-transform: lowercase;
  }

  .progress-line {
    width: 100px;
    height: 8px;
    margin-top: 20px;
    margin-bottom: 40px;
    background: rgba(143, 121, 218, 0.1);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: #77C216;
      border-radius: 4px;
      z-index: 5;
    }
    &.step-one:after {
      width: 20%;
    }
    &.step-two:after {
      width: 40%;
    }
    &.step-three:after {
      width: 60%;
    }
    &.step-four:after {
      width: 80%;
    }
    &.step-five:after {
      width: 100%;
    }
  }

  .form-caption {
    font-family: 'Segoe UI', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 1.2;
    color: #2F2F2F;
  }

  .radio-button-box {
    height: 46px;
    margin-top: 32px;
    input {
      visibility: hidden;
    }

    label {
      padding: 13px 32px;
      background: #77C216;
      border-radius: 24px;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 1.4;
      color: #FFFFFF;
      cursor: pointer;
    }
  }

  .city-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    width: 50%;
    max-width: 440px;
    height: 304px;

    @media #{$mmedia-md} {
      margin-top: 35px;
      width: 100%;
      max-width: none;
    }

    img {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;
    }

    .city-name {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 1.2;
      color: #2F2F2F;
      padding: 16px;
      background: rgba(255, 255, 255, 0.88);
      border-radius: 4px;
      z-index: 1;
      text-transform: uppercase;
      margin-bottom: 32px;
    }

    .city-placeholder {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 1;
      color: #2F2F2F;
      padding: 11px 16px;
      background: rgba(255, 255, 255, 0.88);
      border-radius: 4px;
      z-index: 1;

      svg {
        margin-right: 10px;
      }
    }

  }
</style>
