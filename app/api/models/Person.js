const db = require('./connection');

// const Create = async (paramsData) => {
//     db.getConnection((err, connection) => {
//         connection.beginTransaction((err) => {
//             connection.query(
//                 `INSERT INTO person
//                     (id,
//                     fullname,
//                     birth,
//                     id_mother,
//                     id_father,
//                     STATUS)
//                 VALUES 
//                     (${paramsData.fullname},
//                     ${paramsData.birth},
//                     ${paramsData.id_mother ? paramsData.id_mother : null},
//                     ${paramsData.id_father ? paramsData.id_father : null},
//                     ${true});`,
//                 (err, results, fields) => {
//                     try {
                        
//                     } catch (error) {
//                         connection.rollback(() => {
//                             return 1;
//                         })
//                     }
//                 }
//             )
//         })
//     })
// };