<template>
  <div class="home">
    <main id="content" role="main">
      <!-- Hero Section -->
      <div
        class="position-relative gradient-x-three-sm-primary rounded-lg space-top-md-1 space-bottom-md-2 mx-md-10"
      >
        <div
          class="container position-relative space-top-2 space-top-lg-3 space-bottom-1"
        >
          <div class="row position-relative z-index-2">
            <div class="col-lg-8">
              <!-- Title -->
              <div class="w-lg-80 text-center text-lg-left mb-5 mb-lg-7">
                <h1 class="display-4">
                  Find the most<br /><span
                    class="text-primary text-highlight-warning"
                    >exciting</span
                  >
                  startup jobs
                </h1>
              </div>
              <!-- End Title -->

              <!-- Card -->
              <div class="card p-2 mb-3">
                <!-- Input Group -->
                <div class="form-row input-group-borderless">
                  <div class="col-sm mb-2 mb-md-0">
                    <div
                      class="input-group input-group-merge input-group-borderless"
                    >
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fas fa-search"></i>
                        </div>
                      </div>

                      <input
                        type="text"
                        class="form-control"
                        placeholder="Job title, skills, or company"
                        aria-label="Job title, skills, or company"
                      />
                    </div>
                  </div>

                  <div class="col-sm d-sm-none">
                    <hr class="my-0" />
                  </div>

                  <div class="col-sm column-divider-sm mb-2 mb-md-0">
                    <div
                      class="input-group input-group-merge input-group-borderless"
                    >
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fas fa-map-marker-alt"></i>
                        </div>
                      </div>

                      <input
                        type="text"
                        class="form-control"
                        placeholder="City, state, or zip"
                        aria-label="City, state, or zip"
                      />
                    </div>
                  </div>

                  <div class="col-md-auto">
                    <button
                      type="button"
                      class="btn btn-block btn-primary px-5"
                    >
                      Search
                    </button>
                  </div>
                </div>
                <!-- End Input Group -->
              </div>
              <!-- End Card -->

              <!-- <small class="form-text">Search through over 125,000 listings</small> -->
            </div>
          </div>
          <!-- End Row -->

          <div
            class="d-none d-lg-block col-lg-6 position-lg-absolute top-0 right-0"
          >
            <img
              class="img-fluid rounded-lg"
              src="../../public/assets/img/900x900/img23.jpg"
              alt="Image Description"
            />

            <figure
              class="max-w-15rem w-100 position-absolute top-0 left-0 z-index-n1"
            >
              <div class="mt-n6 ml-n5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 335.2 335.2"
                  width="100"
                  height="100"
                >
                  <circle
                    fill="#FFC107"
                    opacity=".7"
                    cx="167.6"
                    cy="167.6"
                    r="130.1"
                  />
                </svg>
              </div>
            </figure>

            <figure
              class="max-w-15rem w-100 position-absolute bottom-0 right-0 z-index-n1"
            >
              <div class="mb-n2 ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 335.2 335.2"
                  width="120"
                  height="120"
                >
                  <circle
                    fill="none"
                    stroke="@@vars.style.color"
                    stroke-width="75"
                    cx="167.6"
                    cy="167.6"
                    r="130.1"
                  />
                </svg>
              </div>
            </figure>

            <div class="d-flex align-items-center">
              <small class="mr-1">Powered by:</small>
              <img
                class="avatar avatar-ratio"
                src="https://via.placeholder.com/10"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- End Hero Section -->

      <!-- Listing Section -->
      <div class="container space-2 space-top-lg-4 space-bottom-lg-3">
        <!-- Title -->
        <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-7">
          <h2>Explore over 2 million tech and startup job-opportunities</h2>
          <p>
            Find a job you love.
            <a class="font-weight-bold" href="#">Set your career interests.</a>
          </p>
        </div>
        <!-- End Title -->

        <!-- Listing -->
        <div class="row mb-4">
          <div class="col-sm-6 col-lg-4 mb-5">
            <!-- Card -->
            <div class="card card-bordered card-hover-shadow h-100">
              <div class="card-body">
                <div class="row mb-3">
                  <div class="col">
                    <div class="media align-items-center">
                      <img
                        class="avatar avatar-sm mr-3"
                        src="../../public/assets/svg/brands/mailchimp.svg"
                        alt="Image Description"
                      />
                      <div class="media-body">
                        <h6 class="mb-0">
                          <a class="text-dark" href="employer.html"
                            >Mailchimp</a
                          >
                          <img
                            class="avatar avatar-xss ml-1"
                            src="../../public/assets/svg/illustrations/top-vendor.svg"
                            alt="Review rating"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Claimed profile"
                          />
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div class="col-auto">
                    <!-- Checkbbox Bookmark -->
                    <div class="custom-control custom-checkbox-bookmark">
                      <input
                        type="checkbox"
                        id="checkboxBookmark1"
                        class="custom-control-input custom-checkbox-bookmark-input"
                      />
                      <label
                        class="custom-checkbox-bookmark-label"
                        for="checkboxBookmark1"
                      >
                        <span
                          class="custom-checkbox-bookmark-default"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Save this job"
                        >
                          <i class="far fa-star"></i>
                        </span>
                        <span
                          class="custom-checkbox-bookmark-active"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Saved"
                        >
                          <i class="fas fa-star"></i>
                        </span>
                      </label>
                    </div>
                    <!-- End Checkbbox Bookmark -->
                  </div>
                </div>
                <!-- End Row -->

                <h3 class="mb-3">
                  <a class="text-dark" href="employer.html"
                    >Senior B2B sales consultant</a
                  >
                </h3>

                <span class="d-block font-size-1 text-body mb-1"
                  >$125k-$135k yearly</span
                >

                <span class="badge badge-soft-info mr-2">
                  <span class="legend-indicator bg-info"></span>Remote
                </span>
              </div>

              <div class="card-footer">
                <ul class="list-inline list-separator small text-body">
                  <li class="list-inline-item">Posted 7 hours ago</li>
                  <li class="list-inline-item">Oxford</li>
                  <li class="list-inline-item">Full time</li>
                </ul>
              </div>
            </div>
            <!-- End Card -->
          </div>

          <div class="col-sm-6 col-lg-4 mb-5">
            <!-- Card -->
            <div class="card card-bordered card-hover-shadow h-100">
              <div class="card-body">
                <div class="row mb-3">
                  <div class="col">
                    <div class="media align-items-center">
                      <img
                        class="avatar avatar-sm mr-3"
                        src="../../public/assets/svg/brands/capsule.svg"
                        alt="Image Description"
                      />
                      <div class="media-body">
                        <h6 class="mb-0">
                          <a class="text-dark" href="employer.html">Capsule</a>
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div class="col-auto">
                    <!-- Checkbbox Bookmark -->
                    <div class="custom-control custom-checkbox-bookmark">
                      <input
                        type="checkbox"
                        id="checkboxBookmark2"
                        class="custom-control-input custom-checkbox-bookmark-input"
                      />
                      <label
                        class="custom-checkbox-bookmark-label"
                        for="checkboxBookmark2"
                      >
                        <span
                          class="custom-checkbox-bookmark-default"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Save this job"
                        >
                          <i class="far fa-star"></i>
                        </span>
                        <span
                          class="custom-checkbox-bookmark-active"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Saved"
                        >
                          <i class="fas fa-star"></i>
                        </span>
                      </label>
                    </div>
                    <!-- End Checkbbox Bookmark -->
                  </div>
                </div>
                <!-- End Row -->

                <h3 class="mb-3">
                  <a class="text-dark" href="employer.html"
                    >Office assistant/Social media assistant</a
                  >
                </h3>

                <span class="d-block font-size-1 text-body mb-1"
                  >$50-$135 hourly</span
                >
              </div>

              <div class="card-footer">
                <ul class="list-inline list-separator small text-body">
                  <li class="list-inline-item">Posted 21 hours ago</li>
                  <li class="list-inline-item">Newcastle</li>
                  <li class="list-inline-item">Part time</li>
                </ul>
              </div>
            </div>
            <!-- End Card -->
          </div>

          <div class="col-sm-6 col-lg-4 mb-5">
            <!-- Card -->
            <div class="card card-bordered card-hover-shadow h-100">
              <div class="card-body">
                <div class="row mb-3">
                  <div class="col">
                    <div class="media align-items-center">
                      <img
                        class="avatar avatar-sm mr-3"
                        src="../../public/assets/svg/brands/spec.svg"
                        alt="Image Description"
                      />
                      <div class="media-body">
                        <h6 class="mb-0">
                          <a class="text-dark" href="employer.html">Spec</a>
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div class="col-auto">
                    <!-- Checkbbox Bookmark -->
                    <div class="custom-control custom-checkbox-bookmark">
                      <input
                        type="checkbox"
                        id="checkboxBookmark3"
                        class="custom-control-input custom-checkbox-bookmark-input"
                      />
                      <label
                        class="custom-checkbox-bookmark-label"
                        for="checkboxBookmark3"
                      >
                        <span
                          class="custom-checkbox-bookmark-default"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Save this job"
                        >
                          <i class="far fa-star"></i>
                        </span>
                        <span
                          class="custom-checkbox-bookmark-active"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Saved"
                        >
                          <i class="fas fa-star"></i>
                        </span>
                      </label>
                    </div>
                    <!-- End Checkbbox Bookmark -->
                  </div>
                </div>
                <!-- End Row -->

                <h3 class="mb-3">
                  <a class="text-dark" href="employer.html"
                    >Marketing and Communications Manager</a
                  >
                </h3>

                <span class="d-block font-size-1 text-body mb-1"
                  >$5k monthly</span
                >
              </div>

              <div class="card-footer">
                <ul class="list-inline list-separator small text-body">
                  <li class="list-inline-item">Posted 1 day ago</li>
                  <li class="list-inline-item">London</li>
                  <li class="list-inline-item">Full time</li>
                </ul>
              </div>
            </div>
            <!-- End Card -->
          </div>

          <div class="col-sm-6 col-lg-4 mb-5">
            <!-- Card -->
            <div class="card card-bordered card-hover-shadow h-100">
              <div class="card-body">
                <div class="row mb-3">
                  <div class="col">
                    <div class="media align-items-center">
                      <img
                        class="avatar avatar-sm mr-3"
                        src="../../public/assets/svg/brands/prosperops.svg"
                        alt="Image Description"
                      />
                      <div class="media-body">
                        <h6 class="mb-0">
                          <a class="text-dark" href="employer.html"
                            >Prosperops</a
                          >
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div class="col-auto">
                    <!-- Checkbbox Bookmark -->
                    <div class="custom-control custom-checkbox-bookmark">
                      <input
                        type="checkbox"
                        id="checkboxBookmark4"
                        class="custom-control-input custom-checkbox-bookmark-input"
                      />
                      <label
                        class="custom-checkbox-bookmark-label"
                        for="checkboxBookmark4"
                      >
                        <span
                          class="custom-checkbox-bookmark-default"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Save this job"
                        >
                          <i class="far fa-star"></i>
                        </span>
                        <span
                          class="custom-checkbox-bookmark-active"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Saved"
                        >
                          <i class="fas fa-star"></i>
                        </span>
                      </label>
                    </div>
                    <!-- End Checkbbox Bookmark -->
                  </div>
                </div>
                <!-- End Row -->

                <h3 class="mb-3">
                  <a class="text-dark" href="employer.html"
                    >Senior backend developer</a
                  >
                </h3>

                <span class="d-block font-size-1 text-body mb-1"
                  >$75k-$85k yearly</span
                >

                <span class="badge badge-soft-info mr-2">
                  <span class="legend-indicator bg-info"></span>Remote
                </span>
              </div>

              <div class="card-footer">
                <ul class="list-inline list-separator small text-body">
                  <li class="list-inline-item">Posted 1 day ago</li>
                  <li class="list-inline-item">Liverpool</li>
                  <li class="list-inline-item">Full time</li>
                </ul>
              </div>
            </div>
            <!-- End Card -->
          </div>

          <div class="col-sm-6 col-lg-4 mb-5">
            <!-- Card -->
            <div class="card card-bordered card-hover-shadow h-100">
              <div class="card-body">
                <div class="row mb-3">
                  <div class="col">
                    <div class="media align-items-center">
                      <img
                        class="avatar avatar-sm mr-3"
                        src="../../public/assets/svg/brands/figma.svg"
                        alt="Image Description"
                      />
                      <div class="media-body">
                        <h6 class="mb-0">
                          <a class="text-dark" href="employer.html">Figma</a>
                          <img
                            class="avatar avatar-xss ml-1"
                            src="../../public/assets/svg/illustrations/top-vendor.svg"
                            alt="Review rating"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Claimed profile"
                          />
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div class="col-auto">
                    <!-- Checkbbox Bookmark -->
                    <div class="custom-control custom-checkbox-bookmark">
                      <input
                        type="checkbox"
                        id="checkboxBookmark5"
                        class="custom-control-input custom-checkbox-bookmark-input"
                      />
                      <label
                        class="custom-checkbox-bookmark-label"
                        for="checkboxBookmark5"
                      >
                        <span
                          class="custom-checkbox-bookmark-default"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Save this job"
                        >
                          <i class="far fa-star"></i>
                        </span>
                        <span
                          class="custom-checkbox-bookmark-active"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Saved"
                        >
                          <i class="fas fa-star"></i>
                        </span>
                      </label>
                    </div>
                    <!-- End Checkbbox Bookmark -->
                  </div>
                </div>
                <!-- End Row -->

                <h3 class="mb-3">
                  <a class="text-dark" href="employer.html"
                    >Senior product manager</a
                  >
                </h3>

                <span class="d-block font-size-1 text-body mb-1"
                  >$76k-$98k yearly</span
                >
              </div>

              <div class="card-footer">
                <ul class="list-inline list-separator small text-body">
                  <li class="list-inline-item">Posted 2 days ago</li>
                  <li class="list-inline-item">London</li>
                  <li class="list-inline-item">Full time</li>
                </ul>
              </div>
            </div>
            <!-- End Card -->
          </div>

          <div class="col-sm-6 col-lg-4 mb-5">
            <!-- Card -->
            <div class="card card-bordered card-hover-shadow h-100">
              <div class="card-body">
                <div class="row mb-3">
                  <div class="col">
                    <div class="media align-items-center">
                      <img
                        class="avatar avatar-sm mr-3"
                        src="../../public/assets/svg/brands/guideline.svg"
                        alt="Image Description"
                      />
                      <div class="media-body">
                        <h6 class="mb-0">
                          <a class="text-dark" href="employer.html"
                            >Guideline</a
                          >
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div class="col-auto">
                    <!-- Checkbbox Bookmark -->
                    <div class="custom-control custom-checkbox-bookmark">
                      <input
                        type="checkbox"
                        id="checkboxBookmark6"
                        class="custom-control-input custom-checkbox-bookmark-input"
                      />
                      <label
                        class="custom-checkbox-bookmark-label"
                        for="checkboxBookmark6"
                      >
                        <span
                          class="custom-checkbox-bookmark-default"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Save this job"
                        >
                          <i class="far fa-star"></i>
                        </span>
                        <span
                          class="custom-checkbox-bookmark-active"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Saved"
                        >
                          <i class="fas fa-star"></i>
                        </span>
                      </label>
                    </div>
                    <!-- End Checkbbox Bookmark -->
                  </div>
                </div>
                <!-- End Row -->

                <h3 class="mb-3">
                  <a class="text-dark" href="employer.html">iOS Engineer</a>
                </h3>

                <span class="d-block font-size-1 text-body mb-1"
                  >$500-$1000 weekly</span
                >

                <span class="badge badge-soft-info mr-2">
                  <span class="legend-indicator bg-info"></span>Remote
                </span>
              </div>

              <div class="card-footer">
                <ul class="list-inline list-separator small text-body">
                  <li class="list-inline-item">Posted 3 days ago</li>
                  <li class="list-inline-item">Manchester</li>
                  <li class="list-inline-item">Part time</li>
                </ul>
              </div>
            </div>
            <!-- End Card -->
          </div>
        </div>
        <!-- End Listing -->

        <div class="text-center">
          <a class="btn btn-link" href="job-list.html"
            >View all jobs <i class="fas fa-angle-right ml-1"></i
          ></a>
        </div>
      </div>
      <!-- End Listing Section -->

      <!-- Testimonials Section -->
      <div
        class="overflow-hidden gradient-x-three-sm-primary rounded-lg mx-md-10"
      >
        <div class="container space-2 space-lg-3">
          <div class="row justify-content-center align-items-lg-center">
            <div class="col-10 col-sm-8 col-lg-5 mb-11 mb-lg-0">
              <div class="position-relative">
                <img
                  class="img-fluid rounded-lg"
                  src="../../public/assets/img/900x900/img24.jpg"
                  alt="Image Description"
                />

                <!-- SVG Elements -->
                <figure
                  class="max-w-15rem w-100 position-absolute top-0 left-0 z-index-n1"
                >
                  <div class="mt-n6 ml-n5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 335.2 335.2"
                      width="100"
                      height="100"
                    >
                      <circle
                        fill="#FFC107"
                        opacity=".7"
                        cx="167.6"
                        cy="167.6"
                        r="130.1"
                      />
                    </svg>
                  </div>
                </figure>

                <figure
                  class="max-w-15rem w-100 position-absolute bottom-0 right-0 z-index-n1"
                >
                  <div class="mb-n6 ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 335.2 335.2"
                      width="120"
                      height="120"
                    >
                      <circle
                        fill="none"
                        stroke="@@vars.style.color"
                        stroke-width="75"
                        cx="167.6"
                        cy="167.6"
                        r="130.1"
                      />
                    </svg>
                  </div>
                </figure>
                <!-- End SVG Elements -->
              </div>
            </div>

            <div class="col-lg-7">
              <div class="pl-lg-6">
                <img
                  class="avatar mb-3"
                  src="../../public/assets/svg/brands/capsule.svg"
                  alt="Image Description"
                />

                <blockquote class="h2 mb-5">
                  Save time and effort in your hiring journey. Front's simple
                  and powerful tools let you source, screen, and hire faster.
                </blockquote>

                <div class="mb-5">
                  <h5 class="mb-0">Anna Lowry</h5>
                  <small class="d-block">HR Director</small>
                </div>

                <div class="row">
                  <div class="col-sm-6 col-md-4 mb-3 mb-sm-0">
                    <h2 class="mb-1">59%</h2>
                    <small class="d-block"
                      >in budget saved on unconverting ads</small
                    >
                  </div>

                  <div class="col-sm-6 col-md-4 mb-3 mb-sm-0">
                    <h2 class="mb-1">27%</h2>
                    <small class="d-block"
                      >in time saved on campaign management</small
                    >
                  </div>

                  <div class="col-sm-6 col-md-4">
                    <h2 class="mb-1">2.1x</h2>
                    <small class="d-block"
                      >more split tests and experiments</small
                    >
                  </div>
                </div>
                <!-- End Row -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Testimonials Section -->

      <!-- Listing Section -->
      <div class="container space-2 space-lg-3">
        <!-- Title -->
        <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-7">
          <h2>Explore Startups</h2>
          <p>
            Find a job you love.
            <a class="font-weight-bold" href="#">Set your career interests.</a>
          </p>
        </div>
        <!-- End Title -->

        <div class="row">
          <div class="col-sm-6 col-lg-4 col-xl-3 mb-3 mb-sm-5">
            <!-- Card -->
            <a
              class="card card-bordered card-hover-shadow h-100"
              href="job-overview.html"
            >
              <div class="card-body">
                <div class="media align-items-center">
                  <div class="media-body">
                    <h5 class="text-hover-primary mb-0">Management</h5>
                    <small class="text-body">4 job positions</small>
                  </div>

                  <div class="text-muted text-hover-primary pl-2 ml-auto">
                    <i class="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </a>
            <!-- End Card -->
          </div>

          <div class="col-sm-6 col-lg-4 col-xl-3 mb-3 mb-sm-5">
            <!-- Card -->
            <a
              class="card card-bordered card-hover-shadow h-100"
              href="job-overview.html"
            >
              <div class="card-body">
                <div class="media">
                  <div class="media-body">
                    <h5 class="text-hover-primary mb-0">
                      Software Development
                    </h5>
                    <small class="text-body">26 job positions</small>
                  </div>

                  <div class="align-self-center pl-2 ml-auto">
                    <span class="text-muted text-hover-primary">
                      <i class="fas fa-angle-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <!-- End Card -->
          </div>

          <div class="col-sm-6 col-lg-4 col-xl-3 mb-3 mb-sm-5">
            <!-- Card -->
            <a
              class="card card-bordered card-hover-shadow h-100"
              href="job-overview.html"
            >
              <div class="card-body">
                <div class="media">
                  <div class="media-body">
                    <h5 class="text-hover-primary mb-0">
                      Arts &amp; Entertainment
                    </h5>
                    <small class="text-body">9 job positions</small>
                  </div>

                  <div class="align-self-center pl-2 ml-auto">
                    <span class="text-muted text-hover-primary">
                      <i class="fas fa-angle-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <!-- End Card -->
          </div>

          <div class="col-sm-6 col-lg-4 col-xl-3 mb-3 mb-sm-5">
            <!-- Card -->
            <a
              class="card card-bordered card-hover-shadow h-100"
              href="job-overview.html"
            >
              <div class="card-body">
                <div class="media">
                  <div class="media-body">
                    <h5 class="text-hover-primary mb-0">Accounting</h5>
                    <small class="text-body">11 job positions</small>
                  </div>

                  <div class="align-self-center pl-2 ml-auto">
                    <span class="text-muted text-hover-primary">
                      <i class="fas fa-angle-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <!-- End Card -->
          </div>

          <div class="col-sm-6 col-lg-4 col-xl-3 mb-3 mb-sm-5">
            <!-- Card -->
            <a
              class="card card-bordered card-hover-shadow h-100"
              href="job-overview.html"
            >
              <div class="card-body">
                <div class="media">
                  <div class="media-body">
                    <h5 class="text-hover-primary mb-0">UI Designer</h5>
                    <small class="text-body">37 job positions</small>
                  </div>

                  <div class="align-self-center pl-2 ml-auto">
                    <span class="text-muted text-hover-primary">
                      <i class="fas fa-angle-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <!-- End Card -->
          </div>

          <div class="col-sm-6 col-lg-4 col-xl-3 mb-3 mb-sm-5">
            <!-- Card -->
            <a
              class="card card-bordered card-hover-shadow h-100"
              href="job-overview.html"
            >
              <div class="card-body">
                <div class="media">
                  <div class="media-body">
                    <h5 class="text-hover-primary mb-0">Apps</h5>
                    <small class="text-body">2 job positions</small>
                  </div>

                  <div class="align-self-center pl-2 ml-auto">
                    <span class="text-muted text-hover-primary">
                      <i class="fas fa-angle-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <!-- End Card -->
          </div>

          <div class="col-sm-6 col-lg-4 col-xl-3 mb-3 mb-sm-5">
            <!-- Card -->
            <a
              class="card card-bordered card-hover-shadow h-100"
              href="job-overview.html"
            >
              <div class="card-body">
                <div class="media">
                  <div class="media-body">
                    <h5 class="text-hover-primary mb-0">Content Writer</h5>
                    <small class="text-body">10 job positions</small>
                  </div>

                  <div class="align-self-center pl-2 ml-auto">
                    <span class="text-muted text-hover-primary">
                      <i class="fas fa-angle-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <!-- End Card -->
          </div>

          <div class="col-sm-6 col-lg-4 col-xl-3 mb-3 mb-sm-5">
            <!-- Card -->
            <a
              class="card card-bordered card-hover-shadow h-100"
              href="job-overview.html"
            >
              <div class="card-body">
                <div class="media">
                  <div class="media-body">
                    <h5 class="text-hover-primary mb-0">Analytics</h5>
                    <small class="text-body">14 job positions</small>
                  </div>

                  <div class="align-self-center pl-2 ml-auto">
                    <span class="text-muted text-hover-primary">
                      <i class="fas fa-angle-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <!-- End Card -->
          </div>
        </div>
        <!-- End Row -->

        <div class="text-center">
          <a class="btn btn-link" href="job-list.html"
            >View all startups <i class="fas fa-angle-right ml-1"></i
          ></a>
        </div>
      </div>
      <!-- End Listing Section -->
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
};
</script>
