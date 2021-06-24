import { createSlice } from '@reduxjs/toolkit'

export const uploadSlice = createSlice({
	name: 'upload',
	initialState: [],
	reducers: {
		addUpload: (state, action) => {
			// fileName: "samsung-air-conditioner.jpeg"
			// percent: 100
			// photoId: 1
			const { photoId, fileName, percent } = action.payload;

			if (state.some((t) => t.photoId === photoId)) {
				return state.map((t) => {
					if (t.photoId === photoId) {
						return { ...t, fileName, percent, }
					}
					return { ...t }
				})
			}

			return [...state, { photoId, fileName, percent, }]
		},
		updateUpload: (state, action) => {
			const payload = action.payload;
			state.map((t) => {
				if (t.photoId === payload.photoId) {
					// update percent, url, delete_token
					t.percent = payload.percent;
					t.url = payload.url;
					t.delete_token = payload.delete_token
				}
			})

		},
		deleteUpload: (state, action) => {
			return state.filter((t) => {
				// return t.photoId !== action.payload.photoId
				return t.delete_token !== action.payload.delete_token
			})
		}

	}
})

export const { addUpload, deleteUpload, updateUpload } = uploadSlice.actions;
export const allUpload = (state) => state.upload

export default uploadSlice.reducer