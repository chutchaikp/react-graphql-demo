
// /Users/apple / project@2021/upload_images

import { Flex, VStack } from '@chakra-ui/react';
import React from 'react'
import request from 'superagent';

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
					// .field('tags', title ? `myphotoalbum,${title}` : 'myphotoalbum')
					// .field('context', title ? `photo=${title}` : '')
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

			<input
				type="file"
				id="fileupload"
				accept="image/*"
				// multiple="multiple"
				// ref={fileInputEl =>
				// 		(this.fileInputEl = fileInputEl)
				// }
				onChange={(e) =>
					// this.onPhotoSelected(
					// 		this.fileInputEl.files
					// )
					upload(e.target.files)
				}
			/>

			{/* Upload progress */}

			<VStack>
				{/* <div className="status">
						{!response && <div>Uploading... {percent}%</div>}
						{!response && <div>In progress</div>}
						{response && (
								<div className="status-code">
										Upload completed with status code {response.status}
								</div>
						)}
				</div>
				<div className="progress-bar">
						<div
								className="progress"
								role="progressbar"
								style={{ width: percent + '%' }}
						/>
				</div> */}

				{/* {data && (
						<div className="info">
								<table>
										<tbody>
										{Object.keys(data).map(key => {
												return (
														<tr key={key}>
																<td>{key}</td>
																<td>{JSON.stringify(data[key])}</td>
														</tr>
												);
										})}
										</tbody>
								</table>
						</div>
				)} */}
			</VStack>

		</Flex>
	);
}
export default UploadImage