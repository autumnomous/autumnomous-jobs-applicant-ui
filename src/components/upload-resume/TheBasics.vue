<template>
  <the-card id="upload-resume-basics" :active="true">
    <template v-slot:cardheader>{{ headerText }}</template>
    <template v-slot:cardbody>
      <alert-error v-if="submissionError" :message="errorMessage"></alert-error>

      <!-- Form -->
      <div class="mb-4">
        <label for="firstNameLabel" class="form-label">First name</label>
        <input
          v-model.lazy="v$.firstName.$model"
          type="text"
          class="form-control"
          name="firstName"
          id="firstNameLabel"
          aria-label="First Name"
        />
      </div>
      <!-- End Form -->

      <!-- Form -->
      <div class="mb-4">
        <label for="lastNameLabel" class="form-label">Last name</label>
        <input
          v-model.lazy="v$.lastName.$model"
          type="text"
          class="form-control"
          name="lastName"
          id="lastNameLabel"
          aria-label="Last Name"
        />
      </div>
      <!-- End Form -->

      <!-- Form -->
      <div class="mb-4">
        <label for="countryLabel" class="form-label">Country</label>

        <!-- Select -->
        <select id="countryLabel" class="form-select" name="countrySelect">
          <option value="AF">Afghanistan</option>
          <option value="AX">Aland Islands</option>
          <option value="AL">Albania</option>
          <option value="DZ">Algeria</option>
          <option value="AS">American Samoa</option>
          <option value="AD">Andorra</option>
          <option value="AO">Angola</option>
          <option value="AI">Anguilla</option>
          <option value="AG">Antigua and Barbuda</option>
          <option value="AR">Argentina</option>
          <option value="AM">Armenia</option>
          <option value="AW">Aruba</option>
          <option value="AU">Australia</option>
          <option value="AT">Austria</option>
          <option value="AZ">Azerbaijan</option>
          <option value="BS">Bahamas</option>
          <option value="BH">Bahrain</option>
          <option value="BD">Bangladesh</option>
          <option value="BB">Barbados</option>
          <option value="BY">Belarus</option>
          <option value="BE">Belgium</option>
          <option value="BZ">Belize</option>
          <option value="BJ">Benin</option>
          <option value="BM">Bermuda</option>
          <option value="BT">Bhutan</option>
          <option value="BO">Bolivia (Plurinational State of)</option>
          <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
          <option value="BA">Bosnia and Herzegovina</option>
          <option value="BW">Botswana</option>
          <option value="BR">Brazil</option>
          <option value="IO">British Indian Ocean Territory</option>
          <option value="BN">Brunei Darussalam</option>
          <option value="BG">Bulgaria</option>
          <option value="BF">Burkina Faso</option>
          <option value="BI">Burundi</option>
          <option value="CV">Cabo Verde</option>
          <option value="KH">Cambodia</option>
          <option value="CM">Cameroon</option>
          <option value="CA">Canada</option>
          <option value="KY">Cayman Islands</option>
          <option value="CF">Central African Republic</option>
          <option value="TD">Chad</option>
          <option value="CL">Chile</option>
          <option value="CN">China</option>
          <option value="CX">Christmas Island</option>
          <option value="CC">Cocos (Keeling) Islands</option>
          <option value="CO">Colombia</option>
          <option value="KM">Comoros</option>
          <option value="CK">Cook Islands</option>
          <option value="CR">Costa Rica</option>
          <option value="HR">Croatia</option>
          <option value="CU">Cuba</option>
          <option value="CW">Curaçao</option>
          <option value="CY">Cyprus</option>
          <option value="CZ">Czech Republic</option>
          <option value="CI">Côte d'Ivoire</option>
          <option value="CD">Democratic Republic of the Congo</option>
          <option value="DK">Denmark</option>
          <option value="DJ">Djibouti</option>
          <option value="DM">Dominica</option>
          <option value="DO">Dominican Republic</option>
          <option value="EC">Ecuador</option>
          <option value="EG">Egypt</option>
          <option value="SV">El Salvador</option>
          <option value="GB">England</option>
          <option value="GQ">Equatorial Guinea</option>
          <option value="ER">Eritrea</option>
          <option value="EE">Estonia</option>
          <option value="ET">Ethiopia</option>
          <option value="FK">Falkland Islands</option>
          <option value="FO">Faroe Islands</option>
          <option value="FM">Federated States of Micronesia</option>
          <option value="FJ">Fiji</option>
          <option value="FI">Finland</option>
          <option value="FR">France</option>
          <option value="GF">French Guiana</option>
          <option value="PF">French Polynesia</option>
          <option value="TF">French Southern Territories</option>
          <option value="GA">Gabon</option>
          <option value="GM">Gambia</option>
          <option value="GE">Georgia</option>
          <option value="DE">Germany</option>
          <option value="GH">Ghana</option>
          <option value="GI">Gibraltar</option>
          <option value="GR">Greece</option>
          <option value="GL">Greenland</option>
          <option value="GD">Grenada</option>
          <option value="GP">Guadeloupe</option>
          <option value="GU">Guam</option>
          <option value="GT">Guatemala</option>
          <option value="GG">Guernsey</option>
          <option value="GN">Guinea</option>
          <option value="GW">Guinea-Bissau</option>
          <option value="GY">Guyana</option>
          <option value="HT">Haiti</option>
          <option value="VA">Holy See</option>
          <option value="HN">Honduras</option>
          <option value="HK">Hong Kong</option>
          <option value="HU">Hungary</option>
          <option value="IS">Iceland</option>
          <option value="IN">India</option>
          <option value="ID">Indonesia</option>
          <option value="IR">Iran (Islamic Republic of)</option>
          <option value="IQ">Iraq</option>
          <option value="IE">Ireland</option>
          <option value="IM">Isle of Man</option>
          <option value="IL">Israel</option>
          <option value="IT">Italy</option>
          <option value="JM">Jamaica</option>
          <option value="JP">Japan</option>
          <option value="JE">Jersey</option>
          <option value="JO">Jordan</option>
          <option value="KZ">Kazakhstan</option>
          <option value="KE">Kenya</option>
          <option value="KI">Kiribati</option>
          <option value="KW">Kuwait</option>
          <option value="KG">Kyrgyzstan</option>
          <option value="LA">Laos</option>
          <option value="LV">Latvia</option>
          <option value="LB">Lebanon</option>
          <option value="LS">Lesotho</option>
          <option value="LR">Liberia</option>
          <option value="LY">Libya</option>
          <option value="LI">Liechtenstein</option>
          <option value="LT">Lithuania</option>
          <option value="LU">Luxembourg</option>
          <option value="MO">Macau</option>
          <option value="MG">Madagascar</option>
          <option value="MW">Malawi</option>
          <option value="MY">Malaysia</option>
          <option value="MV">Maldives</option>
          <option value="ML">Mali</option>
          <option value="MT">Malta</option>
          <option value="MH">Marshall Islands</option>
          <option value="MQ">Martinique</option>
          <option value="MR">Mauritania</option>
          <option value="MU">Mauritius</option>
          <option value="YT">Mayotte</option>
          <option value="MX">Mexico</option>
          <option value="MD">Moldova</option>
          <option value="MC">Monaco</option>
          <option value="MN">Mongolia</option>
          <option value="ME">Montenegro</option>
          <option value="MS">Montserrat</option>
          <option value="MA">Morocco</option>
          <option value="MZ">Mozambique</option>
          <option value="MM">Myanmar</option>
          <option value="NA">Namibia</option>
          <option value="NR">Nauru</option>
          <option value="NP">Nepal</option>
          <option value="NL">Netherlands</option>
          <option value="NC">New Caledonia</option>
          <option value="NZ">New Zealand</option>
          <option value="NI">Nicaragua</option>
          <option value="NE">Niger</option>
          <option value="NG">Nigeria</option>
          <option value="NU">Niue</option>
          <option value="NF">Norfolk Island</option>
          <option value="KP">North Korea</option>
          <option value="MK">North Macedonia</option>
          <option value="GB">Northern Ireland</option>
          <option value="MP">Northern Markna Islands</option>
          <option value="NO">Norway</option>
          <option value="OM">Oman</option>
          <option value="PK">Pakistan</option>
          <option value="PW">Palau</option>
          <option value="PA">Panama</option>
          <option value="PG">Papua New Guinea</option>
          <option value="PY">Paraguay</option>
          <option value="PE">Peru</option>
          <option value="PH">Philippines</option>
          <option value="PN">Pitcairn</option>
          <option value="PL">Poland</option>
          <option value="PT">Portugal</option>
          <option value="PR">Puerto Rico</option>
          <option value="QA">Qatar</option>
          <option value="CG">Republic of the Congo</option>
          <option value="RO">Romania</option>
          <option value="RU">Russia</option>
          <option value="RW">Rwanda</option>
          <option value="RE">Réunion</option>
          <option value="BL">Saint Barthélemy</option>
          <option value="SH">
            Saint Helena, Ascension and Tristan da Cunha
          </option>
          <option value="KN">Saint Kitts and Nevis</option>
          <option value="LC">Saint Lucia</option>
          <option value="MF">Saint Martin</option>
          <option value="PM">Saint Pierre and Miquelon</option>
          <option value="VC">Saint Vincent and the Grenadines</option>
          <option value="WS">Samoa</option>
          <option value="SM">San Marino</option>
          <option value="ST">Sao Tome and Principe</option>
          <option value="SA">Saudi Arabia</option>
          <option value="GB">Scotland</option>
          <option value="SN">Senegal</option>
          <option value="RS">Serbia</option>
          <option value="SC">Seychelles</option>
          <option value="SL">Sierra Leone</option>
          <option value="SG">Singapore</option>
          <option value="SX">Sint Maarten</option>
          <option value="SK">Slovakia</option>
          <option value="SI">Slovenia</option>
          <option value="SB">Solomon Islands</option>
          <option value="SO">Somalia</option>
          <option value="ZA">South Africa</option>
          <option value="GS">
            South Georgia and the South Sandwich Islands
          </option>
          <option value="KR">South Korea</option>
          <option value="SS">South Sudan</option>
          <option value="ES">Spain</option>
          <option value="LK">Sri Lanka</option>
          <option value="PS">State of Palestine</option>
          <option value="SD">Sudan</option>
          <option value="SR">Suriname</option>
          <option value="SJ">Svalbard and Jan Mayen</option>
          <option value="SZ">Swaziland</option>
          <option value="SE">Sweden</option>
          <option value="CH">Switzerland</option>
          <option value="SY">Syrian Arab Republic</option>
          <option value="TW">Taiwan</option>
          <option value="TJ">Tajikistan</option>
          <option value="TZ">Tanzania</option>
          <option value="TH">Thailand</option>
          <option value="TL">Timor-Leste</option>
          <option value="TG">Togo</option>
          <option value="TK">Tokelau</option>
          <option value="TO">Tonga</option>
          <option value="TT">Trinidad and Tobago</option>
          <option value="TN">Tunisia</option>
          <option value="TR">Turkey</option>
          <option value="TM">Turkmenistan</option>
          <option value="TC">Turks and Caicos Islands</option>
          <option value="TV">Tuvalu</option>
          <option value="UG">Uganda</option>
          <option value="UA">Ukraine</option>
          <option value="AE">United Arab Emirates</option>
          <option value="GB">United Kingdom</option>
          <option value="UM">United States Minor Outlying Islands</option>
          <option value="US">United States of America</option>
          <option value="UY">Uruguay</option>
          <option value="UZ">Uzbekistan</option>
          <option value="VU">Vanuatu</option>
          <option value="VE">Venezuela (Bolivarian Republic of)</option>
          <option value="VN">Vietnam</option>
          <option value="VG">Virgin Islands (British)</option>
          <option value="VI">Virgin Islands (U.S.)</option>
          <option value="GB">Wales</option>
          <option value="WF">Wallis and Futuna</option>
          <option value="EH">Western Sahara</option>
          <option value="YE">Yemen</option>
          <option value="ZM">Zambia</option>
          <option value="ZW">Zimbabwe</option>
        </select>
        <!-- End Select -->
      </div>
      <!-- End Form -->

      <!-- Form -->
      <div class="mb-4">
        <label class="form-label">Employment eligibility</label>

        <div class="d-grid gap-2">
          <!-- Radio Check -->
          <label class="form-control" for="employmentRadio1">
            <span class="form-check">
              <input
                type="radio"
                class="form-check-input"
                name="employmentRadioName"
                id="employmentRadio1"
                checked
              />
              <span class="form-check-label"
                >Authorized to work in the UK for any employer</span
              >
            </span>
          </label>
          <!-- End Radio Check -->

          <!-- Radio Check -->
          <label class="form-control" for="employmentRadio2">
            <span class="form-check">
              <input
                type="radio"
                class="form-check-input"
                name="employmentRadioName"
                id="employmentRadio2"
              />
              <span class="form-check-label"
                >Sponsorship required to work in the UK</span
              >
            </span>
          </label>
          <!-- End Radio Check -->

          <!-- Radio Check -->
          <label class="form-control" for="employmentRadio3">
            <span class="form-check">
              <input
                type="radio"
                class="form-check-input"
                name="employmentRadioName"
                id="employmentRadio3"
              />
              <span class="form-check-label">No specified</span>
            </span>
          </label>
          <!-- End Radio Check -->
        </div>
      </div>
      <!-- End Form -->

      <!-- Form -->
      <div class="mb-4">
        <label for="contactInformationLabel" class="form-label"
          >Contact information</label
        >
        <p class="small mt-n2">
          Only provided to employers you apply to respond to.
        </p>
        <input
          type="email"
          class="form-control"
          name="contactInformationName"
          id="contactInformationLabel"
          placeholder="email@site.com"
          aria-label="email@site.com"
        />
      </div>
      <!-- End Form -->

      <!-- Form -->
      <div class="mb-4">
        <label for="phoneLabel" class="form-label">Phone number</label>
        <p class="small mt-n2">
          Only provided to employers you apply to respond to.
        </p>
        <div class="input-group">
          <input
            type="text"
            class="js-input-mask form-control"
            name="phone"
            id="phoneLabel"
            placeholder="+x(xxx)xxx-xx-xx"
            aria-label="+x(xxx)xxx-xx-xx"
          />

          <!-- Select -->
          <select
            class="form-select"
            name="phoneSelect"
            style="max-width: 8rem"
          >
            <option value="Mobile" selected>Mobile</option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Fax">Fax</option>
            <option value="Direct">Direct</option>
          </select>
          <!-- End Select -->
        </div>
      </div>
      <!-- End Form -->

      <!-- Form -->
      <div class="mb-4">
        <!-- Check -->
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="callPermissionCheckbox"
          />
          <label class="form-check-label" for="callPermissionCheckbox"
            >Call and send me text messages at this phone number</label
          >
        </div>
        <!-- End Check -->
      </div>
      <!-- End Form -->

      <!-- Form -->
      <div class="mb-4">
        <label for="CVPrivacySwitch" class="form-label"
          >CV privacy settings
          <span class="badge bg-primary text-uppercase ms-1">PRO</span></label
        >

        <div class="row">
          <div class="col">
            <label for="CVPrivacySwitch" class="form-label text-body"
              >Your CV is not visible. Employers cannot find your CV, but you
              can attach it when you apply to a job.</label
            >
          </div>

          <div class="col-auto">
            <!-- Form Switch -->
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="CVPrivacySwitch"
              />
            </div>
            <!-- End Form Switch -->
          </div>
        </div>
        <!-- End Row -->
      </div>
      <!-- End Form -->
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
import TheCard from "../ui/TheCard.vue";
import AlertError from "../ui/AlertError.vue";
import useVuelidate from "@vuelidate/core";
import {
  helpers,
  required,
  minLength,
  sameAs,
  url,
  email,
} from "@vuelidate/validators";
import { reactive } from "vue";

