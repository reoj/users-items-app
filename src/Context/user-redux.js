import { configureStore } from '@reduxjs/toolkit'
import	userSlice from './user-redux-slice'

export default configureStore({
    reducer: {
      users: userSlice
    }
  })

