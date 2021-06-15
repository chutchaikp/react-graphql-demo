import { Flex, Heading } from '@chakra-ui/react';
import React, { useState } from 'react'
import UploadImage from '../common/UploadImage';
import UploadImageStatus from '../common/UploadImageStatus';
import { UploadImageType } from '../common/UploadImageType';

const UploadImageContainer: React.FC = (props) => {

	const [uploads, setUploads] = useState<UploadImageType[]>([])

	return (
		<Flex direction="column" >

			<Heading>
				Upload image container ...
			</Heading>

			<UploadImage photoId={uploads.length + 1} onProgress={(photoId, fileName, progress) => {

				// Add new or update exist
				setUploads((prev: UploadImageType[]) => {
					debugger;
					if (prev.some((p) => p.photoId === photoId)) {
						// update exist with new progress
						debugger;
						const newUpload = prev.map((u) => {
							if (u.photoId === photoId) {
								return { ...u, progress: progress || 0 }
							}
							return { ...u };
						});
						return newUpload;
					} else {
						// add new
						return [...prev, { photoId, fileName, progress }]
					}
				});
			}} onUploaded={(photoId, fileName, response) => {
				// 100% uploaded
				setUploads((prev: UploadImageType[]) => {
					const newUpload = prev.map((u) => {
						if (u.photoId === photoId) {
							return { ...u, progress: 100 }
						}
						return { ...u };
					});
					return newUpload;
				});

			}} />

			<UploadImageStatus uploads={uploads} />

		</Flex>
	);
}
export default UploadImageContainer