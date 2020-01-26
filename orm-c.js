let db = require('./models/index')
db.product.create({
    nkkkno: "01D0001",
    groupno: "B",
    tempno: "100",
    quantity: 9876,
    status: "在庫"
})
db.location.create({
    nkkkno: "01D0001",
    groupno: "B",
    tempno: "101",
    quantity: 9891,
    status: "在庫"
})
db.location.create({
    nkkkno: "01D0001",
    groupno: "B",
    tempno: "103",
    quantity: 9920,
    status: "在庫"
})
db.location.create({
    nkkkno: "01D0001",
    groupno: "B",
    tempno: "104",
    quantity: 9999,
    status: "配送中"
})
