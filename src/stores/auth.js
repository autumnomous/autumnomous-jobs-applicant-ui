import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useLocalStorage } from "@vueuse/core";
import Cookies from "js-cookie";

export const useAuthStore = defineStore("auth", () => {
  // state
  const token = useLocalStorage("token", "");
  const registrationStep = useLocalStorage("registrationstep", "");

  // getters

  const getToken = computed(() => {
    return token.value;
  });

  const getRegistrationStep = computed(() => {
    return registrationStep.value;
  });

  const isAuthenticated = computed(() => {
    return !!token.value;
  });

  // actions

  function setToken(value) {
    token.value = value;
  }

  function clearToken() {
    token.value = "";
  }

  function setRegistrationStep(value) {
    registrationStep.value = value;
  }

  async function login(email, password) {
    const response = await fetch(
      import.meta.env.VITE_AJ_API_PATH + "/applicant/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_AJ_API_KEY,
        },
        //   credentials: "include",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      setToken(data.token);
      setRegistrationStep(data.registrationstep);

      Cookies.set("com.ajobs.applicant", data.token, {
        expires: 7,
        secure: true,
        sameSite: "none",
      });
    } else {
      const error = new Error(
        data.message || "Failed to authenticate. Check your login data."
      );
      throw error;
    }
  }

  async function logout() {}

  return {
    getToken,
    getRegistrationStep,
    isAuthenticated,
    clearToken,
    setToken,
    setRegistrationStep,
    login,
    logout,
  };
});
