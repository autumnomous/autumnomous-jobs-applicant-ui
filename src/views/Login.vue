<template>
  <CoverRow>
    <template v-slot:sidecontent> </template>
    <alert-error v-if="state.resultError" :message="state.resultMessage"></alert-error>
    <!-- Form -->
    <form class="js-validate" @submit.prevent="state.formSubmit">
      <!-- Title -->
      <div class="mb-5 mb-md-7">
        <h1 class="h2">Welcome back</h1>
        <p>Login to manage your account.</p>
      </div>
      <!-- End Title -->

      <!-- Form Group -->
      <div class="js-form-message form-group">
        <label class="input-label" for="signinSrEmail">Email address</label>
        <input
          type="email"
          v-model="v$.login.email.$model"
          class="form-control"
          name="email"
          id="signinSrEmail"
          tabindex="1"
          placeholder="Email address"
          aria-label="Email address"
          required
          data-msg="Please enter a valid email address."
          :class="{ 'is-invalid': v$.login.email.$errors.length }"
        />
        <div
          class="input-errors"
          v-for="error of v$.login.email.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <!-- End Form Group -->

      <!-- Form Group -->
      <div class="js-form-message form-group">
        <label class="input-label" for="signinSrPassword" tabindex="0">
          <span class="d-flex justify-content-between align-items-center">
            Password
            <a
              class="link-underline text-capitalize font-weight-normal"
              href="page-recover-account.html"
              >Forgot Password?</a
            >
          </span>
        </label>
        <input
          type="password"
          v-model="v$.login.password.$model"
          class="form-control"
          name="password"
          id="signinSrPassword"
          tabindex="2"
          placeholder="********"
          aria-label="********"
          required
          data-msg="Your password is invalid. Please try again."
        />
      </div>
      <!-- End Form Group -->

      <captcha-test @captcha-done="validateCaptcha"></captcha-test>
      <!-- Button -->
      <div class="row align-items-center mb-5">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <span class="font-size-1 text-muted">Don't have an account?</span>
          <router-link
            class="font-size-1 font-weight-bold"
            to="/applicant/signup"
            >Signup</router-link
          >
        </div>

        <div class="col-sm-6 text-sm-right">
          <button type="submit" class="btn btn-primary transition-3d-hover" @click="formSubmit">
            Login
          </button>
        </div>
      </div>
      <!-- End Button -->
    </form>
    <!-- End Form -->
  </CoverRow>
</template>

<script setup>
import CoverRow from "../components/ui/auth/CoverRow.vue";
import CaptchaTest from "../components/ui/auth/CaptchaTest.vue";
import AlertError from "../components/ui/AlertError.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import useVuelidate from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";
import { useAuthStore } from "../stores/auth";
import { reactive } from "vue";
import { onMounted } from "vue";
import { defineEmits } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter();
const emit = defineEmits(["update:layout"]);
const store = useAuthStore();

const state = reactive({
  login: {
    email: "",
    password: "",
  },
  captchaResult: null,
  resultError: false,
  resultMessage: "",
});

const rules = {
  login: {
    email: { required, email },
    password: { required },
  },
};

const v$ = useVuelidate(rules, state);

function validateCaptcha(captchaResult) {
  state.captchaResult = captchaResult;
}

async function formSubmit(e) {
  try {
    if (state.captchaResult) {
      await store.login(state.login.email, state.login.password);

      if (store.getRegistrationStep != "registration-complete") {
        router.replace("/applicant/registration");
      } else {
        router.replace("/applicant/dashboard");
      }
    }
  } catch (error) {
    console.log(error)
    state.resultError = true;
    state.resultMessage =
      "Login failed, please check your email and password and try again.";
  }
}

onMounted(() => {
  emit("update:layout", AuthLayout);
});
</script>

<style></style>
