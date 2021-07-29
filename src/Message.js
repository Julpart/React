
import './Message.css';
export function Message(props) {

    return (
      <div className="Message">
          <p className="Message-text">
              {props.text}
          </p>
     
      </div>
    );
  }