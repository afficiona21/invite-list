import React, {Component} from 'react';
import classnames from 'classnames';

import { DEFAULT_MESSAGE_BOX_ACTION_TEXT } from './../../constants/States';

/**
 * Component to show a message box.
 * Three different types of message box. viz, danger(for error states), success(for success states)
 * and default for normal messages.
 * Props:
 *  - text: To show the message
 *  - action: to allow to perform an action on Message
 *  - actionText: action text
 *  - danger: Set the theme of the message box to danger
 *  - success: Set the theme of the message box to success
 */
class MessageBox extends Component {
  render () {
    const classes = classnames('message-box', {
      'message-box--danger': this.props.danger,
      'message-box--success': this.props.success
    });
    return (
      <div className={classes}>
       {this.props.text}
       <p className="message-box__action" onClick={this.props.action}>
        {this.props.actionText || DEFAULT_MESSAGE_BOX_ACTION_TEXT}
       </p>
      </div>
    );
  }
}

export default MessageBox;
