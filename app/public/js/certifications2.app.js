Certapp = new Vue({
  el: "#CertificationPage",
  data:{
    certificationList: [{
      CertificationID:'',
      certifyingAgency:'',
      certificationName:'',
      standardExpiry:''
    }],
    newcert: {
      CertificationID:'',
      certifyingAgency:'',
      certificationName:'',
      standardExpiry:''
    },
    certID:{}
  },

  methods: {
    fetchCertification() {
      fetch("api/certification/index.php")
      .then(response => response.json())
      .then(json => {
        this.certification=json;
        console.log(this.certificationList);
      });
    },
    addCertification() {
      console.log('addCertification() was called!');
       fetch('api/certification/add.php', {
         method:'POST',
         body: JSON.stringify(this.newcert),
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.json())
       .then( json => {
         console.log("Returned from post:"+ json);
         // TODO: test a result was returned!
         this.certificationList.push(json[0]);
         this.newcert = this.newCertData();
       });
       console.log("Creating (POSTing)...!");
       console.log(this.newcert);
     },
    deleteCertification(evt){
          console.log(this.certID)
          fetch('api/certification/certificationDelete.php', {
              method: 'POST',
              body: JSON.stringify(this.certID),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })

          console.log("Creating (POSTing)...!");
          console.log(this.certID);
        },
        newCertData() {
          return {
            CertificationID: '',
            certifyingAgency: '',
            certificationName: '',
            standardExpiry: ''
          }
        },
        fetchData:function(CertificationID){
          axios.post('editCertification.php',{
            action:'fetchSingle',
            CertificationID:CertificationID
        }).then(function(response){
          application.certifyingAgency = response.data.certifyingAgency;
          application.certificationName = response.data.certificationName;
          application.standardExpiry = response.data.standardExpiry;
          application.mymodel=true;
          application.actionButton="Update";
          application.dynamicTitle="Edit Data";
        });
      },
    created() {
      this.fetchCertification();
    }
  });
