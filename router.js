const express = require("express")
const router = express.Router();

const conexion = require("./database/db")
//para la pagina de inicio
router.get('/', (req, res)=>{
    conexion.query('Select * from users', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index', {results: results});
        }
    })
});

//ruta para crear registros
router.get('/create', (req, res)=>{
    res.render('create')
})

//ruta para editar registros
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('Select * from users WHERE id =?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit', {user: results[0]});
        }
    })
})

//ruta para eliminar registros
router.get('/delete/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('Delete from users WHERE id =?',[id], (err, results)=>{
        if (err) {
            console.log(err);
        }else {
            res.redirect('/');
        }
    });
})





const crud = require("./controllers/crud");

router.post('/save', crud.save)
router.post('/update', crud.update)

module.exports = router;
