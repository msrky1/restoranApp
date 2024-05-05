
export const useWebsiteStore = defineStore('websiteStore', {
  
  state: () => ({
    data: [],
    settings: [],
    say: '',
   
  }),
  actions: {
    
    async fetch() {
      const infos = await $fetch(api + 'api/notification')

      this.data = infos;
      this.say =  this.data.length;
      localStorage.setItem("data" , this.say);
     
    }, 
    async setting() {
      const setting = await $fetch(api + 'api/setting')

      this.settings = setting;
     
    }, 
 
    countFetch() {
      return this.data.length;
    },

    deleteItem() {

      setTimeout(() => {
        localStorage.removeItem("data");
    }, 3000);
  
     this.say = 0;
     

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

