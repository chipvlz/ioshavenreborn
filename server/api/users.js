import { Router } from 'express'
import User from '../classes/User'

const router = Router()


/* GET users listing. */
router.get('/users', function (req, res, next) {
  let george = new User('george')
  george.set('age', 4)
  george.save()
  res.json(george.get())
})



export default router
