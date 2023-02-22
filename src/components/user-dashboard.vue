<template>
  <q-page class="q-pa-md">
    <!-- Wallet Information Section -->
    <div class="q-my-sm">
      <div class="q-py-md text-h5 text-accent text-weight-bold">
        Wallet Information
      </div>
      <div class="row">
        <div class="col-12 col-md">
          <div
            class="box2 my-card q-ma-md-md"
            style="
              background: radial-gradient(circle, #fa9b5b 0%, #fa9b5b 100%);
            "
          >
            <div class="box q-pa-sm">
              <q-icon name="account_balance_wallet" size="md" color="primary" />
              <div class="text-h6 text-primary">Wallet Balance</div>
              <div class="text-subtitle2 text-primary">NGN230,000.00</div>
            </div>
            <div class="text-center text-white q-py-sm text-weight-bold">
              <q-icon size="sm" name="visibility" />
              View more
            </div>
          </div>
        </div>
        <div class="col-12 col-md">
          <div
            class="box2 my-card text-white q-ma-md-md"
            style="
              background: radial-gradient(circle, #7d77dd 0%, #7d77dd 100%);
            "
          >
            <div class="box q-pa-sm">
              <q-icon name="exit_to_app" size="md" color="primary" />
              <div class="text-h6 text-primary">Deposit Funds</div>
              <div class="text-primary text-subtitle2">
                Cash deposit from your Bank Acc or Airtime
              </div>
            </div>
            <div class="text-center text-white q-py-sm text-weight-bold">
              <q-icon size="sm" name="add" />
              Add Funds
            </div>
          </div>
        </div>
        <div class="col-12 col-md">
          <div
            class="box2 my-card text-white q-ma-md-md"
            style="
              background: radial-gradient(circle, #1eb0cd 0%, #1eb0cd 100%);
            "
          >
            <div class="box q-pa-sm">
              <q-icon name="trending_up" size="md" color="primary" />
              <div class="text-primary text-h6">Cash Withdrawal</div>
              <div class="text-subtitle2 text-primary">Withdraw Funds</div>
            </div>
            <div class="text-center text-white q-py-sm text-weight-bold">
              <q-icon size="sm" name="remove" />
              Withdraw Funds
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Wallet Information Section ends -->

    <!-- Convert to Airtime to Cash Section -->
    <div class="q-my-lg">
      <div class="q-py-md text-h5 text-accent text-weight-bold">
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
      <div class="q-py-md text-h5 text-accent text-weight-bold">Pay Bills</div>
      <div class="row q-py-md">
        <div class="col-4 col-md-3 q-py-sm">
          <div class="ovalBackdrop" style="background-color: #fff1f0">
            <q-icon name="phone_iphone" size="md" style="color: #ff4134" />
          </div>
          <div class="text-primary">Airtime</div>
        </div>
        <div class="col-4 col-md-3 q-py-sm">
          <div class="ovalBackdrop" style="background-color: #fff9ec">
            <q-icon name="language" size="md" style="color: #ffc664" />
          </div>
          <div class="text-primary">Data</div>
        </div>
        <div class="col-4 col-md-3 q-py-sm">
          <div class="ovalBackdrop" style="background-color: #f3efff">
            <q-icon name="live_tv" size="md" style="color: #6b3ce9" />
          </div>

          <div class="text-primary">Cable TV</div>
        </div>
        <div class="col-4 col-md-3 q-py-sm">
          <div class="ovalBackdrop" style="background-color: #fff9ec">
            <q-icon name="bolt" size="md" style="color: #ffc664" />
          </div>

          <div class="text-primary">Electricity</div>
        </div>
        <div class="col-4 col-md-3 q-py-sm">
          <div class="ovalBackdrop" style="background-color: #f3efff">
            <q-icon name="school" size="md" style="color: #6b3ce9" />
          </div>

          <div class="text-primary">School Fees</div>
        </div>
        <div class="col-4 col-md-3 q-py-sm">
          <div class="ovalBackdrop" style="background-color: #e6fef0">
            <q-icon name="sports_esports" size="md" style="color: #66d59a" />
          </div>

          <div class="text-primary">
            Gaming <span class="gt-sm">/Betting</span>
          </div>
        </div>
        <div class="col-4 col-md-3 q-py-sm">
          <div class="ovalBackdrop" style="background-color: #fff1f0">
            <q-icon
              size="sm"
              style="color: #ff4134"
              name="fas fa-hand-holding-heart"
              class="q-py-xs q-px-xs"
            />
          </div>

          <div class="text-primary">Tithe & Donations</div>
        </div>
        <div class="col-4 col-md-3 q-py-sm">
          <div class="ovalBackdrop" style="background-color: #e6fef0">
            <q-icon name="history" size="md" style="color: #66d59a" />
          </div>
          <div class="text-primary">My Payment History Fees</div>
        </div>
      </div>
    </div>
    <!-- Pay Bills Section ends -->

    <!-- Transactions Section -->
    <div class="q-my-lg">
      <div class="q-py-md text-h5 text-accent text-weight-bold">
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
  border: 1px solid #e3e6e9;
  width: 19rem;
  background-color: #ffffff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.box2 {
  /* border: 1px solid #e3e6e9; */
  width: 19rem;
  height: 8.8rem;
  border-radius: 8px;
  /* background-color: #ffffff; */
}
.ovalBackdrop {
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  padding: 0.5rem;
}
</style>
