import React, { Component } from 'react'
import {
    View,
    SafeAreaView,
    Image,
    Text,
    ScrollView,
    StatusBar
} from 'react-native'

const HomeScreen = () => {
    return(
        <SafeAreaView style={{marginLeft: 20}}>
            <StatusBar barStyle={'dark-content'}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 22, fontWeight: 700}}>Hello</Text>
                        <Image source={require('../images/hello.jpg')} style={{width: 20, height: 20}}/>
                    </View>
                    <Text style={{fontSize: 14}}>Christie Doe</Text>
                </View>
                <Image source={require('../images/Face.jpg')} style={{borderRadius: 15, marginRight: 20}}/>
            </View>
            <Text style={{fontSize: 18, marginVertical: 30}}>Your Insights</Text>
            <View>
                <View style={{flexDirection: 'row', marginBottom: 18}}>
                    <View style={{width: 159, height: 177, backgroundColor: '#F8F8FB', borderRadius: 16, marginRight: 18, alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../images/Scan-removebg-preview.png')} style={{marginBottom: 10}}/>
                        <Text style={{fontSize: 16, marginBottom: 10}}>Scan new</Text>
                        <Text style={{fontSize: 10, color: '#B7B7C1', fontWeight: 700}}>Scanned 483</Text>
                    </View>
                    <View style={{width: 159, height: 177, backgroundColor: '#F8F8FB', borderRadius: 16, alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{width: 55, height: 55, marginBottom: 10, backgroundColor: '#F6E3DB', alignItems: 'center', justifyContent: 'center', borderRadius: 16}}>
                            <Image source={require('../images/Counterfeits.png')}/>
                        </View>
                        <Text style={{fontSize: 16, marginBottom: 10}}>Counterfeits</Text>
                        <Text style={{fontSize: 10, color: '#B7B7C1', fontWeight: 700}}>Counterfeited 32</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: 159, height: 177, backgroundColor: '#F8F8FB', borderRadius: 16, marginRight: 18, alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{width: 55, height: 55, marginBottom: 10, backgroundColor: '#D8F3F1', alignItems: 'center', justifyContent: 'center', borderRadius: 16}}>
                            <Image source={require('../images/Success.png')}/>
                        </View>
                        <Text style={{fontSize: 16, marginBottom: 10}}>Success</Text>
                        <Text style={{fontSize: 10, color: '#B7B7C1', fontWeight: 700}}>Checkouts 8</Text>
                    </View>
                    <View style={{width: 159, height: 177, backgroundColor: '#F8F8FB', borderRadius: 16, alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{width: 55, height: 55, marginBottom: 10, backgroundColor: '#D0EDFB', alignItems: 'center', justifyContent: 'center', borderRadius: 16}}>
                            <Image source={require('../images/Directory.png')}/>
                        </View>
                        <Text style={{fontSize: 16, marginBottom: 10}}>Directory</Text>
                        <Text style={{fontSize: 10, color: '#B7B7C1', fontWeight: 700}}>History 26</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 30}}>
                <Text style={{fontSize: 18}}>Explore More</Text>
                <Image source={require('../images/Arrow.png')} style={{marginRight: 20}}/>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../images/Img1.png')} style={{marginRight: 25}}/>
                    <Image source={require('../images/Img2.png')}/>
                    <Image source={require('../images/Img3.png')} style={{marginLeft: 25, width: 127, height: 125, borderRadius: 16}}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;