import { configureStore } from '@reduxjs/toolkit'

import uploadReducer from '../slices/UploadSlice'

export default configureStore({
	reducer: {
		upload: uploadReducer
	}
})