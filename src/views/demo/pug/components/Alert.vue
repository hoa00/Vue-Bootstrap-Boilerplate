<template lang="pug">
  div
    b-alert(show) Default Alert
    b-alert(show variant="success") Success Alert
    b-alert(v-model="showDismissibleAlert" variant="danger" dismissible) Dismissible Alert!
    b-alert(
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    )
      p This alert will dismiss after {{ dismissCountDown }} seconds...
      b-progress(
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      )
    
    b-button(@click="showAlert" variant="info").m-1 Show alert with count-down timer
    b-button(@click="showDismissibleAlert = true" variant="info").m-1 Show dismissible alert ({{ showDismissibleAlert ? "visible" : "hidden" }})
</template>

<script>
export default {
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>
