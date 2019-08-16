import React from 'react';
import Form from 'react-validation/build/form';
import { Input } from '../UI/Input';
import { FormButton } from '../UI/Button';
import * as valid from '../../api/formValidator';

function UserInfo({ onSubmit, updateUserInfo, userInfo, signedUp }) {
  return (
    <Form className="UserInfo" onSubmit={onSubmit}>
      <div className="row no-gutters">
        <div className="col--xs--6">
          <div className="Input">
            <label htmlFor="first">First*</label>
            <Input
              placeholder="First"
              id="first"
              type="text"
              name="first"
              validations={[valid.required]}
              onChange={e => updateUserInfo(e)}
            />
          </div>
        </div>
        <div className="col--xs--6" style={{ paddingLeft: '8px' }}>
          <div className="Input">
            <label htmlFor="last">Last*</label>
            <Input
              placeholder="Last"
              id="last"
              type="text"
              name="last"
              validations={[valid.required]}
              onChange={e => updateUserInfo(e)}
            />
          </div>
        </div>
      </div>
      <div className="Input">
        <label htmlFor="email">Email*</label>
        <Input
          placeholder="example@domain.com"
          id="email"
          type="email"
          name="email"
          validations={[valid.required, valid.email]}
          onChange={e => updateUserInfo(e)}
        />
      </div>
      <div className="Input">
        <label htmlFor="password">Password*</label>
        <Input
          placeholder="Password"
          id="password"
          type="password"
          name="password"
          validations={[valid.required, valid.password]}
          onChange={e => updateUserInfo(e)}
        />
      </div>
      <div className="Input">
        <label htmlFor="passwordConfirm">Confirm Password*</label>
        <Input
          placeholder="Confirm Password"
          id="confirm"
          type="password"
          name="passwordConfirm"
          validations={[valid.required, valid.password]}
          onChange={e => updateUserInfo(e)}
        />
      </div>
      <FormButton type="submit" level="success" disabled={signedUp}>
        Create An Account
      </FormButton>
    </Form>
  );
}

export default UserInfo;
