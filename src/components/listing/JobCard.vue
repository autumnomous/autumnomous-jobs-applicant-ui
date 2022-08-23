<template>
  <!-- Card -->
  <div class="card card-bordered">
    <div class="card-body">
      <!-- Media -->
      <div class="d-sm-flex">
        <!-- Media -->
        <div class="d-flex align-items-center align-items-sm-start mb-3">
          <div class="flex-shrink-0">
            <img
              class="avatar avatar-sm avatar-4x3"
              :src="job.companylogo"
              alt="Image Description"
            />
          </div>
          <div class="d-sm-none flex-grow-1 ms-3">
            <h6 class="card-title">
              <a class="text-dark" :href="job.companyurl">{{
                job.companyname
              }}</a>
            </h6>
          </div>
        </div>
        <!-- End Media -->

        <div class="flex-grow-1 ms-sm-3">
          <div class="row">
            <div class="col col-md-8">
              <h3 class="card-title">
                <router-link
                  class="text-dark"
                  :to="'/job-list/' + job.publicid"
                  >{{ job.title }}</router-link
                >
              </h3>
              <div class="d-none d-sm-inline-block">
                <h6 class="card-title">
                  <a class="text-dark" :href="job.companyurl">{{
                    job.companyname
                  }}</a>
                </h6>

                <p class="pt-1">{{ job.companylocation }}</p>
              </div>
            </div>
            <!-- End Col -->

            <div class="col-auto order-md-3">
              <!-- Checkbbox Bookmark -->
              <div class="form-check form-check-bookmark">
                <button @click="bookmarkJob" class="btn btn-sm">
                  <span v-if="!bookmarked" class="form-check-bookmark-default">
                    <i class="bi-star me-1"></i>
                  </span>
                  <span v-else class="form-check-bookmark-active">
                    <i class="bi-star-fill me-1"></i>
                  </span>
                </button>
              </div>
              <!-- End Checkbbox Bookmark -->
            </div>
            <!-- End Col -->

            <div class="col-12 col-md mt-3 mt-md-0">
              <span class="d-block small text-body mb-1"
                >${{ job.minsalary }}-${{ job.maxsalary }} per
                {{ job.payperiod }}</span
              >

              <span class="badge bg-soft-info text-info me-2">
                <span class="legend-indicator bg-info" v-if="job.remote"></span
                >Remote
              </span>
            </div>

            <!-- End Col -->
          </div>

          <!-- End Row -->
        </div>
        <div class="position-absolute bottom-0 end-0 mr-3 mb-7">
          <button class="btn btn-outline-primary">Apply Now</button>
        </div>
      </div>
      <!-- End Media -->
    </div>

    <div class="card-footer pt-0">
      <ul class="list-inline list-separator small text-body">
        <li class="list-inline-item">
          Posted on {{ prettyDate(job.visibledate) }}
        </li>
        <li class="list-inline-item">{{ job.jobtype }}</li>
      </ul>
    </div>
  </div>
  <!-- End Card -->
</template>

<script>
import Cookies from "js-cookie";

export default {
  props: {
    job: {
      type: Object,
    },
  },

  data() {
    return {
      bookmarked: false,
    };
  },
  methods: {
    prettyDate(dateStr) {
      if (dateStr != "") {
        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        };
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", options);
      } else {
        return "";
      }
    },
    async bookmarkJob() {
      this.bookmarked = !this.bookmarked;

      const token = Cookies.get("com.ajobs.applicant");

      if (this.bookmarked) {
        var result = await fetch(
          import.meta.env.VITE_AJ_API_PATH + "/applicant/bookmark",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
            body: JSON.stringify({
              jobid: this.job.publicid,
            }),
          }
        ).then((result) => {
          if (!result.ok) {
            console.log(result);
          }

          return result;
        });
      } else {
        var result = await fetch(
          import.meta.env.VITE_AJ_API_PATH + "/applicant/bookmark",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
            body: JSON.stringify({
              jobid: this.job.publicid,
            }),
          }
        ).then((result) => {
          if (!result.ok) {
            console.log(result);
          }

          return result;
        });
      }
      this.$emit("bookmark");
    },

    async getBookmark() {
      const token = Cookies.get("com.ajobs.applicant");
      const result = await fetch(
        import.meta.env.VITE_AJ_API_PATH + "/applicant/get/bookmark",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            jobid: this.job.publicid,
          }),
        }
      ).then((result) => {
        if (!result.ok) {
          console.log(result);
        }

        return result.json();
      });

      this.bookmarked = !!result || false;
    },
  },
  directives: {
    tooltip: {
      bind: function (el, binding) {
        $(el).tooltip({
          title: binding.value,
          placement: binding.arg,
          trigger: "hover",
        });
      },
    },
  },
  computed: {},
  created() {
    this.getBookmark();
  },
};
</script>

<style scoped></style>
