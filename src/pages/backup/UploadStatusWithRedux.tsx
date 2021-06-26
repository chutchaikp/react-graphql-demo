import { Button, Flex, HStack } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allUpload, deleteUpload } from '../../redux/slices/UploadSlice';

import styles from '../../App.module.css'
import emptyImg from '../../imgs/empty.jpeg'
import request from 'superagent';

const UploadStatusWithRedux = () => {

	const dispatch = useDispatch()
	const globalUpload = useSelector(allUpload)


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
				// let newUploads = [...uploads];
				// newUploads = newUploads.filter((t) => {
				// 	return t.delete_token !== token
				// })
				// setUploads(newUploads);
				dispatch(deleteUpload({ delete_token: token }))
			}).catch((err) => {
				debugger;
				dispatch(deleteUpload({ delete_token: token }))
			});
	}

	debugger;

	return (<div>
		<Flex direction="column">
			{globalUpload.map((t: any) => {
				return (
					<div key={t.etag} style={{
						margin: "1rem"
					}}>
						<HStack spacing="1.5rem">
							<img width="200px" src={t.url || emptyImg} alt={t.fileName} />

							{
								/* {t.fileName} */
							}

							{t.delete_token && <Button size="xs" colorScheme="red" onClick={() => {
								deletePhoto(t.delete_token)
								// dispatch(deleteUpload({ delete_token: t.delete_token || "" }));
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
		</Flex>
	</div>);
}
export default UploadStatusWithRedux



// function UploadStatusV2(props: any) {
// 	return (<div style={{
// 		margin: "1rem"
// 	}}>
// 		<HStack spacing="1.5rem">
// 			<img width="200px" src={props.t.url || emptyImg} alt={props.t.fileName} />

// 			{
// 				/* {t.fileName} */
// 			}

// 			{props.t.delete_token && <Button size="xs" colorScheme="red" onClick={() => {
// 				props.deletePhoto(props.t.delete_token || "");
// 			}}>
// 				REMOVE!
// 			</Button>}
// 		</HStack>

// 		{!props.t.url && <div>
// 			<div>Uploading... {props.t.percent} % </div>
// 			<div className={styles.progressBar}>
// 				<div className={styles.progress} role="progressbar" style={{
// 					width: props.t.percent + '%'
// 				}} />
// 			</div>
// 		</div>}
// 	</div>);
// }