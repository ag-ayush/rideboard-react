const configuration = {
  isEnabled: true,
  configurations: [
    {
      type: 'google',
      config: {
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
        response_type: 'token id_token',
        // post_logout_redirect_uri: 'http://localhost:3000/',
        scope: 'openid profile',
        authority: process.env.REACT_APP_GOOGLE_ISSUER,
        silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,
        automaticSilentRenew: true,
        loadUserInfo: true,
        checkSessionInterval: 60,
        filterProtocolClaims: true
      }
    },
    {
      type: 'csh',
      config: {
        client_id: process.env.REACT_APP_CSH_OIDC_CLIENT_ID,
        redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
        response_type: 'token id_token',
        // post_logout_redirect_uri: 'http://localhost:3000/',
        scope: 'openid profile',
        authority: process.env.REACT_APP_CSH_OIDC_ISSUER,
        silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,
        automaticSilentRenew: true,
        loadUserInfo: true,
        checkSessionInterval: 60,
        filterProtocolClaims: true
      }
    }
  ]
};

export default configuration;
