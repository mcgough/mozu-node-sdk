

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../../../client'), constants = Client.constants;

module.exports = Client.sub({
	getConfigurations: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/shipping/admin/carriers/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
	}),
	getConfiguration: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/shipping/admin/carriers/{carrierId}?responseFields={responseFields}'
	}),
	createConfiguration: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/shipping/admin/carriers/{carrierId}?responseFields={responseFields}'
	}),
	updateConfiguration: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/shipping/admin/carriers/{carrierId}?responseFields={responseFields}'
	}),
	deleteConfiguration: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/shipping/admin/carriers/{carrierId}'
	})
});
