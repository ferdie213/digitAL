<template>
  <q-page>
    <!-- Wallet Information Section -->
    <div class="q-my-sm">
      <div class="q-py-md text-h5 text-primary text-weight-bold">
        Wallet Information
      </div>
      <div class="row">
        <div class="col-12 col-md">
          <q-card
            class="my-card text-white q-ma-md-md"
            style="
              background: radial-gradient(circle, #fa9b5b 0%, #fa9b5b 100%);
              width: 18rem;
            "
          >
            <q-card-section>
              <q-icon name="account_balance_wallet" size="md" color="" />
              <div class="text-h6">Wallet Balance</div>
              <div class="text-subtitle2">NGN230,000.00</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md">
          <q-card
            class="my-card text-white q-ma-md-md"
            style="
              background: radial-gradient(circle, #7d77dd 0%, #7d77dd 100%);
              width: 18rem;
            "
          >
            <q-card-section>
              <q-icon name="exit_to_app" size="md" color="" />
              <div class="text-h6">Deposit Funds</div>
              <div class="text-subtitle2">
                Deposit from your Bank Acc or Airtime
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md">
          <q-card
            class="my-card text-white q-ma-md-md"
            style="
              background: radial-gradient(circle, #1eb0cd 0%, #1eb0cd 100%);
              width: 18rem;
            "
          >
            <q-card-section>
              <q-icon name="trending_up" size="md" color="" />
              <div class="text-h6">Cash Withdrawal</div>
              <div class="text-subtitle2">Withdraw Funds</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!-- Wallet Information Section ends -->

    <!-- Convert to Airtime to Cash Section -->
    <div class="q-my-lg">
      <div class="q-py-md text-h5 text-primary text-weight-bold">
        Convert Airtime to Cash
      </div>
      <div class="row">
        <div class="col-12 col-md">
          <q-card class="my-card bg-white text-black" style="width: 28rem">
            <q-card-section>
              <div class="row">
                <div
                  class="text-center q-mr-sm q-mt-xs"
                  style="
                    background-color: #b6dbc2;
                    width: 26px;
                    height: 26px;
                    border-radius: 13px;
                    border: 0.5px solid #b6dbc2;
                  "
                >
                  <q-icon name="done" size="sm" color="secondary" />
                </div>
                <div class="text-h6">Convert MTN mobile airtime to Cash</div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md">
          <q-card class="my-card" style="width: 28rem">
            <q-card-section>
              <div class="row">
                <div
                  class="text-center q-mr-sm q-mt-xs"
                  style="
                    background-color: #b6dbc2;
                    width: 26px;
                    height: 26px;
                    border-radius: 13px;
                    border: 0.5px solid #b6dbc2;
                  "
                >
                  <q-icon name="done" size="sm" color="secondary" />
                </div>
                <div class="text-h6">Convert Airtel mobile airtime to Cash</div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="row q-my-lg">
        <div class="col-12 col-md">
          <q-card class="my-card" style="width: 28rem">
            <q-card-section>
              <div class="row">
                <div
                  class="text-center q-mr-sm q-mt-xs"
                  style="
                    background-color: #b6dbc2;
                    width: 26px;
                    height: 26px;
                    border-radius: 13px;
                    border: 0.5px solid #b6dbc2;
                  "
                >
                  <q-icon name="done" size="sm" color="secondary" />
                </div>
                <div class="text-h6">Convert Glo mobile airtime to Cash</div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md">
          <q-card class="my-card" style="width: 28rem">
            <q-card-section>
              <div class="row">
                <div
                  class="text-center q-mr-sm q-mt-xs"
                  style="
                    background-color: #b6dbc2;
                    width: 26px;
                    height: 26px;
                    border-radius: 13px;
                    border: 0.5px solid #b6dbc2;
                  "
                >
                  <q-icon name="done" size="sm" color="secondary" />
                </div>
                <div class="text-h6">Convert 9mobile airtime to Cash</div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <!-- Convert to Airtime to Cash Section -->

    <!-- Pay Bills Section -->
    <div class="q-my-lg">
      <div class="q-py-md text-h5 text-primary text-weight-bold">Pay Bills</div>
      <div class="row q-py-md">
        <div class="col-3 col-md-3">
          <!-- <img
            src="../assets/phone.png"
            spinner-color="white"
            style="width: 100%; max-width: 30px"
          /> -->
          <q-icon name="phone_iphone" size="md" color="primary" />
          <div class="text-primary">Airtime</div>
        </div>
        <div class="col-3 col-md-3">
          <!-- <img
            src="../assets/internet.png"
            spinner-color="white"
            style="width: 100%; max-width: 30px"
          /> -->
          <q-icon name="language" size="md" color="primary" />
          <div class="text-primary">Data</div>
        </div>
        <div class="col-3 col-md-3">
          <!-- <img
            src="../assets/games.png"
            spinner-color="white"
            style="width: 100%; max-width: 30px"
          /> -->
          <q-icon name="sports_esports" size="md" color="primary" />
          <div class="text-primary">
            Gaming <span class="gt-sm">/Betting</span>
          </div>
        </div>
        <div class="col-3 col-md-3">
          <q-icon name="live_tv" size="md" color="primary" />
          <div class="text-primary">Cable TV</div>
        </div>
      </div>
      <div class="row q-py-md">
        <div class="col-3 col-md-3">
          <q-icon name="bolt" size="md" color="primary" />
          <div class="text-primary">Electricity</div>
        </div>
        <div class="col-3 col-md-3">
          <q-icon name="school" size="md" color="primary" />
          <div class="text-primary">School Fees</div>
        </div>
        <div class="col-3 col-md-3">
          <q-icon size="sm" color="primary" name="fas fa-hand-holding-heart" />
          <div class="text-primary">Tithe & Donations</div>
        </div>
        <div class="col-3 col-md-3">
          <q-icon name="history" size="md" color="primary" />
          <div class="text-primary">My Payment History Fees</div>
        </div>
      </div>
    </div>
    <!-- Pay Bills Section ends -->

    <!-- Transactions Section -->
    <div class="q-my-lg">
      <div class="q-py-md text-h5 text-primary text-weight-bold">
        Transactions History
      </div>
      <div class="column bg-secondary" style="height: 150px">
        <div class="col text-white text-center q-pt-md">My Withdrawals</div>
        <div class="col text-white text-center">My Deposits</div>
        <div class="col text-white text-center">My Payments</div>
        <div class="col text-white text-center">My Account Statement</div>
      </div>
    </div>
    <!-- Transactions Section ends -->
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      login: false,
    };
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style lang="css" scoped>
.box {
  border: 1px solid #94a0ac;
  width: 15rem;
}
</style>
