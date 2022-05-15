<template>
  <VueRecaptcha
      :sitekey="siteKey"
      :load-recaptcha-script="true"
      @verify="handleSuccess"
      @error="handleError"
  ></VueRecaptcha>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { VueRecaptcha } from 'vue-recaptcha';

export default{
  name: 'ReCaptcha',
  components: {
    VueRecaptcha
  },
  setup() {
    const siteKey = computed(() => {
      return '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
    });

    const handleError = (err) => {
      console.log(err);
    };

    const handleSuccess = (response) => {
      console.log(response);
    };

    return {
      handleSuccess,
      handleError,
      siteKey,
    };
  }
};
</script>
