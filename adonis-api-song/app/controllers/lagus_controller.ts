import type { HttpContext } from '@adonisjs/core/http'
import Lagu from '#models/lagu'


export default class LaguController {
  // Get all lagu
  async index({ response }: HttpContext) {
    const lagu = await Lagu.all()
    return response.json({ data: lagu })
  }

  // Get 1 lagu by id
  async show({ params, response }: HttpContext) {
    const lagu = await Lagu.find(params.id)
    if (!lagu) {
      return response.status(404).json({ message: 'Lagu tidak ditemukan' })
    }
    return response.json(lagu)
  }

  // Create lagu
  async store({ request, response }: HttpContext) {
    const data = request.only(['penyanyi', 'judul_lagu', 'genre', 'nama_album'])
    const lagu = await Lagu.create(data)
    return response.status(201).json(lagu)
  }

  // Update lagu
  async update({ params, request, response }: HttpContext) {
    const lagu = await Lagu.find(params.id)
    if (!lagu) {
      return response.status(404).json({ message: 'Lagu tidak ditemukan' })
    }
    const data = request.only(['penyanyi', 'judul_lagu', 'genre', 'nama_album'])
    lagu.merge(data)
    await lagu.save()
    return response.json(lagu)
  }

  // Delete lagu
  async destroy({ params, response }: HttpContext) {
    const lagu = await Lagu.find(params.id)
    if (!lagu) {
      return response.status(404).json({ message: 'Lagu tidak ditemukan' })
    }
    await lagu.delete()
    return response.json({ message: 'Lagu berhasil dihapus' })
  }
}