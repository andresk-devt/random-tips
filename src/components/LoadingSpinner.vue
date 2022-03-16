<template>
  <div class="spinner"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.spinner {
  border: 4px solid rgba(255, 255, 255, 0.9);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border-left-color: transparent;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
