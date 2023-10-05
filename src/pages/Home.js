import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OldReward from "components/OldReward";
import OldReward2 from "components/OldReward2";
import React from "react";
import Exclude from 'components/Exclude';

const Home = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="oldreward1"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="oldreward1" title="Old Reward 1 Year">
          <OldReward />
        </Tab>
        <Tab eventKey="oldreward2" title="Old Reward 2 Year">
          <OldReward2 />
        </Tab>
        <Tab eventKey="exclude" title="Exclude From Fees">
          <Exclude />
        </Tab>
      </Tabs>
    </>
  );
};

export default Home;
