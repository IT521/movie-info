import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

// Containers
import HeaderContainer from 'Containers/HeaderContainer';
import FooterContainer from 'Containers/FooterContainer';

class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <HeaderContainer />
        <div className="app-content">{this.props.children}</div>
        <FooterContainer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node
};
Layout.defaultProps = {
  children: null
};

export default Layout;
