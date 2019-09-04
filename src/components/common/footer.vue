<template>
  <div>
    <div v-show="footerShow" class="tabBar">
      <Row class="tabs">
        <Col span="6" class="tabItem" @click.native="toPage(1)">
        <img v-if="footerSelected==1" src="../../assets/images/tabActive1.png">
        <img v-else src="../../assets/images/tab1.png">
        <p class="tabP" :class="footerSelected==1?'activeP':''">首页</p>
        </Col>
        <Col span="6" class="tabItem" @click.native="toPage(2)">
        <img v-if="footerSelected==2" src="../../assets/images/tabActive2.png">
        <img v-else src="../../assets/images/tab2.png">
        <p class="tabP" :class="footerSelected==2?'activeP':''">贷款</p>
        </Col>
        <Col span="6" class="tabItem" @click.native="toPage(3)">
        <img v-if="footerSelected==3" src="../../assets/images/tabActive3.png">
        <img v-else src="../../assets/images/tab3.png">
        <p class="tabP" :class="footerSelected==3?'activeP':''">商品</p>
        </Col>
        <Col span="6" class="tabItem" @click.native="toPage(4)">
        <img v-if="footerSelected==4" src="../../assets/images/tabActive4.png">
        <img v-else src="../../assets/images/tab4.png">
        <p class="tabP" :class="footerSelected==4?'activeP':''">我的</p>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-footer",
    data() {
      return {
        footerShow: false
      };
    },
    props: [],
    computed: {
      footerSelected: {
        get: function () {
          return this.$store.state.footerSelect;
        },
        set: function (val) {
          this.$store.state.footerSelect = val;
        }
      }
    },
    watch: {
      "$route.name"(newRouter) {
        Object.assign(this.$data, this.$options.data());
        switch (newRouter) {
          case "home":
            this.footerShow = true;
            break;
          case "goodsList":
            this.footerShow = true;
            break;
          case "personal":
            this.footerShow = true;
            break;
          case "loanOrderNeed":
            this.footerShow = true;
            break;
          case "EarlyRepayment":
            this.footerShow = true;
            break;
          case "order1":
            this.footerShow = true;
            break;
          case "OrderDetails":
            this.footerShow = true;
            break;
          case "lianxiren":
            this.footerShow = true;
            break;
          case "guardian":
            this.footerShow = true;
            break;
        }
      }
    },
    methods: {
      toPage(pageNum) {
        this.footerSelected = pageNum;
        switch (pageNum) {
          case 1:
            this.$router.push({
              path: "/home"
            });
            break;
          case 3:
            this.$router.push({
              path: "/goods/goodsList"
            });
            break;
          case 4:
            this.$router.push({
              path: "/mine"
            });
            break;
        }
      }
    }
  };
</script>

<style scoped>
  .tabBar {
    background-color: #ffffff;
    box-shadow: 0px 1px 5px 0px rgba(174, 185, 190, 0.7);
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 49px;
  }

  .tabs {
    margin-top: 2.5px;
  }

  .tabItem {
    text-align: center;
  }

  .tabItem img {
    height: 21px;
    width: 21px;
  }

  .tabP {
    font-size: 9px;
    letter-spacing: 0px;
    color: #999999;
  }

  .activeP {
    color: #2487ff;
  }
</style>
