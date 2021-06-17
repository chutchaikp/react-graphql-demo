
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



import React from 'react'
import { UploadImageType } from '../common/UploadImageType';
import emptyImg from '../imgs/empty.jpeg'
import styles from '../App.module.css'

interface UploadImageStatusProps {
	uploads: UploadImageType[]
}

const UploadImageStatus: React.FC<UploadImageStatusProps> = ({ uploads }) => {

	// debugger;
	const uploadsRev = [...uploads].reverse()

	function resizeImage(img: any) {
		img.style.width = "500px";
		img.style.height = "500px";
	}

	return (
		<div>
			Upload image status ..

			<div>
				{uploadsRev && uploadsRev.map((t: UploadImageType) => {
					return (
						<div key={t.photoId} style={{ margin: "1rem" }}>
							<div>
								<img onClick={(e: any) => {
									if (e.target.width === 200) {
										e.target.style.left = "0px"
										e.target.style.top = "0px"
										e.target.style.position = "absolute"
										e.target.style.width = "500px"
										e.target.style.zIndex = 999
									} else {
										e.target.style.width = "200px"
										e.target.style.position = "relative"
									}
								}} width="200px" src={t.url || emptyImg} alt={t.fileName} />
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

						</div>
					)
				})}
			</div>

		</div>
	);
}
export default UploadImageStatus