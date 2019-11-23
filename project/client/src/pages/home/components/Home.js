import React, { Component } from "react";
import { Tabs, Icon } from "antd";
import MyPosts from "./MyPosts";
import AllPosts from "./AllPosts";
import { Link } from "react-router-dom";

const { TabPane } = Tabs;

class Home extends Component {
  render() {
    const { iconContainer } = styles;

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
        <div style={iconContainer}>
          <Link to="/create/post">
            <Icon type="plus" />
          </Link>
        </div>
      </div>
    );
  }
}

const styles = {
  iconContainer: {
    position: "absolute",
    right: 50,
    bottom: 50,
    fontSize: 40,
    height: 50,
    width: 50,
    border: "1px solid #1890FF",
    borderRadius: "50%",
    lineHeight: "50px",
    color: "#1890FF"
  },
  icon: {}
};

export default Home;
