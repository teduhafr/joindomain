module.exports = (sequelize, Sequelize) => {
    const laptop = sequelize.define("datalaptop", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        host: {
            type: Sequelize.STRING,
        },
        domain: {
            type: Sequelize.STRING,
            defaultValue: "Ndomain"
        },
        os: {
            type: Sequelize.STRING,
            defaultValue: "os"
        },
        manufacture: {
            type: Sequelize.STRING,
            defaultValue: "manufacture"
        },
        processor: {
            type: Sequelize.STRING,
            defaultValue: "proc"
        },
        serial: {
            type: Sequelize.STRING,
            defaultValue: "serial"
        },
        tipe: {
            type: Sequelize.STRING,
            defaultValue: "tipe"
        },
        ram: {
            type: Sequelize.STRING,
            defaultValue: "128"
        },
        hdd: {
            type: Sequelize.STRING,
            defaultValue: "128"
        },
        platform: {
            type: Sequelize.INTEGER,
            defaultValue: 3
        },
        antivirus: {
            type: Sequelize.STRING,
            defaultValue: "defender"
        },
        zenworks: {
            type: Sequelize.STRING,
            defaultValue: "no"
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: sequelize.literal('NOW()')
        }
    });

    return laptop;
};