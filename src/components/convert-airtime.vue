<template>
  <q-page>
    <div class="">
      <div
        class="q-py-sm text-h5 text-primary text-weight-bold full-width row wrap justify-center items-start content-center"
      >
        Convert Airtime To Cash
      </div>

      <div
        class="full-width row wrap justify-center items-start content-center"
      >
        <q-card
          class="my-card bg-secondary"
          style="width: 480px; min-width: 200px"
        >
          <div
            class="fit row wrap justify-center items-start content-start q-py-md"
          >
            <div class="text-white text-center" style="width: 70%">
              Kindly note that you will be charged 10% on airtime deposits.
              However, transfers to bank account are free.
            </div>
          </div>
          <div
            class="q-py-md fit row wrap justify-center items-start content-start"
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
                  <div class="text-subtitle2 q-py-xs">
                    Select Mobile Network:
                  </div>
                  <q-select
                    rounded
                    outlined
                    v-model="form.selectNetwork"
                    :options="selectNetworkOptions"
                    :input-style="{ color: 'primary' }"
                  />
                </div>
                <div class="q-py-sm">
                  <div class="text-subtitle2 q-py-xs">Amount:</div>
                  <q-input
                    outlined
                    rounded
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
                  <div class="text-subtitle2 q-py-xs">Phone Number:</div>
                  <q-input
                    outlined
                    rounded
                    dense
                    placeholder="Enter Phone Number"
                    v-model="form.phone_number"
                    maxlength="11"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    oninput="value=value.replace(/[^\d]/g,'')"
                    :input-style="{ color: 'primary' }"
                  />
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
                    label="Send"
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
                      <div class="text-h6">Confirm Details Below</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      Selected Network: {{ form.selectNetwork }}
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      Amount to be Converted: NGN{{ form.amount }}
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      Phone Number: {{ form.phone_number }}
                    </q-card-section>

                    <q-card-actions align="right" class="bg-white">
                      <q-btn flat color="primary" label="Edit" v-close-popup />
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
      selectNetworkOptions: ["MTN", "Airtel", "GLO", "9mobile"],
      form: {
        phone_number: "",
        amount: "",
        selectNetwork: "MTN",
      },
    };
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style lang="sass" scoped></style>
