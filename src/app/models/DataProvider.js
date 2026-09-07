
// Define collection and schema for DataProvider
export interface DataProvider {
    name:
	type : String
    website:
	type : String
    AudienceSegments:
 	type : [{ type: Schema.Types.ObjectId, ref: 'AudienceSegment' }]
    ProviderType:
 	type : String
#
    collection: 'dataProviders'
}
