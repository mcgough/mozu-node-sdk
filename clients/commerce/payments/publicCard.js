

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
	create: Client.method({
		method: constants.verbs.POST,
		url: '{+pciPod}payments/commerce/payments/cards/'
	}),
	update: Client.method({
		method: constants.verbs.PUT,
		url: '{+pciPod}payments/commerce/payments/cards/{cardId}'
	}),
	delete: Client.method({
		method: constants.verbs.DELETE,
		url: '{+pciPod}payments/commerce/payments/cards/{cardId}'
	})
});
