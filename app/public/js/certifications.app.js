var app = new Vue({
  el: "#CertificationPage",
  data:{
    certificationList: [],
    newcertificationForm: {}
  },


  methods: {

    newCertificationData() {
      return {
        CertificationID: '',
        certifyingAgency: '',
        certificationName: '',
        standardExpiry: ''
      }
    },

    handleNewCertification(evt) {
      fetch("api/certification/add.php", {
        method: 'POST',
        body: JSON.stringify(this.newCommentForm),
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
