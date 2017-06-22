/* eslint-disable no-unused-vars,global-require */
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableHighlight, ActivityIndicator, Dimensions } from 'react-native';
import Search from 'react-native-search-box';
import { Button, Card } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Carousel from 'react-native-snap-carousel';
import GrowthImageCard from '../../components/home/GrowthCard';
import GridItem from "../../components/discover/view/DiscoverGridItem";
import Launch from "../../components/discover/Launch";

const sliderWidth = Dimensions.get('window').width;

class Home extends Component {
  static componentName = 'Home';
  static searchBox = null;

  constructor(props) {
    super(props);

    this.state = {
      inSearch: false,
      data: {},
    };
  }

  // Important: You must return a Promise
  onFocus = text => new Promise((resolve, reject) => {
    this.setState({
      inSearch: true,
    });
    resolve();
  });

  onCancel = text => new Promise((resolve, reject) => {
    this.setState({
      inSearch: false,
    });
    resolve();
  });

  onChangeText = text => new Promise((resolve, reject) => {
    this.setState({
      inSearch: true,
    });
    resolve();
  });

  afterFocus = text => new Promise((resolve, reject) => {
    this.setState({
      inSearch: false,
    });
    resolve();
  });

  render() {
    const homeView = (
      <View style={{ paddingBottom: 20 }}>
        <GrowthImageCard
          imageUrl={require('../../../assets/growth-ui/img/home-5.jpg')}
          actions={Actions.growthView}
          text={'Growth 指南'}
        />
        <GrowthImageCard
          imageUrl={require('../../../assets/growth-ui/img/home-6.jpg')}
          actions={Actions.skillTree}
          text={'Growth 技能树'}
        />

        <View style={{ paddingTop: 20 }}>
          <Text style={{ paddingLeft: 20, paddingBottom: 10 }}>探索</Text>
          <Carousel
          // ref={(carousel) => { this._carousel = carousel; }}
            sliderWidth={sliderWidth}
            itemWidth={120}
            itemHeight={80}
            firstItem={2}
            sliderHeight={80}
          >
            <View style={{ height: 80, backgroundColor: '#fff', width: 120, borderRadius: 6 }}>
              <GridItem title="在线电子书" iconName="icon-social" position={'left'} onclick={() => { Launch.freeBookList(); }} />
            </View>
            <View style={{ height: 80, backgroundColor: '#fff', width: 120, borderRadius: 6 }}>
              <GridItem title="学习路线" iconName="icon-social" position={'left'} onclick={() => { Launch.roadmapList(); }} />
            </View>
            <View style={{ height: 80, backgroundColor: '#fff', width: 120, borderRadius: 6 }}>
              <GridItem title="工具箱" iconName="explore-1-3" position={'left'} onclick={() => { Launch.toolBox(); }} />
            </View>
            <View style={{ height: 80, backgroundColor: '#fff', width: 120, borderRadius: 6 }}>
              <GridItem title="技能测验" iconName="icon-graowth" position={'left'} onclick={() => { Launch.examList(); }} />
            </View>
            <View style={{ height: 80, backgroundColor: '#fff', width: 120, borderRadius: 6 }}>
              <GridItem title="读书路线" iconName="explore-2-3" position={'left'} onclick={() => { Launch.thoughtworksBooks(); }} />
            </View>
          </Carousel>
        </View>

        <View style={{ paddingTop: 20 }}>
          <Text style={{ paddingLeft: 20 }}>今日精选</Text>
          <Card
            title="LeetCode"
            image={require('../../../assets/growth-ui/img/home-4.jpg')}
          >
            <Text style={{ marginBottom: 10 }}>
              LeetCode 是一些经典的公司用来面试应聘者的面试题。在 Growth 3.0 中，您可以下载 LeetCode 的题目在本地练习。
            </Text>
            <Button
              icon={{ name: 'code' }}
              backgroundColor="#03A9F4"
              onPress={() => Actions.leetCodeView()}
              buttonStyle={{ borderRadius: 2, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title="查看"
            />
          </Card>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text style={{ paddingLeft: 20 }}>为您推荐</Text>
          <Card
            title="Awesome"
            image={require('../../../assets/growth-ui/img/home-5.jpg')}
          >
            <Text style={{ marginBottom: 10 }}>
              Awesome Awesome 项目集合了不同语言、工具的列表。在 Growth 3.0 中，可以查看所有的项目。
            </Text>
            <Button
              icon={{ name: 'code' }}
              backgroundColor="#03A9F4"
              onPress={() => Actions.awesomeLists()}
              buttonStyle={{ borderRadius: 2, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title="查看"
            />
          </Card>
        </View>
      </View>
      );

    return (
      <ScrollView style={{ paddingBottom: 20 }}>
        <View style={{ paddingTop: 5, paddingBottom: 5 }}>
          <Search
            ref={searchBox => (this.searchBox = searchBox)}
            cancelTitle={'取消'}
            titleCancelColor={'#444'}
            backgroundColor={'#fff'}
            onFocus={this.onFocus}
            afterFocus={this.afterFocus}
            onCancel={this.onCancel}
            onDelete={this.onCancel}
            onChangeText={this.onChangeText}
          />
        </View>

        {
          this.state.inSearch ?
            <View>
              <Text style={{ backgroundColor: '#fff', textAlign: 'center', paddingTop: 20 }}>功能实现中。。。</Text>
              <ActivityIndicator
                animating
                size={'large'}
                color={'#000'}
                style={{ paddingTop: 20, backgroundColor: '#fff', height: 200 }}
              />
            </View> : homeView
        }
      </ScrollView>
    );
  }
}

export default Home;
