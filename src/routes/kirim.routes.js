const db = require('../model');
const { Parser } = require('json2csv');
const dblaptop = db.laptop;

module.exports = app => {
    var router = require("express").Router();

    router.post("/kirim/", 
        function (req, res) {
            console.log(req.body);
            dblaptop.create({
                host: req.body.hostname,
                NUP: req.body.NUP ?? '0',
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
                tipe: req.body.model ?? '-',
                user: req.body.username ?? '-'
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

    router.get('/unduh-csv', async (req, res) => {
        try {
          // Fetch data using Sequelize
          const datajodo = await dblaptop.findAll();
      
          // Convert to JSON
          const dataJson = datajodo.map(datajodo => datajodo.toJSON());
      
          // Convert JSON to CSV
          const json2csvParser = new Parser();
          const csv = json2csvParser.parse(dataJson);
      
          // Set headers to prompt the user to download the file
          res.header('Content-Type', 'text/csv');
          res.attachment('data.csv');
          res.send(csv);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      });

    app.use('/api', router);
};
