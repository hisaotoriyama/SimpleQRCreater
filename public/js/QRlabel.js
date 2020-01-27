
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
        let qrd = JSON.stringify(this.nkkkNo +",," +this.groupNo + "," +this.tempNo)
        console.log(qrd.replace(/"/g,''))
        this.qrcreation(qrd.replace(/"/g,''))
        return qrd.replace(/"/g,'')
      }
    },

    methods: {  
        qrcreation: function(d) {
          $('#qrprint').html("");
          $('#qrprint').qrcode({ width: 60, height: 60, text: d})

        }
    }});
  