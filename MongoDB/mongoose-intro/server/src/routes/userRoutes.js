import express from "express"
import { handleListUsers, handleAddUsers, handleDeleteUsers, handleEditUsers } from '../controllers/userController.js'

const router = express.Router()

router.get('/list', handleListUsers)
router.post('/add', handleAddUsers)
router.put('/edit', handleEditUsers)
router.delete('/delete/:id', handleDeleteUsers)

export default router;