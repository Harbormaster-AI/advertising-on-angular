
// Define collection and schema for Placement
export interface Placement {
    name:
	type : String
    flight:
	type : DateRange
    goalImpressions:
	type : Number
    LineItem:
	type : Schema.Types.ObjectId
    AdSlot:
	type : Schema.Types.ObjectId
    Deal:
	type : Schema.Types.ObjectId
#
    collection: 'placements'
}
