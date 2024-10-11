<template>
  <div class="flex items-center">
    <div class="w-[496px] h-[100vh]">
      <Carousel autoplay="">
        <img src="../images/app9KTBmXHMK2mtI9RHyzPDs-h0NXne1.png" alt="" />
        <img src="../images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png" alt="" />
        <img src="../images/appzx4bpYR9rpFdZULrF9EFycs2l-416.png" alt="" />
      </Carousel>
    </div>
    <div class="flex-1 h-[100vh] flex flex-col justify-center items-center">
      <div class="w-[500px] flex flex-col justify-center items-center">
        <h1 class="text-[35px] mb-[60px]">登录，即刻创造您的应用</h1>
        <Space class="w-full" direction="vertical" size="large">
          <Input
            class="h-[60px]"
            size="large"
            v-model:value="userLoginInfo.username"
            placeholder="请输入邮箱"
          />
          <Input.Password
            class="h-[60px]"
            size="large"
            v-model:value.lazy="userLoginInfo.password"
            autofocus
            placeholder="请输入密码"
          />
        </Space>
        <div class="w-full">
          <Radio v-model:checked="checked">
            我已阅读并同意
            <Button type="link">《服务协议》</Button>和
            <Button type="link">《隐私政策》</Button>
          </Radio>
        </div>
        <Button
          class="w-full h-[50px] mt-[30px]"
          type="primary"
          @click="loginHandle"
          >登录</Button
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Button, Carousel, Space, Input, Radio } from "ant-design-vue";
import to from "await-to-js";
import { getAccessToken } from "../service/api";

const userLoginInfo = ref({
  username: "3452045512@qq.com",
  password: "dai5433088",
});

const loginHandle = async () => {
  const loginHandle = {
    grant_type: "password",
    username: userLoginInfo.value.username,
    password: userLoginInfo.value.password,
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET,
    scope: import.meta.env.VITE_CLIENT_SCOPE,
  };
  const [err, res] = await to(getAccessToken(loginHandle));
  console.log(err, res);
};
</script>
