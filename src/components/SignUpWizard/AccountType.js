import React from 'react';
import Card from '../../components/UI/Card';
import landlordImg from '../../images/icons8-user_credentials.svg';
import studentImg from '../../images/icons8-students.svg';

function AccountType({ dispatch }) {
  return (
    <div className="AccountType">
      <h6>I am a...</h6>
      <div className="row">
        <div className="col--xs--6 col--sm--6 col--md--6 col--lg--6 col--xl--6">
          <Card type="noimage" onClick={() => dispatch({ data: 'landlord', step: 'accountType' })}>
            <div className="row">
              <div className="col--xs--12 col--sm--12 col--md--12 col--lg--12 col--xl--12">
                <img width="64" src={landlordImg} alt="Landlord" />
                <h5>Landlord</h5>
              </div>
            </div>
          </Card>
        </div>
        <div className="col--xs--6 col--sm--6 col--md--6 col--lg--6 col--xl--6">
          <Card type="noimage" onClick={() => dispatch({ data: 'user', step: 'accountType' })}>
            <div className="row">
              <div className="col--xs--12 col--sm--12 col--md--12 col--lg--12 col--xl--12">
                <img width="64" src={studentImg} alt="Student" />
                <h5>Student</h5>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AccountType;
