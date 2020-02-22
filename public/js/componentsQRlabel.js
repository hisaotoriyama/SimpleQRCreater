Vue.component("silist", {
    props: ["storage"],
    template: "<tr class=\"container\"><input type=\"checkbox\" id=\"checkbox\" v-model=\"storage.check\"><td></td><td>{{id}}</td><img src=\"image/nkkk.png\"><td :id='tag_id'>{{qr_data}}</td><td class=\"text-primary\">{{nkkkno}}</td><td>{{groupno}}</td><td>{{tempno}}</td><td>{{quantity.toLocaleString()}}</td><td>{{status}}</td></tr>",
    computed: {
        id: function () {
            return this.storage.id;
        },
        tag_id: function () {
            return "qr_" + this.storage.id;
        },
        nkkkno: function () {
            return this.storage.nkkkno;
        },
        groupno: function () {
            return this.storage.groupno;
        },
        tempno: function () {
            return this.storage.tempno;
        },
        quantity: function () {
            return this.storage.quantity;
        },
        status: function () {
            return this.storage.status;
        },
        qr_data: function () {
            let qrd = JSON.stringify(this.nkkkno + ",," + this.groupno + "," + this.tempno)
            console.log(qrd.replace(/"/g, ''))
            //this.qrcreation(qrd.replace(/"/g, ''))
            return qrd.replace(/"/g, '')
        }
    },
    mounted: function() {
        this.qrcreation(this.qr_data)
    },
    methods: {
        qrcreation: function (d) {
            console.log(this.tag_id)
            console.log(d)
            $('#' + this.tag_id).html("");
            $('#' + this.tag_id).qrcode({ width: 60, height: 60, text: d })
        }
    }
})

var app = new Vue({
    el: "#app",
    data: {
        storeditemlists: [
            {
                id: 1,
                nkkkno: "D10001",
                groupno: "AW",
                tempno: "120",
                quantity: 999.2,
                status: "配送中",
            },
            // {
            //     id: 2,
            //     nkkkno: "D10001",
            //     groupno: "BB",
            //     tempno: "121",
            //     quantity: 1092.1,
            //     status: "在庫",
            // },
            // {
            //     id: 3,
            //     nkkkno: "D10001",
            //     groupno: "CC",
            //     tempno: "122",
            //     quantity: 1030.1,
            //     status: "在庫",
            // }
        ]
    },
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
                  self.storeditemlists = j;
                })
              })
          },
      
    },
    created: function () {
        return this.readall()
      },

})


