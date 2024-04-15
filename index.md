---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ThreeBird 项目文档"
  text: "Docs for ThreeBird"
  tagline: My great project tagline
  image:
    src: .vitepress/assets/logo-icon.png
    alt: Docs for ThreeBird
  actions:
    - theme: brand
      text: Get Start
      link: /markdown-examples
    - theme: alt
      text: API 示例
      link: /api-examples

features:
  - title: 特性 A
    details: 特性 A 的详细描述
  - title: 特性 B
    details: 特性 B 的详细描述
  - title: 特性 C
    details: 特性 C 的详细描述
---

<script setup lang="ts">
import { onMounted } from 'vue';
import { fetchVersion } from './.vitepress/utils/fetchVersion';

onMounted(() => {
  fetchVersion()
})
</script>