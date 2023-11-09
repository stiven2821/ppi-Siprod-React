const {Router} = require('express')
const router = Router()

//ponemos la estructura 
router.route('/')//ruta home: ruta inicial

    .get()
    .post()

router.route('/:id')//
    .get()//para consultar un solo documento
    .delete()
    .put()//actualizar campos de nuestro documento

module.export = router; //para poder utilizar nuestro archivo en otra parte de nuestro proyecto
