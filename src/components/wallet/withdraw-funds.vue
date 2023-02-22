<template>
  <q-page>
    <div class="">
      <div
        class="q-py-sm text-h5 text-primary text-weight-bold full-width row wrap justify-center items-start content-center"
      >
        Withdrawal
      </div>

      <div
        class="full-width row wrap justify-center items-start content-center"
      >
        <q-card
          class="my-card bg-secondary"
          style="width: 480px; min-width: 200px"
        >
          <div
            class="q-mt-md q-py-md fit row wrap justify-center items-start content-start"
          >
            <div
              style="
                border-radius: 4px;
                border: 1px solid #ffffff;
                width: 80%;
                background-color: white;
              "
            >
              <q-card-section>
                <div class="q-py-sm">
                  <div class="text-subtitle2 q-py-xs">Amount:</div>
                  <q-input
                    outlined
                    dense
                    placeholder="Enter Amount"
                    v-model="form.amount"
                    maxlength="7"
                    inputmode="numeric"
                    prefix="NGN"
                    pattern="[0-9]*"
                    oninput="value=value.replace(/[^\d]/g,'')"
                    :input-style="{ color: 'primary' }"
                  />
                </div>
                <div class="q-py-sm">
                  <div class="text-subtitle2 q-py-xs">Narration:</div>
                  <q-input
                    outlined
                    dense
                    placeholder="Narration"
                    v-model="form.phone_number"
                    maxlength="200"
                    inputmode="numeric"
                    :input-style="{ color: 'primary' }"
                  />
                </div>
                <div class="q-py-sm">
                  <div class="text-subtitle2 q-py-xs">
                    Select Account Number:
                  </div>
                  <q-item tag="label" v-ripple>
                    <q-item-section avatar>
                      <q-radio
                        v-model="form.selectAccNum"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="982881727 - Ferdinand Gege; First Bank"
                      />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>982881727 - Ferdinand Gege</q-item-label>
                      <q-item-label caption>First Bank Ltd </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item tag="label" v-ripple>
                    <q-item-section avatar>
                      <q-radio
                        v-model="form.selectAccNum"
                        checked-icon="task_alt"
                        unchecked-icon="panorama_fish_eye"
                        val="982881727 - Ferdinand Gege; Polaris Bank Ltd"
                      />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>982881727 - Ferdinand Gege</q-item-label>
                      <q-item-label caption>Polaris Bank Ltd </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </q-card-section>

              <q-card-actions>
                <div
                  class="q-pb-md full-width row wrap justify-center items-start content-center"
                >
                  <q-btn
                    outline
                    color="secondary"
                    no-caps
                    label="Withdraw"
                    style="width: 80%"
                    @click="persistent = true"
                  />
                </div>
                <q-dialog
                  v-model="persistent"
                  persistent
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-card class="bg-secondary text-white" style="width: 300px">
                    <q-card-section>
                      <div class="text-h6">You are about to withdraw</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      Amount: NGN{{ form.amount }}
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      Account Number: {{ form.selectAccNum }}
                    </q-card-section>

                    <q-card-actions align="right" class="bg-white">
                      <q-btn
                        flat
                        color="primary"
                        label="Cancel"
                        v-close-popup
                      />
                      <q-btn
                        flat
                        color="secondary"
                        label="Proceed"
                        v-close-popup
                      />
                    </q-card-actions>
                  </q-card>
                </q-dialog>
              </q-card-actions>
            </div>
            <div
              class="fit row wrap justify-center items-start content-start q-py-md"
            >
              <div class="text-white text-center" style="width: 70%">
                Please note that withdrawals may take
                <span class="text-orange text-bold"> 12 to 24 hours.</span> This
                is subject to the recipient's bank
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      persistent: false,
      selectBankOptions: [
        "1000085642 - Ferdinand Gege; Polaris Bank",
        "982881727, Ferdinand Gege - First Bank",
      ],
      form: {
        amount: "",
        narration: "",
        selectAccNum: "firstBank",
      },
    };
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style lang="sass" scoped></style>
