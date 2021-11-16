<template>
 <main id="content" role="main">
     <!-- Form -->
    <div class="d-flex align-items-center position-relative vh-lg-100">
      <div class="col-lg-5 col-xl-4 d-none d-lg-flex align-items-center bg-dark vh-lg-100 px-0" style="background-image: url(@@autopath/assets/svg/components/abstract-shapes-20.svg);">
        <div class="w-100 p-5">
          <slot name="sidecontent"/>
        </div>
      </div>

      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-8 col-lg-7 col-xl-6 offset-md-2 offset-lg-2 offset-xl-3 space-top-3 space-lg-0">
            <slot/>
          </div>
        </div>
      </div>
    </div>
    <!-- End Form -->
 </main>
</template>