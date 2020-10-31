var App = new Vue({
  el: "#expiredRep",
  data:{
    exreports:[{
      PersonalID: '',
      CertificationID: '',
      expirationDate: '',
      renewedDate: ''
  }],
  // newCert:{
  //   PersonalID: '',
  //   CertificationID: '',
  //   expirationDate: '',
  //   renewedDate: ''
  //
  // }

  },
  created(){
    this.fetchUser();
    console.log("fetched");
  },

  methods:{
      fetchUser() {
        fetch("api/reports/index.php")
      .then(response => response.json())
      .then(json =>{
        this.exreports=json;
        console.log(this.exreports);
      });
    }

  },

  formatDate(d){
    return moment.utc(d).local().calendar();
  }

})
