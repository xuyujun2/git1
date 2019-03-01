import React, { Component } from 'react'
import { Carousel } from 'antd';
import './style.scss'
// import { connect } from 'http2';
import { connect } from 'react-redux';
import { qhPicture1 } from '../../actions/qhPictureAction'

import { Link } from 'react-router-dom';

function onChange(a, b, c) {
  console.log(a, b, c);
}

class WikiList extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   wikilist: []
    // }
  }

  qiehuanPicture = () => {

    this.props.dispatch(qhPicture1('/api/v2/userList'))

    // setTimeout(function(){
    //   console.log(90,this.props)
    // },3000)

    console.log(10, this.props.qhPicture)
  }

  tiaozhuan = () => {
    this.props.history.push(`/tiaozhuan/1/2`)
  }

  render() {
    return (
      <div>
        <Carousel afterChange={onChange}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <button onClick={this.qiehuanPicture}>点击</button>

        <button onClick={this.tiaozhuan}>跳转</button>
        {/* <Link to={`/tiaozhuan/1/2`}>跳转</Link> */}
        {/* <Link to={`/food/${this.state.geohash}/${this.getCategoryId(item.link)}/${item.title}`}>跳转</Link> */}

        <div style={{width:'500px',color:'black'}}>
          {this.props.qhPicture.map((val, index) => (
            <a style={{display:'inline-block',width:'85px',marginRight:'15px',border:'1px solid red'}} key={index}>邮箱：{val.email.substring(0,4)}</a>
          ))}
        </div>
      </div>
    )
  }


}

function mapStateToProps(state) {
  return {
    qhPicture: state.systemReducer.qhPicture,//轮播图数据
  }
}

export default connect(mapStateToProps)(WikiList);