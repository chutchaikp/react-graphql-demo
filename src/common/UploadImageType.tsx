export type UploadImageType = {
	// photoId: number;
	imageId?: string, // unique 
	fileName: string;
	percent?: number; // percent uploading
	url?: string;
	delete_token?: string;
};
