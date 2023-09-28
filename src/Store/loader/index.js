const LoaderModule = {
    state(){ 
      return {
        isLoading: false
      }
    },
    getters :{
        loader: state => state.isLoading
    },
    mutations:{
        setLoader(state,payload){
            state.isLoading = payload
        },
    },
    actions:{
        showLoader({commit}){
            commit('setLoader', true)
        },
        hideLoader({commit}){
            commit('setLoader', false)
        },
    }
}

export default LoaderModule;