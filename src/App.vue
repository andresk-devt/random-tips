<template>
  <div id="app">
    <MessageCard />
  </div>
</template>

<script>
import MessageCard from "./components/MessageCard.vue";
export default {
  components: {
    MessageCard,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-family: "Arial";
  background: #202632;
}
</style>
