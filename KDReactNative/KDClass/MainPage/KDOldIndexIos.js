/**
 * Created by kaidi on 2016/10/12.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    DeviceEventEmitter
} from 'react-native';


var tabBar = require('./KDClass/KDTabbar');

let tabBarHeight = 0;

var KDReactNative = React.createClass({


    // getInitialState(){
    //   return{
    //     selectedTab:'home',
    //     isHidden : false
    //   }
    // },



    // changeprops(ishidden){
    //
    //   this.setState({
    //     isHidden: ishidden
    //   });
    //
    // },

    render(){
        return(
            <tabBar />

        );
    },

    someCode(){
        // <TabNavigator
        //     tabBarStyle={this.state.isHidden ? styles.hidden : ''}
        //     sceneStyle={this.state.isHidden ? styles.hiddenOne : ''}
        // >
        //   <TabNavigator.Item
        //       selected={this.state.selectedTab === 'home'}
        //       title="Home"
        //       renderIcon={() => <Image source={{uri : 'LHTabBar_home'}} style={styles.ImageS} />}
        //       renderSelectedIcon={() => <Image source={{uri : 'LHTabBar_homenow' }} style={styles.ImageS} />}
        //       onPress={() => this.setState({ selectedTab: 'home' })}
        //   >
        //
        //     <Navigator
        //         initialRoute={{name:'Home',component:rootView}}
        //         configureScene={()=>{
        //           return Navigator.SceneConfigs.PushFromRight;
        //         }}
        //         renderScene={(route,navigator)=>{
        //           let Component = route.component;
        //           return <Component {...route.passProps} popToIndex={(ishidden)=>{this.changeprops(ishidden)}} navigator={navigator}/>;
        //         }}
        //     />
        //
        //   </TabNavigator.Item>
        //   <TabNavigator.Item
        //       selected={this.state.selectedTab === 'profile'}
        //       title="Profile"
        //       renderIcon={() => <Image source={{uri : 'LHTabBar_home'}}  style={styles.ImageS}/>}
        //       renderSelectedIcon={() => <Image source={{uri : 'LHTabBar_homenow'}} style={styles.ImageS} />}
        //       onPress={() => this.setState({ selectedTab: 'profile' })}>
        //     <Text>2222</Text>
        //   </TabNavigator.Item>
        // </TabNavigator>
    }

    // componentWillUnmount(){
    //   this.subscription.remove();
    // },
    //
    // componentDidMount(){
    //   this.subscription = DeviceEventEmitter.addListener('pop',this.refreshIndex);
    // },
    //
    // refreshIndex(data){
    //   this.setState({
    //     isHidden: data.isshow
    //   });
    // }

});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   ImageS : {
//     width : 23,
//     height: 21,
//   },
//
//   viewS : {
//     flex : 1,
//   },
//
//   hidden: {
//     overflow: 'hidden',
//     height: tabBarHeight,
//   },
//
//   hiddenOne : {
//     paddingBottom: tabBarHeight,
//   },
//
// });

AppRegistry.registerComponent('KDReactNative', () => KDReactNative);
