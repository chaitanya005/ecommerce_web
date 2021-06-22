import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import movieReducer from '../features/movie/movieSlice'
import menShirtReducer from '../features/men-shirts/menShirt'


export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        menshirts: menShirtReducer
    },

    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})