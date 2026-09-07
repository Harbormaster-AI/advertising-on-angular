
// Define collection and schema for CreativeAsset
export interface CreativeAsset {
    name:
	type : String
    clickUrl:
	type : URL
    landingPage:
	type : URL
    width:
	type : Number
    height:
	type : Number
    durationSeconds:
	type : Number
    Files:
 	type : [{ type: Schema.Types.ObjectId, ref: 'CreativeFile' }]
    Approvals:
 	type : [{ type: Schema.Types.ObjectId, ref: 'CreativeApproval' }]
    Variations:
 	type : [{ type: Schema.Types.ObjectId, ref: 'CreativeVariation' }]
    LineItems:
 	type : [{ type: Schema.Types.ObjectId, ref: 'LineItem' }]
    CreativeType:
 	type : String
    AdFormat:
 	type : String
#
    collection: 'creativeAssets'
}
