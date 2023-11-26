import React, { Component } from 'react'
import {
    View,
    SafeAreaView,
    StatusBar,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity
} from 'react-native'

const ScanScreen = () => {
    return(
        <View style={{flex: 1}}>
            <StatusBar barStyle={'dark-content'}/>
            <ImageBackground source={require('../images/imgbg2.png')} style={{resizeMode: 'cover', flex: 1, paddingLeft: 20}}>
                <TouchableOpacity style={{width: 45, height: 45, backgroundColor: 'rgba(255, 255, 255, 0.70)', borderRadius: 9, marginTop: 50, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../images/Arrowback.png')}/>
                </TouchableOpacity>
                <View style={{width: 292, height: 82, marginLeft: 20, marginTop: 580, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', borderRadius: 16, backgroundColor: 'white', shadowOpacity:0.8, shadowColor: '#AD6C48', shadowOffset: { width: 4, height: 4 }, shadowRadius: 50}}>
                    <View>
                        <Image source={require('../images/chainuoccam.png')}  style={{width: 53, height: 53, borderRadius: 9}}/>
                    </View>
                    <View>
                        <Text style={{fontSize: 12, color: '#C2C2C2'}}>Lauren’s</Text>
                        <Text style={{fontSize: 16}}>Orange Juice</Text>
                    </View>
                    <TouchableOpacity style={{width: 45, height: 45, backgroundColor: '#5A6CF3', borderRadius: 11, alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../images/plus.png')}/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default ScanScreen;