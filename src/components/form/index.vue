<template>
  <div>
    <!-- <ElementTest></ElementTest> -->
    
    <!-- TaoForm -->
    <TaoForm :model="userInfo" :rules="rules" ref="loginForm">
      <!-- 用户名 -->
      <TaoFormItem label="用户名" prop="username">
        <TaoInput v-model="userInfo.username" placeholder="请输入用户名"></TaoInput>
      </TaoFormItem>
      <!-- 密码 -->
      <TaoFormItem label="密码" prop="password">
        <TaoInput v-model="userInfo.password" placeholder="请输入密码"></TaoInput>
      </TaoFormItem>
      <!-- 提交按钮 -->
      <TaoFormItem>
        <button @click="login">登录</button>
      </TaoFormItem>
    </TaoForm>
    
    
    <!-- {{ userInfo.username }} -->
  </div>
</template>

<script>
  import ElementTest from '@/components/form/ElementTest.vue'
  import TaoInput from '@/components/form/TaoInput.vue'
  import TaoFormItem from '@/components/form/TaoFormItem.vue'
  import TaoForm from '@/components/form/TaoForm.vue'
  import Notice from "@/components/Notice";

  export default {
    components: {
      ElementTest,
      TaoInput,
      TaoFormItem,
      TaoForm,
    },
    data() {
      return {
        userInfo: {
          username: "tom",
          password: ""
        },
        rules: {
          username: [{ required: true, message: "请输入用户名称" }],
          password: [{ required: true, message: "请输入密码" }]
        }
      };
    },
    methods: {
      login() {
        this.$refs["loginForm"].validate(valid => {
          const notice = this.$create(Notice, {
            title: "Notice",
            message: valid ? "请求登录!" : "校验失败!",
            duration: 1000
          });
          notice.show();
          // if (valid) {
          //   // alert("submit");
          // } else {
          //   console.log("error submit!");
          //   return false;
          // }
        });
      }
    }
  }
</script>

<style scoped>

</style>