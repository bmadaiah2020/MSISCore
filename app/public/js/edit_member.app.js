editpersonapp = new Vue ({
  el: '#editperson',
  data: {
    editperson: []
  },
  methods: {
    editMember(evt){
      fetch('api/person/edit.php', {
          method: 'POST',
          body: JSON.stringify(this.editperson),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
    },

    editPersonData() {
      this.editperson={
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
    }

  },
  created() {
    this.editPersonData();
}
});
