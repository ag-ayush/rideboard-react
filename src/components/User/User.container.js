import { connect } from 'react-redux';
import User from './User';

const mapStateToProps = (state, props) => {
  const user = state.oidc.user;
  console.log(user)
  const isAuthenticated = user !== null && !user.expired;
  return {
    isVisible: isAuthenticated,
    id_token: user && user.id_token ? user.id_token : ''  
  };
};

const enhance = connect(mapStateToProps);

export default enhance(User);
