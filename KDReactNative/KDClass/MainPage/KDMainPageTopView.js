/**
 * Created by kaidi on 2016/10/13.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Navigator
} from 'react-native';

var KDMainPageTopViewBottomItem = require('./KDMainPageTopViewBottomItem');
var KDMainPageBannner = require('./KDMainPageBannner');
var KDPushView = require('../KDPushView');

var Dimensions = require('Dimensions');
var Win = Dimensions.get('window');

var KDMainPageTopView = React.createClass({

    getDefaultProps(){
        return{
            iconName: '',
            text : '',
            url : "http://api.lohas100.com/v1/app/index?key=qcr25scj56a8yps2mfmbrgi5gqp95rya&type=4&homepage=1",
        }
    },

    getInitialState(){
        return {
            bunnerImageArr : [],

        }
    },

    render(){
        return(
           <View style={styles.outLayerView}>
               <KDMainPageBannner imageDataArr = {this.state.bunnerImageArr}>

               </KDMainPageBannner>

               <View style={styles.bottomView}>
                   {this.KDRenderBottomViewItem()}

               </View>
           </View>
        );
    },

    KDRenderBottomViewItem(){
        var itemArr = [];
        var itemTextArr = ['抢鲜订','日爆款','乐活通','社区拼'];
        var itemImageName = ['knock','hot','mainPage_classifyChat','group'];
        for (var i = 0; i < itemTextArr.length; i++){
            var text = itemTextArr[i];
                itemArr.push(
                    <KDMainPageTopViewBottomItem key={i} iconName = 'LHTabBar_homenow' text = {text} navigator={this.props.navigator}>

                    </KDMainPageTopViewBottomItem>
                );
        }
        return itemArr;
    },

    componentDidMount(){
        this.KDNetworkRequest();
    },

    KDNetworkRequest(){

        fetch(this.props.url)
            .then((response)=>response.json())
            .then((responseData)=>{
                console.log(responseData['items'][0]['cat_id']);
                this.KDResolvingData(responseData['items']);
            })
            .catch((error)=>{
                if(error){

                }
            })

    },

    KDResolvingData(jsonData){
        var bunnerImageArr = [];
        for(var i = 0;i < jsonData.length;i++){
            bunnerImageArr.push(
                  jsonData[i]['img']
            );
        }

        this.setState({
            bunnerImageArr : bunnerImageArr,
        });
    },


});

const styles = StyleSheet.create({
    outLayerView : {
        width : Win.width,
        height : 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },


    bottomView : {
        width : Win.width,
        height : 80,
        backgroundColor: 'white',
        flexDirection : 'row',
        justifyContent:'center',
    },

});

module.exports = KDMainPageTopView;