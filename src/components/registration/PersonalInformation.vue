<template>
  <the-card id="personal-information">
    <template v-slot:cardheader>Enter Your Personal Information</template>
    <template v-slot:cardbody>
      <alert-error v-if="state.submissionError" :message="state.errorMessage"></alert-error>

      <div class="row mb-4">
        <label for="firstname" class="col-sm-3 col-form-label form-label"
          >First Name</label
        >

        <div class="col-sm-9">
          <input
            v-model.lazy="v$.personalInformation.firstname.$model"
            type="text"
            class="form-control"
            name="firstname"
            id="firstname"
            aria-label="First Name"
            :class="{ 'is-invalid': v$.personalInformation.firstname.$error }"
          />
        </div>
        <div
          class="input-errors"
          v-for="error of v$.personalInformation.firstname.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <div class="row mb-4">
        <label for="lastname" class="col-sm-3 col-form-label form-label"
          >Last Name</label
        >

        <div class="col-sm-9">
          <input
            v-model.lazy="v$.personalInformation.lastname.$model"
            type="text"
            class="form-control"
            name="lastname"
            id="lastname"
            aria-label="Last Name"
            :class="{ 'is-invalid': v$.personalInformation.lastname.$error }"
          />
        </div>
        <div
          class="input-errors"
          v-for="error of v$.personalInformation.lastname.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <div class="row mb-4">
        <label for="email" class="col-sm-3 col-form-label form-label"
          >Email</label
        >

        <div class="col-sm-9">
          <input
            v-model.lazy="v$.personalInformation.email.$model"
            type="text"
            class="form-control"
            name="email"
            id="email"
            aria-label="Email"
            :class="{ 'is-invalid': v$.personalInformation.email.$error }"
          />
        </div>
        <div
          class="input-errors"
          v-for="error of v$.personalInformation.email.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <div class="row mb-4">
        <label for="phonenumber" class="col-sm-3 col-form-label form-label"
          >Phone Number</label
        >

        <div class="col-sm-9">
          <input
            v-model.lazy="v$.personalInformation.phoneNumber.$model"
            type="tel"
            class="form-control"
            name="phonenumber"
            id="phonenumber"
            aria-label="Phone Number"
            :class="{ 'is-invalid': v$.personalInformation.phoneNumber.$error }"
          />
        </div>
        <div
          class="input-errors"
          v-for="error of v$.personalInformation.phoneNumber.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <div class="form-group">
        <!-- Form -->
        <div class="row mb-4">
          <label
            for="addressLine1Label"
            class="col-sm-3 col-form-label form-label"
            >Address</label
          >

          <div class="col-sm-9">
            <input
              v-model.lazy="v$.personalInformation.address.$model"
              type="text"
              class="form-control"
              name="addressLine1"
              id="addressLine1Label"
              placeholder="Your address"
              aria-label="Your address"
            />
          </div>
        </div>
        <!-- End Form -->

        <!-- Form -->
        <div class="row mb-4">
          <label for="locationLabel" class="col-sm-3 col-form-label form-label"
            >Location</label
          >

          <div class="col-sm-9">
            <div class="mb-3">
              <input
                v-model.lazy="v$.personalInformation.city.$model"
                type="text"
                class="form-control"
                name="city"
                id="cityLabel"
                placeholder="City"
                aria-label="City"
              />
            </div>
            <input
              v-model.lazy="v$.personalInformation.state.$model"
              type="text"
              class="form-control"
              name="state"
              id="stateLabel"
              placeholder="State"
              aria-label="State"
            />
          </div>
        </div>
        <!-- End Form -->

        <!-- Form -->
        <div class="row mb-4">
          <label for="zipCodeLabel" class="col-sm-3 col-form-label form-label"
            >Zip code <i class="bi-question-circle text-body ms-1"></i
          ></label>

          <div class="col-sm-9">
            <input
              v-model.lazy="v$.personalInformation.zipcode.$model"
              type="text"
              class="js-input-mask form-control"
              name="zipCode"
              id="zipCodeLabel"
              placeholder="Your zip code"
              aria-label="Your zip code"
            />
          </div>
        </div>
        <!-- End Form -->
      </div>
    </template>

    <template v-slot:cardfooter>
      <div class="ml-auto">
        <button
          type="button"
          class="btn btn-primary"
          id="step-2-button"
          @click="formSubmit"
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
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import {defineProps, reactive, defineEmits} from 'vue';
import {useAuthStore} from '../../stores/auth';

const emit = defineEmits(['next-step']);
const store = useAuthStore();

const props = defineProps({
  applicant: Object
});

const state = reactive({
  personalInformation: {
    firstname: props.applicant.firstname,
    lastname: props.applicant.lastname,
    email: props.applicant.email,
    phoneNumber: props.applicant.phonenumber,
    address: props.applicant.address,
    city: props.applicant.city,
    state: props.applicant.state,
    zipcode: props.applicant.zipcode,
    // facebook:"",
    // twitter:"",
    // instagram:""
  },
  errorMessage: "",
  submissionError: false,
});


const validationRules = {
  personalInformation: {
    firstname: {
      required: helpers.withMessage("This field cannot be empty", required),
    },
    lastname: {
      required: helpers.withMessage("This field cannot be empty", required),
    },
    email: {
      required: helpers.withMessage("This field cannot be empty", required),
    },
    phoneNumber: {
      required: helpers.withMessage("This field cannot be empty", required),
    },
    address: {
      required: helpers.withMessage("This field cannot be empty", required),
    },
    city: {
      required: helpers.withMessage("This field cannot be empty", required),
    },
    state: {
      required: helpers.withMessage("This field cannot be empty", required),
    },
    zipcode: {
      required: helpers.withMessage("This field cannot be empty", required),
    },
    facebook: {},
    twitter: {},
    instagram: {},
  }
};

const v$ = useVuelidate(validationRules, state);

async function formSubmit() {
  if (v$.$invalid) {
    state.errorMessage = "Form has errors or is missing input.";
    state.submissionError = true;
  } else {
    state.submissionError = false;
    const token =
      store.getToken ||
      Cookies.get("com.ajobs.applicant");

    const result = await fetch(
      import.meta.env.VITE_AJ_API_PATH + "/applicant/update-account",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        // credentials: "include",
        body: JSON.stringify({
          firstname: state.personalInformation.firstname,
          lastname: state.personalInformation.lastname,
          email: state.personalInformation.email,
          phonenumber: state.personalInformation.phoneNumber,
          address: state.personalInformation.address,
          city: state.personalInformation.city,
          state: state.personalInformation.state,
          zipcode: state.personalInformation.zipcode,
          // facebook:  this.v$.personalInformation.facebook.$model,
          // twitter: this.v$.personalInformation.twitter.$model,
          // instagram: this.v$.personalInformation.instagram.$model
        }),
      }
    );

    if (result.ok) {
      state.submissionError = false;
      store.setRegistrationStep("job-preferences");
      emit("next-step", "job-preferences");
    } else {
      state.submissionError = true;
      state.errorMessage = (await result.json()).message;
    }
  }
}
</script>



<style lang="scss" scoped></style>
