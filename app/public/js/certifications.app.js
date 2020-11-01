var app = new Vue({
  el: "#CertificationPage",
  data:{
    certificationList: [],
    newcertificationForm: {},
    certifications:[{}]
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

    newCertificationData() {
      return {
        CertificationID: '',
        certifyingAgency: '',
        certificationName: '',
        standardExpiry: ''
      }
    },
    deleteCertification(evt){
          console.log(this.CertificationID)
          fetch('api/certification/certificationDelete.php', {
              method: 'POST',
              body: JSON.stringify(this.CertificationID),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })

          console.log("Creating (POSTing)...!");
          console.log(this.CertificationID);
        },
    handleNewCertification(evt) {
      fetch("api/certification/add.php", {
        method: 'POST',
        body: JSON.stringify(this.newcertificationForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
          }
        })
      .then(response => response.json())
      .then(json =>  {
        console.log("Returned from post:", json);
        this.certificationList = json;
        this.certificationForm = this.newCertificationData();
      });
      console.log("Creating (POSTing)...!");
      console.log(this.newcertificationForm);
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
