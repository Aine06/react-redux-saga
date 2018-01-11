
import React, { Component } from 'react';


export default  function asyncImport(importFn){


  class AsyncComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
    }
    async componentDidMount() {
      const {default: component} = await importFn()
      this.setState({component})
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
 return AsyncComponent

}

