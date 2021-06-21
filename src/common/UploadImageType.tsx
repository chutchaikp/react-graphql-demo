export type UploadImageType = {
	photoId: number;
	fileName: string;
	percent?: number; // percent uploading
	url?: string;
	delete_token?: string;
};
