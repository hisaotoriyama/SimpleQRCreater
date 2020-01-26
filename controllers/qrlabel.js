// @file product.js <controllers>
// REST controller definitions
module.exports = {
    index: (req, res) => {
        console.log("Gd")
        db.allstatusdata.findAll().then((d) => {
            let data = d.map((p) => {
                return {
                    id: p.id,
                    nkkkno: p.nkkkno,
                    groupno: p.groupno,
                    tempno: p.tempno,
                    quantity: p.quantity,
                    status:p.status
                }
            })
            res.json(data)
        })
    },
    new: (req, res) => {
        res.send("new forum");
    },
    create: (req, res) => {
        res.send("create forum");
    },
    show: (req, res) => {
        res.send("show forum " + req.params.forum);
    },
    edit: (req, res) => {
        res.send("edit forum " + req.params.forum);
    },
    update: (req, res) => {
        res.send("update forum " + req.params.forum);
    },
    delete: (req, res) => {
       res.send("destroy forum " + req.params.forum);
    }
}