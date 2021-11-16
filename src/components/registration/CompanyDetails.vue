<template>
    <the-card id="company-details">

        <template v-slot:cardheader>Enter Company Details</template>
        <template v-slot:cardbody>
            <alert-error v-if="submissionError" :message="errorMessage"></alert-error>
                <div class="form-group" >
                    <label for="titleLabel" class="input-label">Company Name</label>

                    <input v-model.lazy="v$.companyDetails.companyName.$model" type="text" class="form-control" name="companyname" id="companyname" aria-label="Company Name" :class="{ 'is-invalid': v$.companyDetails.companyName.$error}">
                    
                        <div class="input-errors" v-for="error of v$.companyDetails.companyName.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                        </div>
                </div>

                <div class="form-group" >
                    <label for="titleLabel" class="input-label">Location</label>
                    <input v-model="locationSearch" type="text" class="form-control" name="location" id="location" aria-label="Location"  placeholder="Search for a City" :class="{ 'is-invalid': v$.locationSearch.$error}">
                    
                    <select2 :options="autocompleteLocations" v-model="selectedCity">
                        <option disabled value="0">Select one</option>
                    </select2>
                    

                        <div class="input-errors" v-for="error of v$.locationSearch.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                </div>

                <div class="form-group" >
                    <label for="titleLabel" class="input-label">URL</label>
                    

                    <div class="input-group mb-3" >
                        <span class="input-group-text" >https://www.</span>
                        <input v-model.lazy="v$.companyDetails.url.$model" type="text" class="form-control" name="location" id="location" aria-label="URL" :class="{ 'is-invalid': v$.companyDetails.url.$error}">   
                    </div>
                    
                        <div class="input-errors" v-for="error of v$.companyDetails.url.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                </div>

                <div class="form-group" >
                    <label for="titleLabel" class="input-label">Facebook</label>

                     <div class="input-group mb-3" >
                        <span class="input-group-text" >https://facebook.com/</span>
                        <input v-model.lazy="v$.companyDetails.socials.facebook.$model" type="text" class="form-control" name="location" id="location" aria-label="Facebook" :class="{ 'is-invalid': v$.companyDetails.socials.facebook.$error}">
                     </div>

                    <div class="input-errors" v-for="error of v$.companyDetails.socials.facebook.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </div>

                <div class="form-group" >
                    <label for="titleLabel" class="input-label">Twitter</label>

                    <div class="input-group mb-3" >
                        <span class="input-group-text" >https://twitter.com/</span>
                        <input v-model.lazy="v$.companyDetails.socials.twitter.$model" type="text" class="form-control" name="location" id="location" aria-label="Twitter" :class="{ 'is-invalid': v$.companyDetails.socials.twitter.$error}">
                    </div>

                    <div class="input-errors" v-for="error of v$.companyDetails.socials.twitter.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </div>

                <div class="form-group" >
                    <label for="titleLabel" class="input-label">Instagram</label>

                    <div class="input-group mb-3" >
                        <span class="input-group-text" >https://instagram.com/</span>
                        <input v-model.lazy="v$.companyDetails.socials.instagram.$model" type="text" class="form-control" name="location" id="location" aria-label="Instagram" :class="{ 'is-invalid': v$.companyDetails.socials.instagram.$error}">
                    </div>

                    <div class="input-errors" v-for="error of v$.companyDetails.socials.instagram.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </div>

                <div class="form-group" >
                    <label for="logo" class="input-label">Logo</label>

                    <input type="file" class="form-control" name="logo" id="logo" aria-label="Logo" @change="onFileChange">
                    
                     <div>
                        <img v-if="companyDetails.logo" :src="companyDetails.logo" :alt="companyDetails.name + ' logo'">
                    </div>
                    
                </div>

                    <div class="form-group">
                    <label class="input-label">Describe your company.</label>
                    
                    <ckeditor :editor="editor" v-model="v$.companyDetails.description.$model" :class="{ 'is-invalid': v$.companyDetails.description.$error}"></ckeditor>

                    <div class="input-errors" v-for="error of v$.companyDetails.description.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="input-label">Any other details about your company that applicants should know about?</label>
                    
                    <div class="input-errors" v-for="error of v$.companyDetails.extraDetails.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>

                    <ckeditor :editor="editor" v-model="v$.companyDetails.extraDetails.$model" :class="{ 'is-invalid': v$.companyDetails.extraDetails.$error}"></ckeditor>
                
                </div>



        </template>

        <template v-slot:cardfooter>
                <div class="ml-auto">
                    <button type="button" class="btn btn-primary" id="company-details-button" @click="formSubmit">
                    Save and continue <i class="fas fa-angle-right ml-1"> </i>
                    </button>
                </div>
        </template>

    </the-card>
</template>

<script>

