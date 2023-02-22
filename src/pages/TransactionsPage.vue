<template>
  <q-page class="bg-grey-2" padding>
    <Transactions />
  </q-page>
</template>

<script>
import Transactions from "src/components/user-transactions.vue";

export default {
  name: "userTransactions",
  components: {
    Transactions,
  },

  data() {
    return {};
  },

  methods: {},
};
</script>
