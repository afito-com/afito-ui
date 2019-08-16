import React from 'react';
// TODO
//import SignInForm from '../../SignInForm';
//import SignUpWizard from '../../../containers/SignUpWizard';
import TabGroup from '../TabGroup';
import Tab from '../Tab';

function Welcomer({ activeModalIndex }) {
  return (
    <>
      <div className="Modal__header" />
      <TabGroup defaultIndex={activeModalIndex}>
        <Tab title="Login">{/*<SignInForm />*/}</Tab>
        <Tab title="Join">{/* <SignUpWizard /> */}</Tab>
      </TabGroup>
    </>
  );
}

export default Welcomer;
