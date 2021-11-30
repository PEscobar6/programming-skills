const Joi = require('joi');
const db = require('../models/connection');

const createPerson = async (req, res) => {

    const body = req.body;
    console.log(body);

    const schema = Joi.object({
        fullname: Joi.string().min(6).required(),
        birth: Joi.string().required(),
        id_mother: Joi.any(),
        id_father: Joi.any(),
    });

    /*const result = Joi.validate(body, schema);
      const { value, error } = result;*/
    const { error, value } = schema.validate(body);
    const isValid = error == null;
    console.log("IS VALID", isValid);
    if (isValid) {
        db.getConnection(function (err, connection) {
            console.log("ERR", err);
            connection.beginTransaction((err) => {
                connection.query(
                    `INSERT INTO person
                        (fullname,
                        birth,
                        id_mother,
                        id_father,
                        STATUS)
                    VALUES 
                        (?, ?, ?, ?, ?);`,
                    [body.fullname, body.birth, (body.id_mother ? body.id_mother : null), (body.id_father ? body.id_father : null), true],
                    (err, results, fields) => {
                        if (err) {
                            connection.rollback(() => {
                                res.status(400).json({
                                    status: 400,
                                    title: "An error has been ocurred",
                                    message: `Person ${body.fullname} wasn't created`,
                                    icon: "danger",
                                    details: err,
                                })
                            })
                        } else {
                            connection.commit((error) => {
                                if (error) {
                                    res.status(400).json({
                                        status: 400,
                                        title: "An error has been ocurred",
                                        message: `Person ${body.fullname} wasn't created`,
                                        icon: "danger",
                                        details: err,
                                    })
                                }
                                res.status(200).json({
                                    status: 200,
                                    title: "Congrats",
                                    message: `Person ${body.fullname} was created`,
                                    icon: "success",
                                    details: results,
                                })
                            })
                        }
                    }
                );
            });
        })
    } else {
        res.status(422).json({
            status: 422,
            title: "Bad Request",
            message: "La petición es imposible de procesar",
            icon: "warning",
            details: error.details,
        });
    }
};

const getAllPerson = (req, res) => {
    db.query(
        `SELECT
            ROW_NUMBER() OVER (ORDER BY id DESC) AS ID,
            fullname,
            DATE_FORMAT(birth, "%Y-%m-%d") AS birth,
            id_mother,
            id_father,
            STATUS
        FROM person
        LIMIT 0, 1000;`,
        (err, results, fields) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    title: "An error has been ocurred",
                    message: `Can not get all persons`,
                    icon: "danger",
                    details: err,
                })
            } else {
                res.status(200).json({
                    status: 200,
                    title: "Congrats",
                    message: "Persons has been retieved",
                    icon: "success",
                    details: results,
                });
            }
        }
    )
}

module.exports = {
    createPerson,
    getAllPerson
}