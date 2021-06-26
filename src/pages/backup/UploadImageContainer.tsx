import { Button, Flex, Heading, HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import UploadImage from './UploadImage';
// import UploadImageStatus from '../common/UploadImageStatus';
import { UploadImageType } from '../../common/UploadImageType';
import emptyImg from '../../imgs/empty.jpeg'
import styles from '../../App.module.css'

// import UploadStatus from './product/UploadStatus';

const UploadImageContainer = (props: any) => {

	// const [photoId, setPhotoId] = useState(0);
	const [uploads, setUploads] = useState<UploadImageType[]>([]);

	return (
		<Flex direction="column" >

			<UploadImage
				onProgress={(imageId, fileName, percent) => {

					// if (uploads.some((t) => t.imageId === imageId)) {
					// 	const newUploads = uploads.map((t) => {
					// 		if (t.imageId === imageId) {
					// 			return { ...t, percent }
					// 		}
					// 		return { ...t }
					// 	})
					// 	debugger;
					// 	setUploads(newUploads);
					// } else {
					// 	const newUploads = [...uploads, { imageId, fileName, percent, url: "", }]
					// 	setUploads(newUploads);
					// }

					debugger;

					setUploads((prev: any) => {
						const data = [...prev]

						debugger;

						if (data.length === 0) {
							return [{ imageId, fileName, percent, url: "", }]
						}

						const newData = data.map((t) => {
							debugger;

							if (t.imageId === imageId) {
								return { ...t, percent }
							}
							return { ...t }
						})

						return newData;

					});

				}}
				onUploaded={(imageId, fileName, response) => {

					// 100% uploaded	
					// dispatch(updateUpload({  percent: 100, url: response.body.url || "", delete_token: response.body.delete_token }))

					try {
						const { url, } = response.body;
						setUploads((prev: any) => {
							const newUploads = prev.map((t: any) => {
								if (t.imageId === imageId) {
									return { ...t, percent: 100, url, }
								}
								return { ...t }
							})
							return newUploads;
						});
					} catch (error) {
						debugger;

					}

				}} />

			{/* <UploadImageStatus uploads={uploads} /> */}

			{/* {uploads && props.onUpdated(uploads) && uploads.map((t: UploadImageType) => {  not working - chenage to redux */}
			{uploads && uploads.map((t: UploadImageType) => {
				return (
					<div key={t.imageId} style={{
						margin: "1rem"
					}}>
						<HStack spacing="1.5rem">
							<img width="200px" src={t.url || emptyImg} alt={t.fileName} />

							{t.fileName}

							{t.delete_token && <Button size="xs" colorScheme="red" onClick={() => {
								debugger;
								// deletePhoto(t.delete_token || "");
							}}>
								REMOVE!
							</Button>}
						</HStack>

						{!t.url && <div>
							<div>Uploading... {t.percent} % </div>
							<div className={styles.progressBar}>
								<div className={styles.progress} role="progressbar" style={{
									width: t.percent + '%'
								}} />
							</div>
						</div>}
					</div>
				)
			})}

			{/* <UploadStatusWithRedux /> */}

		</Flex>
	);
}

export default UploadImageContainer


