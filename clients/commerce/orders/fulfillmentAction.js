

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../../client'), constants = Client.constants;


module.exports = Client.sub({
	performFulfillmentAction: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/orders/{orderId}/fulfillment/actions/?responseFields={responseFields}'
	}),
	resendPackageFulfillmentEmail: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/orders/{orderId}/fulfillment/email/resend?responseFields={responseFields}'
	})
});