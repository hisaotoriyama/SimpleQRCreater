
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

    methods: {  
        qrcreation: function () {
          alert("QR発行")
          this.textqr = this.nkkkNo +"," +this.groupNo + "," +this.tempNo;
          $('#qrprint').html("");
          $('#qrprint').qrcode({ width: 60, height: 60, text: JSON.stringify(this.textqr)})
        }
    }});
  