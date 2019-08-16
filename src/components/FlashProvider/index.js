import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FlashContext = React.createContext({
  flash: undefined
});

class FlashProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flash: undefined
    };

    this.makeFlash = this.makeFlash.bind(this);
    this.hideFlash = this.hideFlash.bind(this);
  }

  makeFlash(type, message, timer = 2000) {
    this.setState({ flash: { type, message, timer } });
  }

  hideFlash() {
    this.setState({ flash: undefined });
  }

  render() {
    const { children } = this.props;

    return (
      <FlashContext.Provider
        value={{
          ...this.state,
          makeFlash: this.makeFlash,
          hideFlash: this.hideFlash
        }}
      >
        {children}
      </FlashContext.Provider>
    );
  }
}

class Flash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'shown'
    };

    this.getIcon = this.getIcon.bind(this);
  }

  componentDidMount() {
    if (this.props.inline) {
      return;
    }

    const defaultTimer = 2000;
    const timer = this.props.flash.timer || defaultTimer;

    this.timeout = setTimeout(() => {
      this.setState({ status: 'hidden' });
    }, timer);
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.setState({ status: 'hidden' });
    }
  }

  getIcon(type) {
    switch (type) {
      case 'info':
        return <FontAwesomeIcon className="icon" icon="info-circle" />;
      case 'success':
        return <FontAwesomeIcon className="icon" icon="check-circle" />;
      case 'danger':
        return <FontAwesomeIcon className="icon" icon="exclamation-triangle" />;
      case 'warning':
        return <FontAwesomeIcon className="icon" icon="exclamation-circle" />;
      default:
        return null;
    }
  }

  render() {
    const { status } = this.state;
    const { flash, inline } = this.props;
    const { type, message } = flash;
    const flashClass = `flash flash--${type} flash--${status}${inline ? ' flash--inline' : ''}`;
    const faIcon = this.getIcon(type);

    return (
      <div onTransitionEnd={e => this.context.hideFlash()} className={flashClass}>
        {faIcon}
        {message || 'Unknown Error: Try again later.'}
      </div>
    );
  }
}

Flash.contextType = FlashContext;

export { Flash, FlashProvider, FlashContext };
