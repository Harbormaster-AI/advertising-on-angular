
// Define collection and schema for Advertiser
export interface Advertiser {
    name:
	type : String
    legalName:
	type : String
    industry:
	type : String
    website:
	type : String
    Agency:
	type : Schema.Types.ObjectId
    AdAccounts:
 	type : [{ type: Schema.Types.ObjectId, ref: 'AdAccount' }]
    BillingProfiles:
 	type : [{ type: Schema.Types.ObjectId, ref: 'BillingProfile' }]
    Campaigns:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Campaign' }]
    TrackingPixels:
 	type : [{ type: Schema.Types.ObjectId, ref: 'TrackingPixel' }]
#
    collection: 'advertisers'
}
