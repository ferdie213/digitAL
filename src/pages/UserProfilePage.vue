<template>
  <q-page class="bg-grey-2" padding>
    <UserProfile />
  </q-page>
</template>

<script>
import UserProfile from "src/components/user-profile.vue";

export default {
  name: "userProfile",
  components: {
    UserProfile,
  },

  data() {
    return {};
  },

  methods: {},
};
</script>
