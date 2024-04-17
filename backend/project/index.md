# 模块说明

---
hello: world

<script setup>
import { ref } from 'vue';

const count = ref(0)
</script>
---

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
    color: red;
    font-weight: bold;
    border: 1px solid red;
    line-height: 20px;
    padding: 0 5px;
    border-radius: 4px;
}
</style>