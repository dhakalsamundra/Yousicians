/* eslint-disable no-console */
import axios from 'axios'
import {
  addToFav, getAllSong, removeFromFav
} from '../redux/actions/songAction'

const baseUrl = 'http://localhost:3004'

const getAll = async(dispatch) => {
  try {
    const response = await axios.get(baseUrl + '/song')
    dispatch(getAllSong(response.data))
  } catch (error) {
    console.log(error)
  }
}

const create = async (songId, dispatch) => {
  try {
    const response = await axios ({
      method: 'POST', url: baseUrl + '/favorites', data: songId
    })
    dispatch(addToFav(response.data))
  } catch (error) {
    console.log(error)
  }
}

const deleteSong = async (songId, dispatch) => {
  try {
    await axios({
      method: 'DELETE', url: `${baseUrl}/favorites/${songId}`, data: songId
    })
    dispatch(removeFromFav(songId))
  } catch (error) {
    console.log(error)
  }
}

export default { getAll, create, deleteSong }