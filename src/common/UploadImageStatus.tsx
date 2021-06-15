import React from 'react'
import { UploadImageType } from '../common/UploadImageType';

interface UploadImageStatusProps {
	uploads: UploadImageType[]
}

const UploadImageStatus: React.FC<UploadImageStatusProps> = ({ uploads }) => {

	console.log(uploads)

	return (
		<div>
			Upload image status ..

			<div>
				{uploads && uploads.map((t: UploadImageType) => {
					return (
						<div>xxx</div>
					)
				})}
			</div>

		</div>
	);
}
export default UploadImageStatus