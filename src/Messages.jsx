import {Component} from "react";
import React from "react";

class Messages extends Component {

    renderMessage(message) {
        const {member, text} = message;
        const {currentMember} = this.props;
        const messageFromMe = member.id === currentMember.id;
        const className = messageFromMe ?
          "Messages-message currentMember" : "Messages-message";
        let color;
        let namee;
        if(member.clientData) {
             color = member.clientData.color;
             namee = member.clientData.username;
        } else {
             color = member.color;
             namee = member.username;
        }
        
        return (
            <li className={className}>
            <span
              className="avatar"
              style={{backgroundColor: color}}
            />
            <div className="Message-content">
              <div className="username">
                {namee}
              </div>
              <div className="text">{text}</div>
            </div>
          </li>
        );
      }

  render() {
    const {messages} = this.props;
    return (
      <ul className="Messages-list">

        {messages.map((m) => {
            if(m.text == '') {
                return false; 
            } 
            return this.renderMessage(m)
        })}
      </ul>
    );
  }
}

export default Messages;