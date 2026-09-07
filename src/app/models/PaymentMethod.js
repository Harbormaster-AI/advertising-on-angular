
// Define collection and schema for PaymentMethod
export interface PaymentMethod {
    last4:
	type : String
    cardholderName:
	type : String
    billingAddress:
	type : Address
    BillingProfile:
	type : Schema.Types.ObjectId
    MethodType:
 	type : String
#
    collection: 'paymentMethods'
}
