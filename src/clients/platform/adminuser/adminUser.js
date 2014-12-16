

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../../constants')
		,AuthProvider;


module.exports = function(Client){
	return Client.sub({
		getTenantScopesForUser : (function(getTenantScopes) { 
			return function getDefaultScope(conf) {
				AuthProvider = AuthProvider || require('../../../auth-provider');
				if (conf) return getTenantScopes.call(this, conf);
				if (this.context.user) return getTenantScopes.call(this, { userId: this.context.user.userId });
				 return AuthProvider.addAdminUserClaims(this).then(function() {
					return getTenantScopes.call(this, { userId: this.context.user.userId });
			}.bind(this));
				}
			})(Client.method({
				scope: constants.scopes.ADMINUSER,
				method: constants.verbs.GET,
				turl: '{+homePod}api/platform/adminuser/accounts/{userId}/tenants?responseFields={responseFields}'
			})),
		getUser :Client.method({
			method: constants.verbs.GET,
			url: '{+homePod}api/platform/adminuser/accounts/{userId}?responseFields={responseFields}'
		})	
	});
};
