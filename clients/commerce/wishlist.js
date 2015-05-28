

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../client'), constants = Client.constants;


module.exports = Client.sub({
	getWishlists: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/wishlists/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&q={q}&qLimit={qLimit}&responseFields={responseFields}'
	}),
	getWishlist: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/wishlists/{wishlistId}?responseFields={responseFields}'
	}),
	getWishlistByName: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/wishlists/customers/{customerAccountId}/{wishlistName}?responseFields={responseFields}'
	}),
	createWishlist: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/wishlists/?responseFields={responseFields}'
	}),
	updateWishlist: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/wishlists/{wishlistId}?responseFields={responseFields}'
	}),
	deleteWishlist: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/wishlists/{wishlistId}'
	})
});
