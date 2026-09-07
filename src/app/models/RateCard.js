
// Define collection and schema for RateCard
export interface RateCard {
    name:
	type : String
    effectiveDate:
	type : Date
    currency:
	type : String
    Publisher:
	type : Schema.Types.ObjectId
    Rates:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Rate' }]
#
    collection: 'rateCards'
}
