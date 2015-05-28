

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
	getAccounts: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/customer/accounts/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&fields={fields}&q={q}&qLimit={qLimit}&isAnonymous={isAnonymous}&responseFields={responseFields}'
	}),
	getLoginState: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/loginstate?responseFields={responseFields}'
	}),
	getAccount: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}?responseFields={responseFields}'
	}),
	addAccount: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/customer/accounts/?responseFields={responseFields}'
	}),
	changePassword: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/Change-Password?unlockAccount={unlockAccount}'
	}),
	addLoginToExistingCustomer: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/Create-Login?responseFields={responseFields}'
	}),
	recomputeCustomerLifetimeValue: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/recomputelifetimevalue'
	}),
	setLoginLocked: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/Set-Login-Locked'
	}),
	setPasswordChangeRequired: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/Set-Password-Change-Required'
	}),
	addAccountAndLogin: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/customer/accounts/Add-Account-And-Login?responseFields={responseFields}'
	}),
	addAccounts: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/customer/accounts/Bulk?responseFields={responseFields}'
	}),
	changePasswords: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/customer/accounts/Change-Passwords?responseFields={responseFields}'
	}),
	getLoginStateByEmailAddress: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/customer/accounts/loginstatebyemailaddress?emailAddress={emailAddress}&responseFields={responseFields}'
	}),
	getLoginStateByUserName: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/customer/accounts/loginstatebyusername?userName={userName}&responseFields={responseFields}'
	}),
	resetPassword: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/customer/accounts/Reset-Password'
	}),
	updateAccount: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}?responseFields={responseFields}'
	}),
	deleteAccount: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}'
	})
});