<template>
  <q-page class="bg-white" padding>
    <Dashboard />
  </q-page>
</template>

<script>
import Dashboard from "src/components/user-dashboard.vue";

export default {
  name: "userDashboard",
  components: {
    Dashboard,
  },

  data() {
    return {};
  },

  methods: {},
};
</script>
