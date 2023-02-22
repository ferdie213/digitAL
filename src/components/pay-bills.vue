<template>
  <q-page>
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
  </q-page>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style lang="css" scoped>
.ovalBackdrop {
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  padding: 0.5rem;
}
</style>
