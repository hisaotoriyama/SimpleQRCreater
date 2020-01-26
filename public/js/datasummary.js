var app = new Vue({
    el: "#app",
    // data: {
    //   id: "",
    //   nkkkno:"",
    //   groupno: "",
    //   tempno: "",
    //   quantity: "",
    //   status: "",
    //   alldata:""
    // },
    data: {
        id: 1,
        nkkkno:"2",
        groupno: "3",
        tempno: "4",
        quantity: 5,
        status: "zaiko",
        alldata:""
      },
  methods: {
   readall: function () {
       alert("kado")
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
}
})