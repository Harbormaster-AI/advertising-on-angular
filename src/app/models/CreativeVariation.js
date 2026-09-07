
// Define collection and schema for CreativeVariation
export interface CreativeVariation {
    name:
	type : String
    language:
	type : String
    headline:
	type : String
    bodyText:
	type : String
    callToAction:
	type : String
    CreativeAsset:
	type : Schema.Types.ObjectId
#
    collection: 'creativeVariations'
}
