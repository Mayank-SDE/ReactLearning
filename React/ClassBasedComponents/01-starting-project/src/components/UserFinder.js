import { Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';


class UserFinder extends Component {
  static contextType = UsersContext;


  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: ''
    };
  }

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({ filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)) });
    }

  }

  //It will only run once 
  componentDidMount() {
    //Send http request 
    this.setState({ filteredUsers: this.context.users });

  }

  render() {

    const value = <div><div className={classes.finder}>
      <input type='search' onChange={this.searchChangeHandler.bind(this)} />
    </div>
      <ErrorBoundary>
        <Users users={this.state.filteredUsers} />
      </ErrorBoundary></div>;

    return <UsersContext.Consumer>
      {() => value}

    </UsersContext.Consumer>;
  }
}
export default UserFinder;