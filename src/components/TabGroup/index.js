import React, { Component } from 'react';

class TabGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: this.props.defaultIndex
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(index) {
    this.setState({
      activeIndex: index
    });
  }

  renderTabsAsChildren() {
    return React.Children.map(this.props.children, (tab, i) => {
      return React.cloneElement(tab, {
        active: this.state.activeIndex === i,
        index: i,
        onClick: this.handleTabClick
      });
    });
  }

  renderActiveTabContent() {
    const { children } = this.props;
    const { activeIndex } = this.state;

    if (children[activeIndex]) {
      return children[activeIndex].props.children;
    }
  }

  render() {
    return (
      <div>
        <div className="TabGroup">{this.renderTabsAsChildren()}</div>
        <div className="TabGroup__content">{this.renderActiveTabContent()}</div>
      </div>
    );
  }
}

export default TabGroup;
