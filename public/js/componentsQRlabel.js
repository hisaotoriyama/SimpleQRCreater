Vue.component("silist", {
    props: ["storage"],
    template: "<tr><td>{{id}}</td><td>{{qr_data}}</td><td>{{nkkkno}}</td><td>{{groupno}}</td><td>{{tempno}}</td><td>{{quantity}}</td><td>{{status}}</td></tr>",
    // 下記チェックボックス除外
    // <input type=\"checkbox\" id=\"checkbox\" v-model=\"storage.check\">


    computed: {
        id: function () {
            return this.storage.id;
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
            this.qrcreation(qrd.replace(/"/g, ''))
            return qrd.replace(/"/g, '')
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
            {
                id: 2,
                nkkkno: "D10001",
                groupno: "BB",
                tempno: "121",
                quantity: 1092.1,
                status: "在庫",
            },
            {
                id: 3,
                nkkkno: "D10001",
                groupno: "CC",
                tempno: "122",
                quantity: 1030.1,
                status: "在庫",
            }
        ]
    },
    methods: {
        qrcreation: function (d) {
            $('#qrprint').html("");
            $('#qrprint').qrcode({ width: 60, height: 60, text: d })
        }
    }

})


