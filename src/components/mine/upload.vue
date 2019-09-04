<template>
  <div class="uploadPart">
    <div class="uploadTop">
      <!-- <img class="uploadImg" src="../../assets/images/tackphotosx2.png"> -->
      <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/"
        class="uploadComponent"
        :show-upload-list="true"
        :format="['jpg','jpeg','png']"
        :on-success="handleSuccess"
      >
        <div style="padding: 20px 0">
          <img class="uploadImg" :src="require('@img/tackphotosx2.png')">
        </div>
      </Upload>
    </div>
    <div class="uploadBottom">
      <p>{{bottomTitle}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bottomTitle: "请拍摄身份证正面"
    };
  },
  methods: {
    handleSuccess(res, file) {
      file.url =
        "https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar";
      file.name = "7eb99afb9d5f317c912f08b5212fd69a";
      console.log(file);
    }
  }
};
</script>

<style scoped>
.uploadPart {
  width: 240.5px;
  height: 159px;
  background-color: rgb(237, 237, 237, 0.4);
  border-radius: 5px;
  z-index: -1;
}
.uploadTop {
  height: 125px;
}
.uploadBottom {
  height: 35px;
  background-color: #2487ff;
  border-radius: 0px 0px 5px 5px;
}
.uploadImg {
  width: 164px;
  height: 96px;
}
.uploadBottom p {
  font-size: 14.1px;
  line-height: 16px;
  letter-spacing: 0px;
  color: #ffffff;
}
.uploadTop,
.uploadBottom {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
