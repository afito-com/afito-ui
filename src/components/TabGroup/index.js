import React, { useState } from 'react';
import styled from 'styled-components';

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div``;

function TabGroup({ defaultIndex, children }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  function handleTabClick(index) {
    setActiveIndex(index);
  }

  function renderTabsAsChildren() {
    return React.Children.map(children, (tab, i) => {
      return React.cloneElement(tab, {
        active: activeIndex === i,
        index: i,
        onClick: handleTabClick
      });
    });
  }

  function renderActiveTabContent() {
    if (children[activeIndex]) {
      return children[activeIndex].props.children;
    }
  }

  return (
    <>
      <Tabs>{renderTabsAsChildren()}</Tabs>
      <Content>{renderActiveTabContent()}</Content>
    </>
  );
}

export default TabGroup;
