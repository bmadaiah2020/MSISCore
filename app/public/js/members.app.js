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
  }]
},
methods:{
    fetchUser() {
      fetch("api/person/")
    .then(response => response.json())
    .then(json =>{
      this.persons=json;
      console.log(this.persons);
    });
  }

},
created(){
  this.fetchUser();
}
});
