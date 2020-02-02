var app = new Vue({
  el: "#app",
  data: {
    alldata: [{
      id: "",
      nkkkno: "",
      groupno: "",
      tempno: "",
      quantity: "",
      status: ""
    }
    ],
    // checkededdatalists: "",
    selecteddata: [{
      id: "",
      nkkkno: "",
      groupno: "",
      tempno: "",
      quantity: "",
      status: ""
    }
    ],
    textqr: ""
  },

  created: function () {
    return this.readall()
  },

  // computed: {
  //   qr_data: function () {
  //     let qrd = JSON.stringify(this.selecteddata.nkkkno + ",," + this.selecteddata.groupno + "," + this.selecteddata.tempno)
  //     console.log(qrd.replace(/"/g, ''))
  //     this.qrcreation(qrd.replace(/"/g, ''))
  //     return qrd.replace(/"/g, '')
  //   }
  // },

  methods: {
    readall: function () {
      // alert("ReadAll")
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
      const d = {
        headers: headers,
        method: "GET"
      };
      var self = this;
      fetch('/qrlabels', d)
        .then((e) => {
          e.json().then((j) => {
            self.alldata = j;
          })
        })
    },

    // qrcreation: function (d) {
    //   $('#qrprint').html("");
    //   $('#qrprint').qrcode({ width: 60, height: 60, text: d })
    // },

    // qrlabelissue: function () {
    //   alert("QR issue")
    //   var checkeddata = this.alldata.filter((e) => {
    //     return e.check == true
    //   })
    //   this.checkededdatalists = checkeddata;
    // }
  }
})