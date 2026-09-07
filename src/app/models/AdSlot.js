
// Define collection and schema for AdSlot
export interface AdSlot {
    slotCode:
	type : String
    width:
	type : Number
    height:
	type : Number
    floorPrice:
	type : Money
    InventorySource:
	type : Schema.Types.ObjectId
    Placements:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Placement' }]
    Rates:
 	type : [{ type: Schema.Types.ObjectId, ref: 'Rate' }]
    Format:
 	type : String
#
    collection: 'adSlots'
}
