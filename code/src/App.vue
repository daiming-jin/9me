<template>
  <ConfigProvider
    :theme="{
      token: {
        colorPrimary: '#032bec',
      },
    }"
  >
    <RouterView />
  </ConfigProvider>
</template>
<script setup>
import { ConfigProvider } from "ant-design-vue";
</script>
