import React, { Component } from 'react'
import { connect } from 'react-redux';



class Tiaozhuan extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   wikilist: []
    // }
  }

 

  render() {
    return (
      <div>
        {this.props.match.params.id1}<br/>
        {this.props.match.params.id2}
        tiaozhuan
      </div>
    )
  }


}

export default Tiaozhuan;