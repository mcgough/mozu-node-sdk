

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
	applyCoupon: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/carts/{cartId}/coupons/{couponCode}?responseFields={responseFields}'
	}),
	removeCoupons: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/carts/{cartId}/coupons'
	}),
	removeCoupon: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/carts/{cartId}/coupons/{couponcode}'
	})
});
