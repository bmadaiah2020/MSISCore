var App = new Vue({
  el: "#PersonalID",
  data:{
    persons:[{
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
  }],
  newMember:{
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


})
