import { Button, Flex, Heading, HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import UploadImage from './UploadImage';
// import UploadImageStatus from '../common/UploadImageStatus';
import { UploadImageType } from '../../common/UploadImageType';
import styles from '../App.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { allUpload, addUpload, updateUpload, deleteUpload, } from '../../redux/slices/UploadSlice'
import UploadStatusWithRedux from './UploadStatusWithRedux';


const UploadImageContainerWithRedux = (props: any) => {

	const dispatch = useDispatch();
	const globalUpload = useSelector(allUpload)

	return (
		<Flex direction="column" >

			<UploadImage
				onProgress={(fileName, progress) => {
					// debugger;
					// if (globalUpload.some((t: any) => t.etag === photoId)) {
					// 	dispatch(updateUpload({ percent: progress || 100 }))
					// } else {
					// 	dispatch(addUpload({ photoId, fileName, percent: progress || 100 }))
					// 	setTimeout(() => {
					// 		setPhotoId(photoId + 1)
					// 	}, 100)
					// }
					// props.onUpdated(() => {
					// 	return uploads;
					// });
				}}
				onUploaded={(fileName, response) => {
					debugger;
					// 100% uploaded									

					// dispatch(updateUpload({ photoId, percent: 100, url: response.body.url || "", delete_token: response.body.delete_token }))

				}} />

			{/* <UploadImageStatus uploads={uploads} /> */}

			{/* {uploads && props.onUpdated(uploads) && uploads.map((t: UploadImageType) => {  not working - chenage to redux */}
			{/* {uploads && uploads.map((t: UploadImageType) => {
				return (
					<UploadStatusV2 key={t.etag} deletePhoto={deletePhoto} t={t}></UploadStatusV2>
				)
			})} */}

			<UploadStatusWithRedux />

		</Flex>
	);
}

export default UploadImageContainerWithRedux
// export default React.forwardRef(UploadImageContainer);