const props = defineProps({
  applicant: Object,
  headerText: String,
  buttonText: String,
  emitNextStep: Boolean,
});

const state = reactive({
  firstName: "",
  lastName: "",
  country: "",
  employmentEligibility: false,
  contact: {
    email: "",
    phoneNumber: "",
    callPermission: false,
  },
  resumePrivacy: false,
});

const rules = {
  firstName: helpers.withMessage("This field cannot be empty", required),
  lastName: helpers.withMessage("This field cannot be empty", required),
  country: helpers.withMessage("This field cannot be empty", required),
  employmentEligibility: helpers.withMessage(
    "This field cannot be empty",
    required
  ),
  contact: {
    email: { required, email },
    phoneNumber: helpers.withMessage("This field cannot be empty", required),
    callPermission: helpers.withMessage("This field cannot be empty", required),
  },
  resumePrivacy: helpers.withMessage("This field cannot be empty", required),
};

const v$ = useVuelidate(rules, state);

async function formSubmit() {
  if (this.v$.$invalid) {
    this.errorMessage = "Form has errors or is missing input.";
    this.submissionError = true;
  } else {
    const token =
      this.$store.getters.getToken || this.$cookies.get("com.ajobs.applicant");
    if (result.ok) {
      this.submissionError = false;

      if (this.emitNextStep) {
        this.$emit("next-step", "education");
      } else {
        this.newpassword = "";
        this.password = "";
        this.confirm = "";
      }
    } else {
      console.log("error");
    }
  }
}
</script>

<style lang="scss" scoped></style>
