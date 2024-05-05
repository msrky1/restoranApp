
export const useWebsiteStore = defineStore('websiteStore', {
  
  state: () => ({
    data: [],
    settings: [],
    lengthData: '',
    itemCon: '',
  }),
  actions: {
    
    async fetch() {
      const infos = await $fetch(api + 'api/notification')

      this.data = infos;
      
      localStorage.setItem("data" , this.data.length);
     
    }, 
    async setting() {
      const setting = await $fetch(api + 'api/setting')

      this.settings = setting;
     
    }, 
 
    countFetch() {
      return this.data.length;
    },

    deleteItem() {

     
        localStorage.removeItem("data");
        localStorage.setItem("con" , "con");
     

      

    },
    testCon(){
      if(localStorage.getItem("con")){
 
        return 0;
       
       }else {
       
       return localStorage.getItem("data");
       }
    }
  //   noti() {
 
  //      console.log('test');
  //     this.data.forEach(element => {
       
  //         notify({
  //             title: "Tatlı Park Dondurma",
  //             text: element.body,
  //         });
  //     });
  
  // }

  }
})

