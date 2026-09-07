
// Define collection and schema for DSP
export interface DSP {
    name:
	type : String
    website:
	type : String
    region:
	type : String
    AdAccounts:
 	type : [{ type: Schema.Types.ObjectId, ref: 'AdAccount' }]
#
    collection: 'dSPs'
}
