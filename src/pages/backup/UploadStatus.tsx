import { Button, HStack } from "@chakra-ui/react";
import emptyImg from '../../imgs/empty.jpeg'
import styles from '../../App.module.css'

function UploadStatus(props: any) {
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

export default UploadStatus