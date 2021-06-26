import { createSlice } from '@reduxjs/toolkit'

export const uploadSlice = createSlice({
	name: 'upload',
	initialState: [],
	reducers: {
		addUpload: (state, action) => {
			debugger;
			// fileName: "samsung-air-conditioner.jpeg"
			// percent: 100

			const { etag, fileName, percent } = action.payload;

			if (state.some((t) => t.etag === etag)) {
				return state.map((t) => {
					if (t.etag === etag) {
						return { ...t, fileName, percent, }
					}
					return { ...t }
				})
			}

			return [...state, { etag, fileName, percent, }]
		},
		updateUpload: (state, action) => {
			const payload = action.payload;
			debugger;

			state.map((t) => {
				if (t.etag === payload.etag) {
					// update percent, url, delete_token
					t.percent = payload.percent;
					t.url = payload.url;
					t.delete_token = payload.delete_token
				}
			})

		},
		deleteUpload: (state, action) => {
			debugger;
			return state.filter((t) => {
				return t.delete_token !== action.payload.delete_token
			})
		}

	}
})

export const { addUpload, deleteUpload, updateUpload } = uploadSlice.actions;
export const allUpload = (state) => state.upload

export default uploadSlice.reducer