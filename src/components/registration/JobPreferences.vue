<template>
  <the-card id="job-preferences">
    <template v-slot:cardheader>Enter Your Job Preferences</template>
    <template v-slot:cardbody>
      <alert-error v-if="state.submissionError" :message="state.errorMessage"></alert-error>

      <div class="form-group">
        <label for="titleLabel" class="input-label">Desired Cities</label>
  

        <VueMultiselect v-model="state.desiredCities" :options="state.autocompleteLocations" :multiple="true" :searchable="true"
          @search-change="findCities" placeholder="Type to search" label="text" track-by="id">
          <template #noResult>
            Oops! No elements found. Consider changing the search query.
          </template>
        </VueMultiselect>

        <p
          class="btn btn-sm btn-primary mt-2 mr-2"
          v-for="city of state.desiredCities"
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

<script setup>
import AlertError from "../ui/AlertError.vue";
import TheCard from "../ui/TheCard.vue";
import VueMultiselect from 'vue-multiselect';
import { required, helpers } from "@vuelidate/validators";
import {defineProps, defineEmits, reactive, watch} from 'vue';
import {useAuthStore} from '../../stores/auth';
import Cookies from 'js-cookie';

const store = useAuthStore();
const emit = defineEmits(['next-step']);

const props = defineProps({
  applicant: Object
})

const state = reactive({
  locationSearch: "",
  selectedCity: "",
  autocompleteLocations: [],
  desiredCities: [],
  errorMessage: "",
  submissionError: false
})

// watch(state.locationSearch, async (currentValue, oldValue) =>{
 
// });



// watch(state.selectedCity, (currentValue, oldValue) =>{
//   // const city = this.autocompleteLocations.filter((e) => e.id == currentValue)[0];
//   // const index = this.desiredCities.findIndex((e) => e.id == currentValue);

//   // if (index === -1) {
//   //   this.desiredCities.push(city);
//   // }

//       // this.v$.companyDetails.longitude.$model = city.longitude;
//       // this.v$.companyDetails.latitude.$model = city.latitude;
//       // this.v$.companyDetails.location.$model = city.text;
// });


async function findCities(value){
  const token =
    store.getToken ||
    Cookies.get("com.ajobs.applicant");
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
        chars: value,
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
    state.autocompleteLocations = options;
  }
}
async function formSubmit() {

    state.submissionError = false;
    const token =
      store.getToken ||
      Cookies.get("com.ajobs.applicant");

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
          desiredcities: state.desiredCities,
        }),
      }
    );

    if (result.ok) {
      state.submissionError = false;
      store.setRegistrationStep("registration-complete");
      emit("next-step", "registration-complete");
    } else {
      state.submissionError = true;
      state.errorMessage = (await result.json()).message;
      
    }
  
}

function removeCity(cityName) {
  const index = state.desiredCities.findIndex((e) => e.text == cityName);

  if (index > -1) {
    state.desiredCities.splice(index, 1);
  }
}

</script>

<style lang="scss" scoped></style>
