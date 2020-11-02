var app = new Vue({
  el: "#CertificationPage",
  data:{
    certificationList: [],
    newcertificationForm: {},
    certifications:[{}],
    newcertification:{
      CertificationID:'',
      certifyingAgency:'',
      certificationName:'',
      standardExpiry:''
    },
    certifications: {},
  },


  methods: {
    fetchCertification() {
      fetch("api/certification/")
      .then(response => response.json())
      .then(json =>{
        this.certification=json;
        console.log(this.certification);
      });

    },
    addCertification() {
      console.log('addCertification() was called!'+this.newcertification.standardExpiry);
       fetch('api/certification/add.php', {
         method:'POST',
         body: JSON.stringify(this.newcertification),
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.json())
       .then( json => {
         console.log("Returned from post:"+ json);
         // TODO: test a result was returned!
         this.certificationList = json;
         this.newcertification = this.newCertificationData();
       });
       console.log("Creating (POSTing)...!");
       console.log(this.newCertificationData);
     },
    deleteCertification(evt){
          console.log(this.certifications)
          fetch('api/certification/certificationDelete.php', {
              method: 'POST',
              body: JSON.stringify(this.certifications),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })

          console.log("Creating (POSTing)...!");
          console.log(this.certifications);
        },
        newCertificationData() {
          return {
            CertificationID: '',
            certifyingAgency: '',
            certificationName: '',
            standardExpiry: ''
          }
        },
    },

    created() {
      fetch("api/certification/")
      .then(response => response.json())
      .then(json => {
        this.certificationList = json;

        console.log(json);
        console.log("created");
      });
      this.newcertificationForm = this.newCertificationData();
    }
  });