import TheCard from '../../components/ui/TheCard.vue'
import Select2 from '../../components/ui/Select2.vue'
import AlertError from '../ui/AlertError.vue'
import useVuelidate from '@vuelidate/core'
import { helpers, required, minLength, sameAs, url } from '@vuelidate/validators'
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

    export default {
        setup(){
            return {
                 v$: useVuelidate()
            }
        },
        async created(){
            this.token = this.$cookies.get('com.bitjobs');
            this.company = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/get/company",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + this.token
                    }
                }
                ).then(result =>{

                    if(!result.ok){
                        console.log(result)
                        return result
                    }
                    return result.json()

                })
            
            if(this.company){

                this.companyDetails.companyName = this.company.name;
                this.companyDetails.location = this.company.location;
                 this.companyDetails.longitude = this.company.longitude;
                this.companyDetails.latitude = this.company.latitude;
                this.companyDetails.url = this.company.url.replace("https://www.", "");
                this.companyDetails.socials.facebook = this.company.facebook;
                this.companyDetails.socials.twitter = this.company.twitter;
                this.companyDetails.socials.instagram = this.company.instagram;
                this.companyDetails.description = this.company.description;
                this.companyDetails.logo = this.company.logo;
                this.companyDetails.extraDetails = this.company.extradetails;
                
            }

        },
        components:{
            TheCard,
            Select2,
            ckeditor: CKEditor.component,
            AlertError
        },
        data(){
            return {
                editor: ClassicEditor,
                company:{},
                selectedCity:"",
                locationSearch:"",
                companyDetails:{
                    companyName:"",
                    location:"",
                    longitude:"",
                    latitude:"",
                    url:"",
                    socials:{
                        facebook:"",
                        twitter:"",
                        instagram:"",
                    },
                    description:"",
                    logo:"",
                    extraDetails:""

                },
                autocompleteLocations:{},
                token:"",
                errorMessage:"",
                submissionError:false,
                formSubmitted:false,
                
            }
        },
        validations(){
            return {
                locationSearch:{},
                 companyDetails:{
                    companyName:{required},
                    location:{},
                    longitude:{},
                    latitude:{},
                    url:{required},
                    socials:{
                        facebook:{},
                        twitter:{},
                        instagram:{},
                    },
                    description:{},
                    logo:{},
                    extraDetails:{}

                }
                
            }
        },
        methods:{
            async formSubmit(){
                if (this.v$.$invalid){
                    this.errorMessage = "Form has errors or is missing input.";
                    this.submissionError = true;
                } else { 
                    this.submissionError = false;
                    var token = this.$store.getters.getToken || this.$cookies.get('com.bitjobs');
                    
                    if(!this.companyDetails.url.includes("https://www.")){
                        this.companyDetails.url = "https://www." + this.companyDetails.url;
                        this.v$.companyDetails.url.$model = this.companyDetails.url;
                    }

                      const result = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/update-company",
                      {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + token
                            },
                            // credentials: "include",
                            body: JSON.stringify({ 
                                name:this.v$.companyDetails.companyName.$model,
                                location:this.v$.companyDetails.location.$model,
                                longitude:this.v$.companyDetails.longitude.$model,
                                latitude:this.v$.companyDetails.latitude.$model,
                                url:this.v$.companyDetails.url.$model, 
                                facebook:this.v$.companyDetails.socials.facebook.$model, 
                                twitter:this.v$.companyDetails.socials.twitter.$model, 
                                instagram:this.v$.companyDetails.socials.instagram.$model,
                                description:this.v$.companyDetails.description.$model,
                                logo:this.v$.companyDetails.logo.$model,
                                extradetails:this.v$.companyDetails.extraDetails.$model})
                        }
                    )

                    if(result.ok){
                        this.submissionError = false;
                       this.$emit("next-step","payment-method")
                    } else { 
                        console.log("error")
                    }
                }
            },
            async onFileChange(e){
                var file = e.target.files || e.dataTransfer.files;
                if(!file.length){
                    return;
                }

                var formData = new FormData();
                formData.append('file', file[0])

                const result = await fetch(process.env.VUE_APP_BIT_API_PATH + "/upload/image",{
                    method: "POST",
                            headers: {
                                Authorization: "Bearer " + process.env.VUE_APP_BIT_API_KEY
                            },
                            // credentials: "include",
                            body:formData 
                }).then((response)=>{
                    if(!response.ok){
                        console.log(response)
                        return response
                    }

                    return response.json()
                })

                if(result){
                    this.companyDetails.logo = result["url"]
                } else { 
                    this.errorMessage = "Image failed to upload. Please try again.";
                    this.submissionError = true;
                }

            },
            onType(e){
                console.log($("#mySelect2").data("select2").dropdown.$search.val())
            }
        },
        watch:{
            'locationSearch': async function(newVal, oldVal){
                var token = this.$store.getters.getToken || this.$cookies.get('com.bitjobs');
                const result = await fetch(process.env.VUE_APP_BIT_API_PATH + "/employer/get/location/autocomplete", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                    },
                    body: JSON.stringify({
                        chars:newVal
                    })
                }).then((res)=>{

                    if(!res.ok){
                        console.log("problem")
                    }
                    return res.json()
                }).catch((error)=>{
                    console.log("error:",error)
                })
                
            
                if(result && result.length > 0){
                    var options = result.map(function(e, i){
                   
                        e.id = i+1;
                        e.text = `${e.city}, ${e.state}, ${e.country}`;

                        return e;
                    })
                    this.autocompleteLocations = options

                }
                
            },
            selectedCity: async function(newVal, oldVal){
                var city = this.autocompleteLocations.filter(e => e.id == newVal)[0];
                this.v$.companyDetails.longitude.$model = city.longitude;
                this.v$.companyDetails.latitude.$model = city.latitude;
                this.v$.companyDetails.location.$model = city.text;
                
            }
        }
    }
</script>

<style scoped>
    div img{
            width:100px;
            height:100px;
    }

    input#location{
        margin-bottom: 5px;
    }
</style>