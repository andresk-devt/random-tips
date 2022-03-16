<template>
  <div class="message-card">
    <div class="loading" v-if="loading">
      <LoadingSpinner />
    </div>
    <div class="advice-id">ADVICE # {{ tipID }}</div>
    <div class="advice-message" v-if="!loading">
      {{ `${tipMessage}` }}
    </div>
    <img
      class="separator"
      src="../assets/images/pattern-divider-desktop.svg"
      alt="separator"
    />
    <button class="random__button" @click="request()">
      <img src="../assets/images/icon-dice.svg" alt="icon" />
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LoadingSpinner from "./LoadingSpinner.vue";

export default {
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      tipID: "",
      tipMessage: "",
      loading: true,
    };
  },
  async beforeCreate() {
    this.loading = true;
    await this.$store.dispatch("getAdvicePeticion");
    this.tipID = this.advice.id;
    this.tipMessage = this.advice.advice;
    this.loading = false;
  },
  computed: {
    ...mapGetters({
      advice: "getAdvice",
    }),
  },
  methods: {
    async request() {
      this.loading = true;
      await this.$store.dispatch("getAdvicePeticion");
      this.tipID = this.advice.id;
      this.tipMessage = this.advice.advice;
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.message-card {
  position: relative;
  padding: 5px;
  width: 500px;
  min-width: 300px;
  height: auto;
  text-align: center;
  border-radius: 18px;
  background: #313a49;
}
.advice {
  &-id {
    margin: 30px 0px;
    color: #57faaf;
    font-size: 0.9rem;
  }
  &-message {
    color: white;
    margin: 0px 30px;
    font-size: 1.8rem;
  }
}
.separator {
  margin: 40px 0px;
  width: 80%;
}
.random__button {
  position: absolute;
  bottom: -25px;
  left: 45%;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: #57faaf;
  cursor: pointer;
  &:hover {
    background: white;
    transition: all 0.5s;
  }
}
@media (max-width: 565px) {
  .message-card {
    width: 90%;
  }
}
</style>
