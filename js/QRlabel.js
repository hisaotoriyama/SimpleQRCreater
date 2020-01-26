
var app = new Vue({
    el: "#app",
    data: {
      nkkkNo: "",
      groupNo: "",
      tempNo:"",
      QRcode:"",
      netweight:"",
      textqr:""
    },

    computed: {
      qr_data: function() {
        let qrd = JSON.stringify(this.nkkkNo +"," +this.groupNo + "," +this.tempNo)
        this.qrcreation(qrd)
        return qrd
      }
    },

    methods: {  
        qrcreation: function(d) {
          $('#qrprint').html("");
          $('#qrprint').qrcode({ width: 60, height: 60, text: d})
        }
    }});
  