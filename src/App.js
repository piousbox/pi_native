// @flow
import React from "react"
import { StackNavigator, DrawerNavigator } from "react-navigation"
import { Root } from "native-base"

import Login from "./container/LoginContainer"
import Home from './container/HomeContainer'
import Report from './container/ReportContainer'
import BlankPage from "./container/BlankPageContainer"
import Sidebar from "./container/SidebarContainer"

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
    Login: { screen: Login },
    Sidebar: { screen: Sidebar },
	},
	{
		initialRouteName: "Sidebar",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		BlankPage: { screen: BlankPage },
		Drawer: { screen: Drawer },
		Home: { screen: Home, },
    Report: { screen: Report },
	},
	{
		initialRouteName: "Home",
		// headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
