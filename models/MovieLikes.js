import mongoose from 'mongoose'

const movieLikeSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
      },
      likedMovies: Array,   
})



const MovieLikes = mongoose.model('MovieLikes',movieLikeSchema)

export default MovieLikes