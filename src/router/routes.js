const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/components/user-dashboard.vue"),
      },
      {
        path: "/user-dashboard",
        name: "user-dashboard",
        component: () => import("src/components/user-dashboard-copy.vue"),
      },
      {
        path: "/convert-airtime",
        name: "convertAirtime",
        component: () => import("src/pages/ConvertAirtimePage.vue"),
      },
      {
        path: "wallet",
        name: "wallet",
        component: () => import("src/pages/WalletPage.vue"),
      },
      {
        path: "/withdrawal",
        name: "withdrawal",
        component: () => import("src/components/wallet/withdraw-funds.vue"),
      },
      {
        path: "/payments",
        name: "payments",
        component: () => import("src/pages/PayBillsPage.vue"),
      },
      {
        path: "/transactions",
        name: "transactions",
        component: () => import("src/pages/TransactionsPage.vue"),
      },

      {
        path: "/profile",
        name: "profile",
        component: () => import("src/pages/UserProfilePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
