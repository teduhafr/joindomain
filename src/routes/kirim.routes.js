const db = require('../model');
const dblaptop = db.laptop;

module.exports = app => {
    var router = require("express").Router();

    router.post("/kirim/", 
        function (req, res) {
            console.log(req.body);
            dblaptop.create({
                host: req.body.hostname,
                domain: req.body.domain,
                os: req.body.version,
                manufacture: req.body.manufacturer,
                processor: req.body.cpu,
                ram: req.body.ram,
                hdd: req.body.hdd,
                platform: req.body.platform,
                antivirus: req.body.antivirus ?? '-' + " "+req.body.defender ?? '-',
                zenworks: req.body.zenworks ?? 'tidak ada',
                serial: req.body.serial ?? '-',
                tipe: req.body.model ?? '-'
            }).then(data => {
                if (data) {
                    res.send({
                        status: "sukses"
                    });
                } else {
        
                    res.send({
                        status: "gagal",
                        keterangan: "ada masalah"
                    });
            res.send({ status: 'sukses'});

        }
    }).catch(err => {
            res.status(500).send({ message: err.message });
        });
        }
    );

    app.use('/api', router);
};