import { Flex } from '@chakra-ui/react';
import React from 'react'
import request from 'superagent';

import { v4 as uuidv4 } from 'uuid';

import { BiImageAdd } from "react-icons/bi";

interface UploadImageProps {
	// photoId: number,
	onProgress: (imageId: string, fileName: string, progress: number) => void,
	onUploaded: (imageId: string, fileName: string, response: any) => void,
}

const UploadImage: React.FC<UploadImageProps> = ({ onProgress, onUploaded }) => {
	const upload = (files: any, imageId: string) => {
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

						console.log(progress);

						const direction = progress.direction; // "upload", "download"						
						if (direction === "upload") {
							try {
								// const { etag } = JSON.parse(progress.currentTarget.response)
								onProgress(imageId, file.name, Math.floor(progress.percent));
							} catch (error) {
								debugger;
							}
						} else {
							// console.log(progress);

						}
					})
					.end((error, response) => {
						console.log("-------------------//-------------------")
						console.log(error, response)
						onUploaded(imageId, fileName, response)
					});
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Flex w="100%" direction="column">
			<label htmlFor="file-upload"	>
				<BiImageAdd fontSize="50px" color="teal" />
			</label>
			<input id="file-upload" type="file" accept="image/*" onChange={(e) => {
				const rndUuid = uuidv4();
				upload(e.target.files, rndUuid)
			}
			} style={{ display: 'none', }} />
		</Flex>
	);
}
export default UploadImage
