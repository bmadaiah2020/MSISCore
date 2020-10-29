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
  newPerson:{
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
     fetch('api/person/add.php', {
       method:'POST',
       body: JSON.stringify(this.newUser),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
     })
     .then( response => response.json())
     .then( json => {
       console.log("Returned from post:", json);
       // TODO: test a result was returned!
       this.comments = json;
       this.newComment = this.newUserData();
     });
     console.log("Creating (POSTing)...!");
     console.log(this.newUser);
   },
newCommentData() {
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
}}

},


})
