<template>
  <q-page class="bg-grey-2" padding>
    <Wallet />
  </q-page>
</template>

<script>
import Wallet from "src/components/wallet/user-wallet.vue";

export default {
  name: "userWallet",
  components: {
    Wallet,
  },

  data() {
    return {};
  },

  methods: {},
};
</script>
