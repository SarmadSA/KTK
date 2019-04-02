import React, {Component} from 'react';

class TweetBox extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }
    
  handleChange = (event) => {
    this.setState({ text: event.target.value });
    this.props.onChange(event);
  };
  
  overflowAlert = () => {
    if (this.remainingCharacters() < 0) {
      var beforeOverflowText = this.state.text.substring(140 - 5, 140);
      var overflowText = this.state.text.substring(140);

      return (
        <div>
          <strong>Oops! Too Long:</strong>
            &nbsp;...{beforeOverflowText}
            <strong className="bg-danger">{overflowText}</strong>
        </div>
      );
    }
  };
  
  remainingCharacters = () => {
         return 140 - this.state.text.length;   
  };
  
   render()  {
    return (
      <div className="well clearfix">
        <textarea className="form-control"
                  onChange={this.handleChange.bind(this)} value={this.props.text}>
        </textarea>
          <span style={{float: 'right'}}>{this.remainingCharacters()}</span>
        <br />
        {this.overflowAlert()} 
      </div>
    );
  }
};

export default TweetBox;
