// @flow
import React from "react"
import { StackNavigator, DrawerNavigator } from "react-navigation"
import { Root } from "native-base"

import Login from "./container/LoginContainer"
import Home from "./container/HomeContainer"
import Home2 from './container/Home2Container'
import BlankPage from "./container/BlankPageContainer"
import Sidebar from "./container/SidebarContainer"

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		BlankPage: { screen: BlankPage },
		Drawer: { screen: Drawer },
		Home: { screen: Home },
		Home2: { 
			screen: Home2,
			path: 'nothing',
			navigationOptions: ({navigation}) => ({
				title: 'irrelevant-nww-title',
			}),
		},
	},
	{
		initialRouteName: "Home2",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
