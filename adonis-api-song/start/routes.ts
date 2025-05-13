/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import LaguController from '#controllers/lagus_controller'

router.get('/', async ({ response }) => {
  return response.redirect('/lagu')
})

router.get('/lagu', [LaguController, 'index'])
router.get('/lagu/:id', [LaguController, 'show'])
router.post('/lagu', [LaguController, 'store'])
router.put('/lagu/:id', [LaguController, 'update'])
router.delete('/lagu/:id', [LaguController, 'destroy'])
