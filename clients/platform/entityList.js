

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
	getEntityLists: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/platform/entitylists/?pageSize={pageSize}&startIndex={startIndex}&filter={filter}&sortBy={sortBy}&responseFields={responseFields}'
	}),
	getEntityList: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/platform/entitylists/{entityListFullName}?responseFields={responseFields}'
	}),
	createEntityList: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/platform/entitylists/?responseFields={responseFields}'
	}),
	updateEntityList: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/platform/entitylists/{entityListFullName}?responseFields={responseFields}'
	}),
	deleteEntityList: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/platform/entitylists/{entityListFullName}'
	})
});
