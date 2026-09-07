
// Define collection and schema for ExperimentVariant
export interface ExperimentVariant {
    name:
	type : String
    allocation:
	type : Percentage
    Experiment:
	type : Schema.Types.ObjectId
    CreativeVariation:
	type : Schema.Types.ObjectId
    LineItem:
	type : Schema.Types.ObjectId
#
    collection: 'experimentVariants'
}
