<template>
  <button class="btn">{{ text }}</button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.btn {
  padding: 20px 24px;
  border-radius: 20px;
  background: rgba(212, 15, 125, 1);
  color: white;
  border: none;
  cursor: pointer;
}
</style>