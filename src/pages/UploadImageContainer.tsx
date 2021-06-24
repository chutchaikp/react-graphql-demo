import { Button, Flex, Heading, HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import UploadImage from '../common/UploadImage';
// import UploadImageStatus from '../common/UploadImageStatus';
import { UploadImageType } from '../common/UploadImageType';
import styles from '../App.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { allUpload, addUpload, updateUpload, deleteUpload, } from '../redux/slices/UploadSlice'
import UploadStatusV3 from './product/UploadStatusV3';


const UploadImageContainer = (props: any) => {

	const dispatch = useDispatch();
	const globalUpload = useSelector(allUpload)

	const [photoId, setPhotoId] = useState(0);

	return (
		<Flex direction="column" >

			<UploadImage photoId={photoId}
				onProgress={(photoId, fileName, progress) => {
					debugger;
					if (globalUpload.some((t: any) => t.photoId === photoId)) {
						dispatch(updateUpload({ percent: progress || 100 }))
					} else {
						dispatch(addUpload({ photoId, fileName, percent: progress || 100 }))
						setTimeout(() => {
							setPhotoId(photoId + 1)
						}, 10)
					}
					// props.onUpdated(() => {
					// 	return uploads;
					// });
				}}
				onUploaded={(photoId, fileName, response) => {
					// 100% uploaded									
					debugger;

					dispatch(updateUpload({ photoId, percent: 100, url: response.body.url || "", delete_token: response.body.delete_token }))

				}} />

			{/* <UploadImageStatus uploads={uploads} /> */}

			{/* {uploads && props.onUpdated(uploads) && uploads.map((t: UploadImageType) => {  not working - chenage to redux */}
			{/* {uploads && uploads.map((t: UploadImageType) => {
				return (
					<UploadStatusV2 key={t.photoId} deletePhoto={deletePhoto} t={t}></UploadStatusV2>
				)
			})} */}

			<UploadStatusV3 />

		</Flex>
	);
}

export default UploadImageContainer
// export default React.forwardRef(UploadImageContainer);


