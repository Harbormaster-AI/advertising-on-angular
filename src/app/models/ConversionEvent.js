
// Define collection and schema for ConversionEvent
export interface ConversionEvent {
    timestamp:
	type : String
    value:
	type : Money
    Campaign:
	type : Schema.Types.ObjectId
    LineItem:
	type : Schema.Types.ObjectId
    TrackingPixel:
	type : Schema.Types.ObjectId
    EventType:
 	type : String
    AttributionModel:
 	type : String
#
    collection: 'conversionEvents'
}
