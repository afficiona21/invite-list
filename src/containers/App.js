import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loader from './../components/Loader';
import MessageBox from './../components/MessageBox';
import List from './../components/List';

import * as actions from './../actions';

class App extends Component {
  constructor(props) {
    super();

    this.getCustomers = () => {
      this.props.actions.fetchCustomers();
    };
  }

  componentWillMount() {
    // Fetching customers on app mount
    this.getCustomers();
  }

  render() {

    return (
      <div className="app">
        <div className="app__container">
          <div className="shell">
            <div className="shell__content">

              {(() => {
                if (this.props.IsLoading) {
                  return <Loader />
                }

                if (this.props.Error) {
                  return <MessageBox danger text={this.props.Error} action={this.getCustomers} />
                }

                if (!this.props.Data.size) {
                  return <MessageBox danger text="No customers to show!" action={this.getCustomers} />
                }

                return (
                  <List data={this.props.Data} />
                );
              })()}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ Customers }) {
  return {
    IsLoading: Customers.get('isFetching'),
    Data: Customers.get('data'),
    Error: Customers.get('error')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
