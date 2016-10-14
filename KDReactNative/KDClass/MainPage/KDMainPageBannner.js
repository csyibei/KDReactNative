/**
 * Created by kaidi on 2016/10/13.
 */
//KDMainPageBannner
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Navigator,
    ScrollView
} from 'react-native';

var KDMainPageBannner = React.createClass({

    getDefaultProps(){
        return{
            // 每隔多少时间
            duration: 1000,

            // 所有的Image对象数组
            imageDataArr: [],
        }
    },

    render(){
        return(

            <ScrollView
                horizontal={true}
                // 隐藏水平滚动条
                showsHorizontalScrollIndicator={false}
                // 自动分页
                pagingEnabled={true}
            >
                {this.KDRenderImage()}
            </ScrollView>


        );
    },

    KDRenderImage(){
        var imageItem = [];
        var imageDataArr = this.props.imageDataArr;
        for(var i = 0; i < imageDataArr.length; i++){
            imageItem.push(
                <Image key={i} style={{width:375,height:170}} source={{uri : imageDataArr[i]}}></Image>
            )
        }
        return imageItem;
    },

    pushToxxxx(){
        this.props.navigator.push(
            {
                component: KDPushView, // 要跳转的版块
                title:'详情页'
            }
        );
    }
});

const styles = StyleSheet.create({


});

module.exports = KDMainPageBannner;