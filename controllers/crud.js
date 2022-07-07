const conexion = require('../database/db'); //para regresar a la carpera dela bd y hacer las consultas

//para enviar los datos a la bd de crear
exports.save = (req, res) => {
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('Insert INTO users set ?', {user:user, rol:rol}, (err, results) => {
        if (err) {
            console.log(err);
        }else {
            res.redirect('/');
        }
    });
    console.log(user + " " + rol);
}

//para enviar datos a la bd de actuzalizar
exports.update = (req, res) => {
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('Update users SET ? WHERE id = ?', [{user:user,rol:rol}, id], (err, results) => {
        if (err) {
            console.log(err);
        }else {
            res.redirect('/');
        }
    });
}