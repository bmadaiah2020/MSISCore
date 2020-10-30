var App = new Vue({
  el: "#expired",
  data:{
    exreports:[{
      PersonalID: '',
      CertificationID: '',
      expirationDate: '',
      renewedDate: ''
  }],
  newCert:{
    PersonalID: '',
    CertificationID: '',
    expirationDate: '',
    renewedDate: ''

  }

  },

  methods:{
      fetchexreports() {
        fetch("api/reports/")
      .then(response => response.json())
      .then(json =>{
        this.exreports=json;
        console.log(this.exreports);
      });


  },
  createCert() {
    console.log('createCert() was called!'+this.newCert.PersonalID);
     fetch('api/reports/add.php', {
       method:'POST',
       body: JSON.stringify(this.newCert),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
     })
     .then( response => response.json())
     .then( json => {
       console.log("Returned from post:", json);
       // TODO: test a result was returned!
       this.exreports.push(json[0]);
       this.newCert = this.newCertData();
     });
     console.log("Creating (POSTing)...!");
     console.log(this.newCert);
   },
newCertData() {
  return{
    PersonalID: '',
    CertificationID: '',
    expirationDate: '',
    renewedDate: ''
}

},
  formatDate(d){
    return moment.utc(d).local().calendar();
  }
}
created(){
  this.fetcexhreports();
},


})
