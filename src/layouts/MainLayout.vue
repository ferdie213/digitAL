<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar> -->
          digitAL
        </q-toolbar-title>
        <div>Welcome, {{ user ? "user" : "Ferdinand" }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      :width="200"
      bordered
    >
      <!-- drawer content -->

      <!-- <q-icon name="fas fa-money-bill" /> -->

      <q-list class="q-pt-md">
        <q-item to="/" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon size="sm" name="dashboard" />
          </q-item-section>

          <q-item-section>Dashboard</q-item-section>
        </q-item>
        <q-item to="/convert-airtime" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon size="xs" name="fas fa-money-bill-transfer" />
          </q-item-section>

          <q-item-section>Airtime to Cash</q-item-section>
        </q-item>
        <q-item to="/wallet" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon size="sm" name="account_balance_wallet" />
          </q-item-section>

          <q-item-section>Wallet</q-item-section>
        </q-item>
        <q-item to="/payments" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon size="sm" name="payments" />
          </q-item-section>

          <q-item-section>Pay Bills</q-item-section>
        </q-item>

        <q-item to="/transactions" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon size="sm" name="history" />
          </q-item-section>

          <q-item-section>Transactions</q-item-section>
        </q-item>
        <q-item to="/profile" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon size="sm" name="person" />
          </q-item-section>

          <q-item-section>Account </q-item-section>
        </q-item>
        <q-item to="/logout" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon size="xs" name="fas fa-right-from-bracket" />
          </q-item-section>

          <q-item-section>Logout</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
