
export const useWebsiteStore = defineStore('websiteStore', {
  
  state: () => ({
    data: [],
    settings: [],
 
  }),
  actions: {
    
    async fetch() {
      const infos = await $fetch(api + 'api/notification')

      this.data = infos;
      

     
    }, 
    async setting() {
      const setting = await $fetch(api + 'api/setting')

      this.settings = setting;
     
    }, 
 
    countFetch() {
      return this.data.length;
    },

   
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

