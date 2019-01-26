import React from 'react';
import SearchForm from './SearchForm';

const Header = (props) => (
  <header>
    <SearchForm onSearch={props.onSearch}/>
  </header>
);

export default Header;
