import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Main from '../../layouts/Main';
import FilterForm from '../../containers/FilterForm'
import SetFilter from '../../containers/SetFilter'
import '../../styles/pages/filter.css'

class Filter extends Component {
  render() {
    return (
      <Main>
        <FilterForm />
        <SetFilter />
      </Main>
    )
  }
}

export default withRouter(Filter)
