import React, { Component } from "react";
import { Tabs } from "antd";
import MyPosts from "./MyPosts";
import AllPosts from "./AllPosts";

const { TabPane } = Tabs;

class Home extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="MY POSTS" key="1">
            <MyPosts />
          </TabPane>
          <TabPane tab="ALL POSTS" key="2">
            <AllPosts />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Home;
