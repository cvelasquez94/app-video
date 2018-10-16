import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import './media.css';
class Media extends PureComponent {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     image: this.props.image,
  //     title: this.props.title
  //   }
  // }
  state = {
    title: 'asds'
  }
  handleClick = (event) => {
    console.log(this.props.title)
    this.setState({
      title: 'hola2'
    })
  }
  render() {
    return (
      <div className="Media" onClick={this.handleClick}>
        <div>
            <img
                src={this.props.cover}
                alt=""
                width={260}
                height={160}
            />
            <h3>{this.props.title}</h3>
            <p>{this.props.author}</p>
        </div>
      </div>
    )
  }
}

export default Media;