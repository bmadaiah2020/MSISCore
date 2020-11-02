editcertificationapp = new Vue ({
  el: '#editcertification',
  data: {
    editcertificaton: []
  },
  methods: {
    editCertification(evt){
      fetch('api/certification/edit.php', {
          method: 'POST',
          body: JSON.stringify(this.editcertification),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
    },

    editCertificationData() {
      this.editcertification={
        CertificationID:'',
        certifyingAgency:'',
        certificationName:'',
        standardExpiry:'',
      }
    }

  },
  created() {
    this.editCertificationData();
}
});
