
/// TODO: ~/p/upload_images 
// delete image
// add menu web mobile
// 
// https://stackoverflow.com/questions/13630229/can-i-have-an-onclick-effect-in-css

// stack overflow menu ?

// .left-sidebar-toggle.topbar-icon-on span {
// 	background-color: transparent
// }

// .left-sidebar-toggle.topbar-icon-on span:before,.left-sidebar-toggle.topbar-icon-on span:after {
// 	top: 0;
// 	transform: rotate(-45deg)
// }

// .left-sidebar-toggle.topbar-icon-on span:after {
// 	transform: rotate(45deg)
// }



import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { UploadImageType } from './UploadImageType';
import emptyImg from '../imgs/empty.jpeg'
import styles from '../App.module.css'
import request from 'superagent';

interface UploadImageStatusProps {
	uploads: UploadImageType[]
}

const UploadImageStatus: React.FC<UploadImageStatusProps> = ({ uploads }) => {

	const [photos, setPhotos] = useState<any>(() => {
		debugger;
		return [...uploads]
	})

	const deletePhoto = (token: string) => {
		request
			.post(
				`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/delete_by_token`
			)
			.set('Content-Type', 'application/json')
			.set('X-Requested-With', 'XMLHttpRequest')
			.send({ token, })
			.then((res) => {
				debugger;
				// let newPhotos = [...photos];
				// newPhotos = newPhotos.filter((t) => {
				// 	return t.delete_token !== token
				// })
				// setPhotos(newPhotos);
			}).catch((err) => {
				debugger;
				// let newPhotos = [...photos];
				// newPhotos = newPhotos.filter((t) => {
				// 	return t.delete_token !== token
				// })
				// setPhotos(newPhotos);
			});
	}

	return (
		<div>
			Upload image status ..

			<div>
				{photos && photos.map((t: UploadImageType) => {
					return (
						<div key={t.imageId} style={{ margin: "1rem" }}>
							<div>
								<img width="200px" src={t.url || emptyImg} alt={t.fileName} />
							</div>
							{t.fileName}

							{!t.url && (
								<div>
									<div>Uploading... {t.percent} % </div>
									<div className={styles.progressBar}>
										<div className={styles.progress} role="progressbar" style={{ width: t.percent + '%' }}
										/>
									</div>
								</div>
							)}

							{t.delete_token && (
								<Button ml="1rem" size="xs" colorScheme="red" onClick={() => {
									deletePhoto(t.delete_token || "")
								}} >REMOVE!</Button>
							)}

						</div>
					)
				})}
			</div>

		</div>
	);
}
export default UploadImageStatus