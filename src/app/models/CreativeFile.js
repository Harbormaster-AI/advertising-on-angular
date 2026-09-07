
// Define collection and schema for CreativeFile
export interface CreativeFile {
    uri:
	type : URL
    fileSizeKB:
	type : Number
    mimeType:
	type : String
    checksum:
	type : String
    CreativeAsset:
	type : Schema.Types.ObjectId
#
    collection: 'creativeFiles'
}
