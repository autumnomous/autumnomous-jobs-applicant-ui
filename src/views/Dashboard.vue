<template>
  <div>
    <h3>Active Applications</h3>
  </div>

  <div>
    <h3>Bookmarked Jobs</h3>

    <Suspense>
      <JobCardList />
    </Suspense>
  </div>

  <div>
    <h3>Resumes</h3>
  </div>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";
import JobCardList from "../components/dashboard/JobCardList.vue";

const store = useAuthStore();
</script>

<style lang="scss" scoped></style>
