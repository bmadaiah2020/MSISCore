var App = new Vue({
  el: "#PersonalID",
  data:{
    persons:[{
      PersonalID:'',
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
      dateofBirth:'',
      workNumber:'',
      mobileNumber:''
  }],
  newMember:{
    PersonalID:'',
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
    dateofBirth:'',
    workNumber:'',
    mobileNumber:''
  },
    PersonID:{},
  },
  created(){
    this.fetchUser();
  },

methods:{
    fetchUser() {
      fetch("api/person/")
    .then(response => response.json())
    .then(json =>{
      this.persons=json;
      console.log(this.persons);
    });

  },
  addUser() {
    console.log('addUser() was called!'+this.newMember.firstName);
    console.log('date:'+this.newMember.DateofBirth);
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

   deleteMember(){
         console.log(this.PersonID)
         fetch('api/person/memberDelete.php', {
             method: 'POST',
             body: JSON.stringify(this.PersonID),
             headers: {
               "Content-Type": "application/json; charset=utf-8"
             }
           })

         console.log("Creating (POSTing)...!");
         console.log(this.PersonID);
       },
newMemberData() {
  return{
    PersonalID:'',
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
    dateofBirth:'',
    workNumber:'',
    mobileNumber:''
}

},

}

});
