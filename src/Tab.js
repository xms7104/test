import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <p>1</p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
      <p>1</p>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
      <p>1</p>
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;