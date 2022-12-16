<template>
  <the-card id="update-password" :active="true">
    <template v-slot:cardheader>{{ props.headerText }}</template>
    <template v-slot:cardbody>
      <alert-error v-if="state.submissionError" :message="state.errorMessage"></alert-error>

      <div class="form-group">
        <label for="currentpassword" class="input-label">Current Password</label>

        <input
          v-model.lazy="v$.password.current.$model"
          type="password"
          class="form-control"
          name="currentpassword"
          id="currentpassword"
          aria-label="Current Password"
          :class="{ 'is-invalid': v$.password.current.$error }"
        />

        <div
          class="input-errors"
          v-for="error of v$.password.current.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <!-- End Form Group -->
      <div class="form-group">
        <label for="newpassword" class="input-label">New Password</label>

        <input
          v-model.lazy="v$.password.new.$model"
          type="password"
          class="form-control"
          name="newpassword"
          id="newpassword"
          aria-label="New Password"
          :class="{ 'is-invalid': v$.password.new.$error }"
        />
        <span class="text-muted font-size-1"
          >Password should be at least 6 characters long and contain a mix of
          letters, numbers, and special characters.</span
        >
        <div
          class="input-errors"
          v-for="error of v$.password.new.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <!-- End Form Group -->
      <div class="form-group">
        <label for="confirmpassword" class="input-label"
          >Confirm New Password</label
        >

        <input
          v-model.lazy="v$.password.confirm.$model"
          type="password"
          class="form-control"
          name="confirmpassword"
          id="confirmpassword"
          aria-label="Job Title"
          :class="{ 'is-invalid': v$.password.confirm.$error }"
        />
        <div
          class="input-errors"
          v-for="error of v$.password.confirm.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <!-- End Form Group -->
    </template>

    <template v-slot:cardfooter>
      <div class="ml-auto">
        <button
          type="button"
          class="btn btn-primary"
          id="change-password-button"
          @click="formSubmit"
        >
          {{ buttonText }}<i class="fas fa-angle-right ml-1"> </i>
        </button>
      </div>
    </template>
  </the-card>
</template>


<script setup>
import AlertError from "../ui/AlertError.vue";
import TheCard from "../ui/TheCard.vue";
import useVuelidate from "@vuelidate/core";
import {
  helpers,
  required,
  minLength,
  sameAs,
  url,
} from "@vuelidate/validators";
import {reactive, computed, defineProps, defineEmits} from 'vue';
import {useAuthStore} from '../../stores/auth';
import Cookies from 'js-cookie';

const emit = defineEmits(['next-step']);
const store = useAuthStore();

const props = defineProps({
  buttonText: {
    type: String,
    default: "Save and continue",
  },
  headerText: {
    type: String,
    default: "Update Password",
  },
  emitNextStep: {
    type: Boolean,
    default: true,
  },
});

const state = reactive({
  password: {
    current: "",
    new: "",
    confirm: "",
  },
  errorMessage: "",
  submissionError: false,
  formSubmitted: false,
});

const passwordConfirmRef = computed(()=> state.password.confirm);
const validationRules = {
    password: {
      current: {
        required: helpers.withMessage("This field cannot be empty", required),
      },
      new: {
        required: helpers.withMessage("This field cannot be empty", required),
        minLength: helpers.withMessage(
          "Password must be at least 6 characters long.",
          minLength(6)
        ),

        containsUppercase: helpers.withMessage(
          "Password must contain at least 1 uppercase letter.",
          function (value) {
            return /[A-Z]/.test(value);
          }
        ),
        containsLowercase: helpers.withMessage(
          "Password must contain at least 1 lowercase letter.",
          function (value) {
            return /[a-z]/.test(value);
          }
        ),
        containsNumber: helpers.withMessage(
          "Password must contain at least 1 number.",
          function (value) {
            return /[0-9]/.test(value);
          }
        ),
        containsSpecial: helpers.withMessage(
          "Password must contain at least one of the following: #?!@$%^&*- .",
          function (value) {
            return /[#?!@$%^&*-]/.test(value);
          }
        ),
      },
      confirm: {
        required: helpers.withMessage("This field cannot be empty", required),
        sameAsPassword: helpers.withMessage(
          "Must match the New Password field.",
          sameAs(passwordConfirmRef)
        ),
      },
    }
}

const v$ = useVuelidate(validationRules, state);

async function formSubmit() {
  if (v$.$invalid) {
    state.errorMessage = "Form has errors or is missing input.";
    state.submissionError = true;
  } else {
    const token =
      store.getToken ||
      Cookies.get("com.ajobs.applicant");
    const result = await fetch(
      import.meta.env.VITE_AJ_API_PATH + "/applicant/update-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        // credentials: "include",
        body: JSON.stringify({
          newpassword: state.password.new,
          password:state.password.current,
        }),
      }
    );

    if(result){
      if (result.ok) {
        state.submissionError = false;
        
        if (props.emitNextStep) {
          store.setRegistrationStep("personal-information");
          emit("next-step", "personal-information");
        } else {
          state.password.new = "";
          state.password.current = "";
          this.password.confirm = "";
        }
      } else {
        // TODO: return a helpful message if the current password is incorrect
        state.submissionError = true;
        state.errorMessage = (await result.json()).message;

      }
    }
    
  }
}

</script>


<style lang="scss" scoped></style>
