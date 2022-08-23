<template>
  <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
    <div
      class="container space-top-1 space-top-lg-2 space-bottom-2 space-bottom-lg-3"
    >
      <form class="js-step-form" enctype="multipart/form-data">
        <div class="row">
          <div id="stickyBlockStartPoint" class="col-lg-4">
            <div class="js-sticky-block">
              <ul
                id="uploadResumeStepFormProgress"
                class="js-step-progress step step-icon-xs step-border-last-0 mt-5"
              >
                <li class="step-item">
                  <div class="step-content-wrapper">
                    <span class="step-icon step-icon-soft-dark">1</span>
                    <div class="step-content">
                      <span class="step-title">Basics</span>
                      <span class="step-title-description step-text"
                        >General info about you</span
                      >
                    </div>
                  </div>
                </li>

                <li class="step-item">
                  <a class="step-content-wrapper">
                    <span class="step-icon step-icon-soft-dark">2</span>
                    <div class="step-content">
                      <span class="step-title">Education</span>
                      <span class="step-title-description step-text"
                        >Add education info</span
                      >
                    </div>
                  </a>
                </li>

                <li class="step-item">
                  <a class="step-content-wrapper">
                    <span class="step-icon step-icon-soft-dark">3</span>
                    <div class="step-content">
                      <span class="step-title">Work experience</span>
                      <span class="step-title-description step-text"
                        >Add work experience</span
                      >
                    </div>
                  </a>
                </li>

                <li class="step-item">
                  <a class="step-content-wrapper">
                    <span class="step-icon step-icon-soft-dark">4</span>
                    <div class="step-content">
                      <span class="step-title">Skills</span>
                      <span class="step-title-description step-text"
                        >Add skills</span
                      >
                    </div>
                  </a>
                </li>

                <li class="step-item">
                  <a class="step-content-wrapper">
                    <span class="step-icon step-icon-soft-dark">5</span>
                    <div class="step-content">
                      <span class="step-title">Job type</span>
                      <span class="step-title-description step-text"
                        >The type of job you are looking for</span
                      >
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="formContainer" class="col-lg-8" v-show="!formSubmitted">
            <!-- Content Step Form -->
            <div id="postJobStepFormContent">
              <component
                :is="state.activeStep"
                @next-step="nextStep"
                :applicant="applicant"
                :active="state.activeStep"
              >
              </component>
            </div>
            <!-- End Content Step Form -->

            <!-- Sticky Block End Point -->
            <div id="stickyBlockEndPoint"></div>
          </div>
        </div>
      </form>
    </div>
  </main>
  <!-- ========== END MAIN CONTENT ========== -->
</template>

<script setup>
import { markRaw, reactive } from "vue";
import TheBasics from "../components/upload-resume/TheBasics.vue";
import Cookies from "js-cookie";

const state = reactive({
  steps: ["the-basics", "education", "work-experience", "skills", "job-type"],
  activeStep: null,
  applicant: {},
  token: "",
  errorMessage: "",
  submissionError: false,
  formSubmitted: false,
});

state.token = Cookies.get("com.ajobs.applicant");
(async () => {
  state.applicant = await fetch(
    import.meta.env.VITE_AJ_API_PATH + "/applicant/get",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + state.token,
      },
    }
  ).then((result) => {
    if (!result.ok) {
      console.log(result);
      return result;
    }
    return result.json();
  });
})();

function nextStep(nextStep) {
  const lookup = {
    "the-basics": TheBasics,
    education: null,
    "work-experience": null,
    skills: null,
    "job-type": null,
  };
  state.activeStep = markRaw(lookup[nextStep]);
}

nextStep("the-basics");
</script>

<style lang="scss" scoped></style>
