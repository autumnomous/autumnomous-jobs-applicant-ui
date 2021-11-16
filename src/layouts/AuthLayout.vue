<template>
     <!-- ========== HEADER ========== -->
  <header id="header" class="header header-bg-transparent header-abs-top">
    <div class="header-section">
      <div id="logoAndNav" class="container-fluid">
        <!-- Nav -->
        <nav class="navbar navbar-expand header-navbar">
          <!-- White Logo -->
          <router-link class="d-none d-lg-flex navbar-brand header-navbar-brand" to="/" aria-label="Front">
            <img src="../../public/assets/svg/logos/logo-white.svg" alt="Logo">
          </router-link>
          <!-- End White Logo -->

          <!-- Default Logo -->
          <router-link class="d-flex d-lg-none navbar-brand header-navbar-brand header-navbar-brand-collapsed" to="/" aria-label="Front">
            <img src="../../public/assets/svg/logos/logo.svg" alt="Logo">
          </router-link>
          <!-- End Default Logo -->

          <!-- Button -->
          <div class="ml-auto">
            <router-link class="btn btn-sm btn-link text-body" to="/">
              <i class="fas fa-angle-left fa-sm mr-1"></i> Go to main
            </router-link>
          </div>
          <!-- End Button -->
        </nav>
        <!-- End Nav -->
      </div>
    </div>
  </header>
  <!-- ========== END HEADER ========== -->
  <main>
      <slot/>
  </main>
</template>