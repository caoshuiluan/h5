<template>
  <div>
    <div class="out-side-box">
      <div class="step-line-area">
        <div class="step-line"></div>
        <div class="step-line"></div>
        <div class="step-line"></div>
        <div class="step-line"></div>
      </div>
      <div class="steps steps-one">
        <div class="" v-show="stepNow>=1">
          <div class="circle-bar">
            <div class="outer-ring">
              <div class="inner-ring">
                <div class="point"></div>
              </div>
            </div>
          </div>
          <div>{{stepNameArr[0]}}</div>
        </div>
      </div>
      <div class="steps steps-two">
        <div class="">
          <div class="circle-bar">
            <div class="outer-ring" v-show="stepNow>=2">
              <div class="inner-ring">
                <div class="point"></div>
              </div>
            </div>
            <!--内点-->
            <div class="default-point pos-mid" v-show="stepNow<2">
              <div class="default-point-inner pos-mid"></div>
            </div>
          </div>
          <div>{{stepNameArr[1]}}</div>
        </div>
      </div>
      <div class="steps steps-three">
        <div class="">
          <div class="circle-bar">
            <div class="outer-ring" v-show="stepNow>=3">
              <div class="inner-ring">
                <div class="point"></div>
              </div>
            </div>
            <!--内点-->
            <div class="default-point pos-mid" v-show="stepNow<3">
              <div class="default-point-inner pos-mid"></div>
            </div>
          </div>
          <div>{{stepNameArr[2]}}</div>
        </div>

      </div>
      <div class="steps steps-four">
        <div class="">
          <div class="circle-bar">
            <div class="outer-ring" v-show="stepNow>=4">
              <div class="inner-ring">
                <div class="point"></div>
              </div>
            </div>
            <!--内点-->
            <div class="default-point pos-mid" v-show="stepNow<4">
              <div class="default-point-inner pos-mid"></div>
            </div>
          </div>
          <div>{{stepNameArr[3]}}</div>
        </div>

      </div>
      <div class="steps steps-five">
        <div class="">
          <div class="circle-bar">
            <div class="outer-ring" v-show="stepNow>=5">
              <div class="inner-ring">
                <div class="point"></div>
              </div>
            </div>
            <!--内点-->
            <div class="default-point pos-mid" v-show="stepNow<5">
              <div class="default-point-inner pos-mid"></div>
            </div>
          </div>
          <div>{{stepNameArr[4]}}</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'appltSteps',
    data() {
      return {
      };
    },
    props: ["stepNow","stepNameArr"],
    created() {
    },
    methods: {

    }
  };
</script>

<style scope>
  .out-side-box{
    position: relative;
    height: 100px;
    background-color: #2487ff;
    display: flex;
  }
  .step-line-area{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 40px;
    width: 295px;
    display: flex;
  }
  .step-line{
    flex:1;
    height: 2px;
    background-color: #ffffff;
    border-radius: 1px;
    opacity: 0.5;
  }
  .steps{
    position: relative;
    color: #fff;
    flex:1;
    text-align: center;
  }
  .circle-bar{
    width: 22px;
    height: 22px;
    margin: 39px auto 10px;
  }
  .outer-ring{
    position: absolute;
    width: 22px;
    height: 22px;
    background-color: rgba(255,255,255,.5);
    border-radius: 50%;
  }
  .inner-ring{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #ffffff;
    border-radius: 50%;
  }
  .point{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    background-color: #2487ff;
    border-radius: 50%;
  }

  .default-point{
    width: 14px;
    height: 14px;
    background-color: #2487ff;
    margin:0 auto;
    border-radius: 50%;
  }
  .default-point-inner{
    width: 6px;
    height: 6px;
    background-color: #ffffff;
    margin:0 auto;
    border-radius: 50%;
  }

  .pos-mid {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
