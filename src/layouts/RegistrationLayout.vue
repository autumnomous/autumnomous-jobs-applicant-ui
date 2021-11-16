<template>
     <!-- ========== HEADER ========== -->
  <header id="header" class="header header-bg-transparent header-abs-top">
    <div class="navbar-brand">
      <img src="../../public/assets/svg/logos/logo.svg" alt="Logo">
    </div>
  </header>
  <!-- ========== END HEADER ========== -->
  <main>
      <slot/>
  </main>

  <footer class="bg-dark">
  <div class="container">
    <div class="space-top-2 space-bottom-1 space-bottom-lg-2">
      <div class="row justify-content-lg-between">
        <div class="col-lg-3 ml-lg-auto mb-5 mb-lg-0">
          <!-- Logo -->
          <div class="mb-4">
            <a href="" aria-label="Front">
              <img class="brand" src="../../public/assets/svg/logos/logo-white.svg" alt="Logo">
            </a>
          </div>
          <!-- End Logo -->

          <!-- Nav Link -->
          <ul class="nav nav-sm nav-x-0 nav-white flex-column">
            <li class="nav-item">
              <a class="nav-link media" href="javascript:;">
                  <span class="media">
                    <span class="fas fa-location-arrow mt-1 mr-2"></span>
                    <span class="media-body">
                      153 Williamson Plaza, Maggieberg
                    </span>
                  </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link media" href="tel:1-062-109-9222">
                  <span class="media">
                    <span class="fas fa-phone-alt mt-1 mr-2"></span>
                    <span class="media-body">
                      +1 (062) 109-9222
                    </span>
                  </span>
              </a>
            </li>
          </ul>
          <!-- End Nav Link -->
        </div>

        <div class="col-6 col-md-3 col-lg mb-5 mb-lg-0">

        </div>

        <div class="col-6 col-md-3 col-lg mb-5 mb-lg-0">

        </div>

        <div class="col-6 col-md-3 col-lg">
        </div>

        <div class="col-6 col-md-3 col-lg">
    
        </div>
      </div>
    </div>

    <hr class="opacity-xs my-0">

    <div class="space-1">
      <div class="row align-items-md-center mb-7">
        <div class="col-md-6 mb-4 mb-md-0">
     
        </div>

      
      </div>

      <!-- Copyright -->
      <div class="w-md-75 text-lg-center mx-lg-auto">
        <p class="text-white opacity-sm small">&copy; Front. 2020 Htmlstream. All rights reserved.</p>
        <p class="text-white opacity-sm small">When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</p>
      </div>
      <!-- End Copyright -->
    </div>
  </div>
</footer>

</template>