
// Define collection and schema for AudienceSegment
export interface AudienceSegment {
    name:
	type : String
    estimatedReach:
	type : Number
    description:
	type : String
    Provider:
	type : Schema.Types.ObjectId
    Campaigns:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Campaign' }]
    ProviderType:
 	type : String
#
    collection: 'audienceSegments'
}
