
// Define collection and schema for GeoRegion
export interface GeoRegion {
    code:
	type : String
    name:
	type : String
    Parent:
	type : Schema.Types.ObjectId
    Children:
 	type : [{ type: Schema.Types.ObjectId, ref: 'GeoRegion' }]
    RegionType:
 	type : String
#
    collection: 'geoRegions'
}
