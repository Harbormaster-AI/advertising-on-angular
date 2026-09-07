
// Define collection and schema for Agency
export interface Agency {
    name:
	type : String
    legalName:
	type : String
    headquartersCountry:
	type : String
    website:
	type : String
    Advertisers:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Advertiser' }]
    Teams:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Team' }]
    Users:
 	type : [{ type: Schema.Types.ObjectId, ref: 'User' }]
    InsertionOrders:
 	type : [{ type: Schema.Types.ObjectId, ref: 'InsertionOrder' }]
#
    collection: 'agencys'
}
