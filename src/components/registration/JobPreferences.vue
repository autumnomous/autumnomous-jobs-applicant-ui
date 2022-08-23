<template>
  <the-card id="job-preferences">
    <template v-slot:cardheader>Enter Your Job Preferences</template>
    <template v-slot:cardbody>
      <alert-error v-if="submissionError" :message="errorMessage"></alert-error>

      <div class="form-group">
        <label for="titleLabel" class="input-label">Desired Cities</label>
        <input
          v-model="locationSearch"
          type="text"
          class="form-control mb-2"
          name="location"
          id="location"
          aria-label="Location"
          placeholder="Search for a City"
          :class="{ 'is-invalid': v$.locationSearch.$error }"
        />

        <select2 :options="autocompleteLocations" v-model="selectedCity">
          <option disabled value="0">Select one</option>
        </select2>

        <div
          class="input-errors"
          v-for="error of v$.locationSearch.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>

        <p
          class="btn btn-sm btn-primary mt-2 mr-2"
          v-for="city of desiredCities"
          :key="city.id"
          @click="removeCity(city.text)"
        >
          {{ city.text }}
          <span class="badge badge-pill badge-secondary">X</span>
        </p>
      </div>
    </template>

    <template v-slot:cardfooter>
      <div class="ml-auto">
        <button
          type="button"
          class="btn btn-primary"
          id="step-2-button"
          @click.prevent="formSubmit"
        >
          Save and continue <i class="fas fa-angle-right ml-1"> </i>
        </button>
      </div>
    </template>
  </the-card>
</template>

<script>
import AlertError from "../ui/AlertError.vue";
import TheCard from "../ui/TheCard.vue";
import Select2 from "../ui/Select2.vue";
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

export default {
  props: {
    applicant: Object,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  components: {
    TheCard,
    AlertError,
    Select2,
  },
  data() {
    return {
      locationSearch: "",
      selectedCity: "",
      autocompleteLocations: [],
      desiredCities: [],
      errorMessage: "",
      submissionError: false,
    };
  },
  validations() {
    return {
      locationSearch: {},
      // personalInformation:{
      //     firstname:{
      //       required: helpers.withMessage('This field cannot be empty', required),
      //     },
      //     lastname:{
      //       required: helpers.withMessage('This field cannot be empty', required),
      //     },
      //     email:{
      //       required: helpers.withMessage('This field cannot be empty', required),
      //     },
      //     phoneNumber:{
      //       required: helpers.withMessage('This field cannot be empty', required)
      //     },
      //     mobileNumber:{
      //       required: helpers.withMessage('This field cannot be empty', required)
      //     },
      //     role:{
      //       required: helpers.withMessage('This field cannot be empty', required),
      //     },
      //     facebook:{},
      //     twitter:{},
      //     instagram:{}
      // }
    };
  },
  methods: {
    async formSubmit() {
      if (this.v$.$invalid) {
        this.errorMessage = "Form has errors or is missing input.";
        this.submissionError = true;
      } else {
        this.submissionError = false;
        const token =
          this.$store.getters.getToken ||
          this.$cookies.get("com.ajobs.applicant");

        const result = await fetch(
          import.meta.env.VITE_AJ_API_PATH +
            "/applicant/update-job-preferences",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
            // credentials: "include",
            body: JSON.stringify({
              desiredcities: this.desiredCities,
            }),
          }
        );

        if (result.ok) {
          this.submissionError = false;

          this.$emit("next-step", "registration-complete");
        } else {
          console.log("error");
        }
      }
    },

    removeCity(cityName) {
      const index = this.desiredCities.findIndex((e) => e.text == cityName);

      if (index > -1) {
        this.desiredCities.splice(index, 1);
      }
    },
  },
  watch: {
    locationSearch: async function (newVal, oldVal) {
      const token =
        this.$store.getters.getToken ||
        this.$cookies.get("com.ajobs.applicant");
      const result = await fetch(
        import.meta.env.VITE_AJ_API_PATH +
          "/applicant/get/location/autocomplete",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            chars: newVal,
          }),
        }
      )
        .then((res) => {
          if (!res.ok) {
            console.log("problem");
          }
          return res.json();
        })
        .catch((error) => {
          console.log("error:", error);
        });

      if (result && result.length > 0) {
        const options = result.map(function (e, i) {
          e.id = i + 1;
          e.text = `${e.city}, ${e.state}, ${e.country}`;

          return e;
        });
        this.autocompleteLocations = options;
      }
    },
    selectedCity: async function (newVal, oldVal) {
      const city = this.autocompleteLocations.filter((e) => e.id == newVal)[0];
      const index = this.desiredCities.findIndex((e) => e.id == newVal);

      if (index === -1) {
        this.desiredCities.push(city);
      }

      // this.v$.companyDetails.longitude.$model = city.longitude;
      // this.v$.companyDetails.latitude.$model = city.latitude;
      // this.v$.companyDetails.location.$model = city.text;
    },
  },
};
</script>

<style lang="scss" scoped></style>
