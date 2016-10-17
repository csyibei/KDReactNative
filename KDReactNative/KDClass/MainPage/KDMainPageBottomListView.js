/**
 * Created by kaidi on 2016/10/17.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Navigator,
    ListView
} from 'react-native';

var KDPushView = require('../KDPushView');
var Dimensions = require('Dimensions');
var Win = Dimensions.get('window');

var KDMainPageBottomListView = React.createClass({

    getInitialState(){

        var  getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        var  getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };

        return{
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged:(s1, s2) => s1 !== s2
            })
        }

    },

    getDefaultProps(){
        return{
            url : "http://api.lohas100.com/v1/app/index?key=qcr25scj56a8yps2mfmbrgi5gqp95rya&homepage=1",
        }
    },

    componentDidMount(){
        this.KDRequestData();
    },

    KDRequestData(){
        fetch(this.props.url)
            .then((response)=>response.json())
            .then((responseData)=>{
                // console.log(responseData['items']);
                this.KDResolvingData(responseData['items']);
            })
            .catch((error)=>{
                if(error){

                }
            })
    },

    KDResolvingData(data){
        var dataBlob = {},
            sectionIDs = [],
            rowIDs = [];

        var typeOneData = [];
        var typeTwoData = [];
        var typeThreeData = [];
        var section = ['抢鲜订','社区拼','日爆款'];

        for(var i = 0; i < data.length; i++){
            if(data[i]['type'] == 1){
                typeOneData.push(data[i]);
            }else if(data[i]['type'] == 2){
                typeTwoData.push(data[i]);
            }else if(data[i]['type'] == 3){
                typeThreeData.push(data[i]);
            }
        }

        for(var i = 0; i < section.length; i++){
            sectionIDs.push(i);
            dataBlob[i] = section[i];
            rowIDs[i] = [];
            if(i == 0){
                for(var j=0; j<typeOneData.length; j++){
                    rowIDs[i].push(j);
                    dataBlob[i+':'+j] = typeOneData[j];
                }
            }else if(i == 1){
                for(var j=0; j<typeTwoData.length; j++){
                    rowIDs[i].push(j);
                    dataBlob[i+':'+j] = typeTwoData[j];
                }
            }else if(i == 2){
                for(var j=0; j<typeThreeData.length; j++){
                    rowIDs[i].push(j);
                    dataBlob[i+':'+j] = typeThreeData[j];
                }
            }

        }


        console.log(typeOneData);
        console.log(typeTwoData);
        console.log(typeThreeData);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
        });

    },


    render(){
        return(
            <View >
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.KDRenderRow}
                    renderSectionHeader={this.KDRenderSectionHeader}
                />
            </View>

        );
    },

    KDRenderRow(rowData){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.pushToxxxx()}}>
                <View style={{backgroundColor:'white',width : 375,height:250}}>
                        <Image style={styles.cellImage} source={{uri : rowData.homepageimg}}></Image>
                        <View style={{justifyContent:'space-between',flexDirection : 'row',}}>
                            <View>
                                <Text style={{fontSize : 18,marginLeft: 8,marginTop: 8}}>{rowData.goods_name}</Text>
                                <Text style={{fontSize : 13,marginTop: 3,marginLeft: 8,color:'gray'}}>{rowData.goods_ad}</Text>
                            </View>
                            <View>
                                <Text style={{marginRight: 8,marginTop: 8,color : 'red'}}>{rowData.price}</Text>
                                <Text style={{marginTop: 3,marginLeft: 15}}>{rowData.si}</Text>
                            </View>
                        </View>
                </View>
            </TouchableOpacity>
        );
    },

    KDRenderSectionHeader(sectionData, sectionID){
        return(
            <View style={styles.sectionHeaderViewStyle}>
                <View style={{width : Win.width,height : 15,backgroundColor:'#e8e8e8'}}></View>
                <Text style={{marginLeft:5,marginTop:10, color:'black'}}>{sectionData}</Text>
            </View>
        );
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
    sectionHeaderViewStyle:{
        backgroundColor:'white',
        height:60,

        justifyContent:'center'
    },
    cellImage : {
        width : Win.width,
        height : 200,
    },
});

module.exports = KDMainPageBottomListView;