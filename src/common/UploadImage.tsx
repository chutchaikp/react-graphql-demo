import { Flex } from '@chakra-ui/react';
import React from 'react'
import request from 'superagent';
import { BiImageAdd } from "react-icons/bi";

interface UploadImageProps {
	photoId: number,
	onProgress: (photoId: number, fileName: string, progress: number) => void,
	onUploaded: (photoId: number, fileName: string, response: any) => void,
}

const UploadImage: React.FC<UploadImageProps> = ({ photoId, onProgress, onUploaded }) => {

	const upload = (files: any) => {
		try {
			const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`;

			for (let file of files) {
				const fileName = file.name;
				request.post(url)
					.field('upload_preset', process.env?.REACT_APP_UPLOAD_PRESET || "")
					.field('file', file)
					.field('multiple', true)
					.field('tags', fileName) // ? `myphotoalbum,${title}` : 'myphotoalbum')
					.field('context', fileName) // title ? `photo=${title}` : '')
					.on('progress', (progress: any) => {
						onProgress(photoId, file.name, Math.floor(progress.percent));
					})
					.end((error, response) => {
						onUploaded(photoId, fileName, response)
					});
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Flex w="100%" direction="column">


			{/* <input
				type="file"
				id="fileupload"
				accept="image/*"
				onChange={(e) =>
					upload(e.target.files)
				}
			/> */}

			<label htmlFor="file-upload"	>

				<BiImageAdd fontSize="50px" color="teal" />

			</label>
			<input id="file-upload" type="file"
				accept="image/*"
				onChange={(e) =>
					upload(e.target.files)
				}
				style={{ display: 'none', }} />

		</Flex>
	);
}
export default UploadImage
