

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
	getDocumentListTypes: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/content/documentlistTypes/{documentListTypeFQN}?responseFields={responseFields}'
	}),
	getDocumentListType: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/content/documentlistTypes/{documentListTypeFQN}?responseFields={responseFields}'
	}),
	createDocumentListType: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/content/documentlistTypes/?responseFields={responseFields}'
	}),
	updateDocumentListType: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/content/documentlistTypes/{documentListTypeFQN}?responseFields={responseFields}'
	})
});
