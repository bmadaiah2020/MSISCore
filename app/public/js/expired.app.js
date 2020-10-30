var App = new Vue({
  el: "#expired",
  data:{
    expiredcert:[{
      PersonalID: '',
      CertificationID: '',
      expirationDate: '',
      renewedDate: ''
  }]

  },

  methods:{
      fetchUser() {
        fetch("api/reports/")
      .then(response => response.json())
      .then(json =>{
        this.expiredcert=json;
        console.log(this.expiredcert);
      });

  created(){
    this.fetchUser();
  },



  },
  addUser() {
    console.log('addUser() was called!'+this.newMember.firstName);
     fetch('api/person/add.php', {
       method:'POST',
       body: JSON.stringify(this.newMember),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
     })
     .then( response => response.json())
     .then( json => {
       console.log("Returned from post:", json);
       // TODO: test a result was returned!
       this.persons.push(json[0]);
       this.newMember = this.newMemberData();
     });
     console.log("Creating (POSTing)...!");
     console.log(this.newMember);
   },
newMemberData() {
  return{
    firstName:'',
    lastName:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    radioNumber:'',
    stationNumber:'',
    gender:'',
    email:'',
    position:'',
    isActive:'',
    dateofBirth:''
}

},
  formatDate(d){
    return moment.utc(d).local().calendar();
  }
}

})
