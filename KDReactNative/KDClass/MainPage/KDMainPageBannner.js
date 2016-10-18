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

var Dimensions = require('Dimensions');
var Win = Dimensions.get('window');
var TimerMixin = require('react-timer-mixin');

var KDMainPageBannner = React.createClass({

    mixins: [TimerMixin],
    
    getDefaultProps(){
        return{
            duration: 1000,

            imageDataArr: [],
        }
    },

    getInitialState(){
        return {
            pageCount : 0,
        }
    },

    render(){
        return(
            <View style={styles.outLayerView}>
                <ScrollView
                    ref = "KDScrollView"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={(e)=>this.KDScrllEnd(e)}
                    onScrollBeginDrag={(e)=>this.KDScrollBeginDrag(e)}
                    onScrollEndDrag={(e)=>this.KDScrollEndDrag(e)}
                >
                    {this.KDRenderImage()}
                </ScrollView>
                <View style={styles.pointView}>
                    {this.KDRenderPoint()}
                </View>

            </View>

        );
    },







    KDScrollEndDrag(e){
        this.KDStartTimer();
        // var KDScrollView = this.refs.KDScrollView;
        // var offsetX = e.nativeEvent.contentOffset.x;
        // if (offsetX >= ((this.props.imageDataArr.length - 1) * Win.width)){
        //
        //     this.setState({
        //         pageCount : 0,
        //     });
        //     KDScrollView.scrollResponderScrollTo({x:0, y:0, animated:false});
        // }
    },

    KDScrollBeginDrag(e){
        this.clearInterval(this.timer);
        // var KDScrollView = this.refs.KDScrollView;
        // var offsetX = e.nativeEvent.contentOffset.x;
        //
        // if (offsetX >= ((this.props.imageDataArr.length - 1) * Win.width)){
        //     KDScrollView.scrollResponderScrollTo({x:0, y:0, animated:false});
        //     this.setState({
        //         pageCount : 0,
        //     });
        // }
    },

    componentDidMount(){
        this.KDStartTimer();
    },

    KDStartTimer(){
        var scrollView = this.refs.KDScrollView;
        var imgCount = this.props.imageDataArr.length;

        this.timer = this.setInterval(function () {
            var activePage = 0;
            if((this.state.pageCount+1) >= imgCount){
                activePage = 0;
            }else{
                activePage = this.state.pageCount+1;
            }

            this.setState({
                pageCount: activePage
            });

            var offsetX = activePage * Win.width;
            scrollView.scrollResponderScrollTo({x:offsetX, y:0, animated:true});

        }, 2000);

    },

    KDScrllEnd(e){
        var KDScrollView = this.refs.KDScrollView;
        var offsetX = e.nativeEvent.contentOffset.x;
        var pageCount = Math.floor(offsetX / Win.width);
        console.log(offsetX);
        this.setState({
            pageCount : pageCount,
        });
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

    KDRenderPoint(){
        var pointArr = [];
        var imageDataArr = this.props.imageDataArr;
        var colorStyle;
        for(var i = 0; i < imageDataArr.length;i++){
            this.state.pageCount == i ? colorStyle = {color : 'green'} : colorStyle = {color : 'gray'}

            pointArr.push(
              <Text key={i} style={[{fontSize : 28},colorStyle]}>&bull;</Text>
            );
        }
        return pointArr;
    },

    pushToxxxx(){
        this.props.navigator.push(
            {
                component: KDPushView,
                title:'详情页'
            }
        );
    }
});

const styles = StyleSheet.create({

    pointView:{
        width : 375,
        height : 20,
        flexDirection : 'row',
        position : 'absolute',
        bottom:5,
        alignItems : 'center',
        justifyContent:'center',
        backgroundColor : '#rgba(0,0,0,0)',
    },
});

module.exports = KDMainPageBannner;