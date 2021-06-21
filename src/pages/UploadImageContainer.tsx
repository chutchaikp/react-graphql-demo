import { Flex, Heading } from '@chakra-ui/react';
import React, { useState } from 'react'
import UploadImage from '../common/UploadImage';
import UploadImageStatus from '../common/UploadImageStatus';
import { UploadImageType } from '../common/UploadImageType';

const UploadImageContainer: React.FC = (props) => {

	// photoId: number;
	// fileName: string;
	// percent?: number; // percent uploading
	// url?: string;


	const [uploads, setUploads] = useState<UploadImageType[]>([
		{
			photoId: 0,
			fileName: "Image001.png",
			percent: 50,
			// url: 'https://res.cloudinary.com/dexoyyxyg/image/upload/v1622249946/Screen_Shot_2564-05-11_at_03.48.52_rpidjx.png',
			delete_token: "",
		},
	])

	return (
		<Flex direction="column" >

			<Heading>
				Upload image container ...
			</Heading>

			<UploadImage photoId={uploads.length + 1} onProgress={(photoId, fileName, progress) => {
				// Add new or update exist
				setUploads((prev: UploadImageType[]) => {
					if (prev.some((p) => p.photoId === photoId)) {
						// update exist with new progress						
						const newUpload = prev.map((u) => {
							if (u.photoId === photoId) {
								return { ...u, percent: progress || 100 }
							}
							return { ...u };
						});
						return newUpload;
					} else {
						// add new
						return [...prev, { photoId, fileName, percent: progress }]
					}
				});
			}} onUploaded={(photoId, fileName, response) => {
				// 100% uploaded
				debugger;
				setUploads((prev: UploadImageType[]) => {
					const newUpload = prev.map((u) => {
						if (u.photoId === photoId) {

							debugger;
							return {
								...u,
								percent: 100,
								url: response.body.url || "",
								delete_token: response.body.delete_token
							}
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