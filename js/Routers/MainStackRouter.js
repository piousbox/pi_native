import React, { Component } from "react"
import { StackNavigator } from "react-navigation"
import { Header, Left, Button, Icon, Body, Title, Right } from "native-base"

import Login from "../components/login"
import Home from "../components/Home"
import BlankPage from "../components/blankPage"
import Newsitems from '../components/Newsitems'

import HomeDrawerRouter from "./HomeDrawerRouter"
HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
  header: null
})
export default (StackNav = StackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home },
    BlankPage: { screen: BlankPage },
    Newsitems: { screen: Newsitems },
  },
  {
    initialRouteName: 'Newsitems'
  },
))
