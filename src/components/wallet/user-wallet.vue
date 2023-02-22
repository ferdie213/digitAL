<template>
  <q-page>
    <div class="fit row wrap justify-start items-start content-start">
      <div class="col-12 col-md">
        <div
          class="box2 my-card q-ma-md-md"
          style="background: radial-gradient(circle, #fa9b5b 0%, #fa9b5b 100%)"
        >
          <div class="box q-pa-sm">
            <div class="">
              <q-icon
                class="q-py-sm"
                name="account_balance_wallet"
                size="md"
                color="primary"
              />

              <div class="text-h6 text-primary q-py-sm">Wallet Balance</div>
              <div class="text-subtitle2 text-primary q-py-sm">
                NGN230,000.00
              </div>
            </div>
          </div>
          <div class="row justify-around">
            <div class="col text-center text-white q-py-sm text-weight-bold">
              <q-btn
                flat
                color="white"
                icon="add"
                label="Add Funds"
                @click="persistent = true"
              />
            </div>
            <q-dialog
              v-model="persistent"
              persistent
              transition-show="scale"
              transition-hide="scale"
            >
              <q-card class="bg-secondary text-white" style="width: 70%">
                <q-card-section>
                  <div class="text-h6 text-accent text-center q-pa-md">
                    Use the account details below to fund your digitAL Wallet
                  </div>
                </q-card-section>

                <div
                  class="fit row wrap justify-center items-center content-center"
                >
                  <div class="modal-inner-box q-pa-sm q-mb-md">
                    <q-card-section class="q-pt-none">
                      <div class="row">
                        <div class="col-6 text-subtitle2 text-accent">
                          Account Name:
                        </div>
                        <div class="col-6 text-subtitle2 text-white">
                          {{ form.accName }}
                        </div>
                      </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      <div class="row">
                        <div class="col-6 text-subtitle2 text-accent">
                          Account Number
                        </div>
                        <div class="col-6 text-subtitle2 text-white">
                          {{ form.accNumber }}
                        </div>
                      </div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      <div class="row">
                        <div class="col-6 text-subtitle2 text-accent">
                          Bank Name
                        </div>
                        <div class="col-6 text-subtitle2 text-white">
                          {{ form.bankName }}
                        </div>
                      </div>
                    </q-card-section>
                    <q-card-section>
                      <div class="text-black">
                        A deposit fee of N100 would be charged on all
                        transactions
                      </div>
                    </q-card-section>
                  </div>
                </div>

                <q-card-actions align="right" class="bg-white">
                  <q-btn
                    flat
                    color="primary"
                    label="Copy Account Number"
                    v-close-popup
                  />
                </q-card-actions>
              </q-card>
            </q-dialog>
            <div class="col text-center text-white q-py-sm text-weight-bold">
              <q-btn
                flat
                color="white"
                icon="remove"
                label="Withdraw"
                :to="{ name: 'withdrawal' }"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md">
        <div
          class="overview fit row wrap justify-center items-center content-center q-pa-lg q-mb-md"
        >
          <div class="text-h6 text-accent text-center q-pa-md">
            Use the account details below to fund your digitAL Wallet
          </div>
          <div class="overview-box q-pa-sm q-mb-md">
            <div class="">
              <div class="row">
                <div class="col-6 text-subtitle2 text-accent">Account Name</div>
                <div class="col-6 text-subtitle2 text-primary">
                  Ferdinand Luter Gege
                </div>
              </div>
              <div class="row">
                <div class="col-6 text-subtitle2 text-accent">
                  Account Number
                </div>
                <div class="col-6 text-subtitle2 text-primary">0081977827</div>
              </div>

              <div class="row">
                <div class="col-6 text-subtitle2 text-accent">Bank Name</div>
                <div class="col-6 text-subtitle2 text-primary">First Bank</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="transaction" class="styling q-pa-md">
      <q-table
        title="Activity Log"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      persistent: false,
      selectBankOptions: ["3057985642 - Ferdinand Gege; Polaris Bank"],
      form: {
        accName: "Ferdinand Luter Gege",
        accNumber: "3057985642",
        bankName: "Polaris Bank",
      },
      columns: [
        {
          name: "date",
          required: true,
          label: "Date",
          align: "left",
          field: "date",
          sortable: true,
        },
        {
          name: "transId",
          required: true,
          label: "Transaction ID",
          align: "left",
          field: "transId",
          sortable: true,
        },
        {
          name: "type",
          align: "left",
          label: "Type",
          field: "type",
          sortable: true,
        },
        {
          name: "status",
          align: "left",
          label: "Status",
          field: "status",
          sortable: true,
        },
        {
          name: "amount",
          align: "left",
          label: "Amount",
          field: "amount",
          sortable: true,
        },
        { name: "action", align: "left", label: "Action", field: "action" },
      ],

      rows: [
        {
          date: "10/09/21",
          transId: "qrt109998020201",
          type: "Cash Deposit",
          status: "Successful",
          amount: "NGN 50,000.00",
          action: "View",
        },
        {
          date: "10/09/21",
          transId: "qrt109998020201",
          type: "Airtime to Cash",
          status: "Successful",
          amount: "NGN 150,000.00",
          action: "View",
        },
        {
          date: "10/09/21",
          transId: "qrt107267189763",
          type: "Buy Power",
          amount: "NGN 4,000.00",
          status: "Pending",
          action: "View",
        },
        {
          date: "10/09/21",
          transId: "qrt10999828763",
          type: "Gaming",
          amount: "NGN 10,000.00",
          status: "Failed",
          action: "View",
        },
        {
          date: "10/09/21",
          transId: "qrt10999828763",
          type: "Buy Airtime",
          amount: "NGN 40,000.00",
          status: "Successful",
          action: "View",
        },
        {
          date: "10/09/21",
          transId: "qrt109998020201",
          type: "Cash Withdrawal",
          status: "Successful",
          amount: "NGN 80,000.00",
          action: "View",
        },
      ],
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
  width: 22rem;
  background-color: #ffffff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.box2 {
  /* border: 1px solid #e3e6e9; */
  width: 22rem;
  height: 12.8rem;
  border-radius: 8px;
  /* background-color: #ffffff; */
}
.overview-box {
  border: 1px solid #e3e6e9;
  width: 19rem;
  background-color: #ffffff;
  border-radius: 8px;
}

.overview {
  border: 1px solid #e3e6e9;
  width: 80%;
  background-color: #ffffff;
  border-radius: 8px;
}
.modal-inner-box {
  border: 1px solid #e3e6e9;
  width: 21rem;
  border-radius: 8px;
}
</style>
