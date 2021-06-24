import { Button, Flex, Heading, HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import UploadImage from '../common/UploadImage';
// import UploadImageStatus from '../common/UploadImageStatus';
import { UploadImageType } from '../common/UploadImageType';
import styles from '../App.module.css'
import emptyImg from '../imgs/empty.jpeg'
import request from 'superagent';

const UploadImageContainer = (props: any) => {

	const [uploads, setUploads] = useState<UploadImageType[]>([])

	const deletePhoto = (token: string) => {

		debugger;

		request
			.post(
				`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/delete_by_token`
			)
			.set('Content-Type', 'application/json')
			.set('X-Requested-With', 'XMLHttpRequest')
			.send({ token, })
			.then((res) => {
				debugger;
				let newUploads = [...uploads];
				newUploads = newUploads.filter((t) => {
					return t.delete_token !== token
				})
				setUploads(newUploads);
			}).catch((err) => {
				debugger;
				let newUploads = [...uploads];
				newUploads = newUploads.filter((t) => {
					return t.delete_token !== token
				})
				setUploads(newUploads);
			});
	}

	return (
		<Flex direction="column" >

			<UploadImage photoId={uploads.length + 1}
				onProgress={(photoId, fileName, progress) => {
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

					// props.onUpdated(() => {
					// 	return uploads;
					// });
				}}
				onUploaded={(photoId, fileName, response) => {

					debugger;

					// 100% uploaded				
					setUploads((prev: UploadImageType[]) => {
						const newUpload = prev.map((u) => {
							if (u.photoId === photoId) {
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

					debugger;
					// props.onUpdated(uploads);

				}} />

			{/* <UploadImageStatus uploads={uploads} /> */}

			{uploads && props.onUpdated(uploads) && uploads.map((t: UploadImageType) => {
				return (
					<UploadStatusV2 key={t.photoId} deletePhoto={deletePhoto} t={t}></UploadStatusV2>
				)
			})}

		</Flex>
	);
}

export default UploadImageContainer
// export default React.forwardRef(UploadImageContainer);




function UploadStatusV2(props: any) {
	return (<div style={{
		margin: "1rem"
	}}>
		<HStack spacing="1.5rem">
			<img width="200px" src={props.t.url || emptyImg} alt={props.t.fileName} />

			{
				/* {t.fileName} */
			}

			{props.t.delete_token && <Button size="xs" colorScheme="red" onClick={() => {
				props.deletePhoto(props.t.delete_token || "");
			}}>
				REMOVE!
			</Button>}
		</HStack>

		{!props.t.url && <div>
			<div>Uploading... {props.t.percent} % </div>
			<div className={styles.progressBar}>
				<div className={styles.progress} role="progressbar" style={{
					width: props.t.percent + '%'
				}} />
			</div>
		</div>}
	</div>);
}