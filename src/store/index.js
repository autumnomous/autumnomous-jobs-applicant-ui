import { createStore } from "vuex";
import Cookies from 'js-cookie'

const store = createStore({
    state(){
        return { 
            token: "",
            registrationStep:""
        }
    },
    actions:{
       async login(context, payload){

        const  response = await fetch(process.env.VUE_APP_BIT_API_PATH + "/applicant/login",
        {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + process.env.VUE_APP_BIT_API_KEY
                    },
                //   credentials: "include",
                    body: JSON.stringify({ 
                        email:payload.email,
                        password:payload.password})
                }
            )
                
        const data = await response.json();

        if(response.ok){
            context.commit('setToken', {token: data.token})
            context.commit('setRegistrationStep', {registrationstep: data.registrationstep})

            // const { $cookies } = store.app.config.globalProperties 

            Cookies.set('com.ajobs.applicant', data.token, {expires: 7, secure:true, sameSite:"none"})
            
        } else { 
            const error = new Error(
                data.message || 'Failed to authenticate. Check your login data.'
                );
                throw error;
        }

        },
        logout(context){

        }
    },

    mutations:{
        setToken(state, payload){
            state.token = payload.token;
            // this.$cookies.set('com.ajobs.applicant', payload.token);
        },
        clearToken(state){

        },
        setRegistrationStep(state, payload){
            state.registrationStep = payload.registrationstep;
        }
    },
    getters:{
        getToken(state){
            return state.token;
        },
        getRegistrationStep(state){
            return state.registrationStep;
        },
        isAuthenticated(state){
            return !!state.token;
        }
    }
})

export default store;