import React, { Component, useState } from 'react'
import {
    View,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    Image,
    Text
} from 'react-native'


    

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
  
    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };
    return(
        <SafeAreaView style={{marginLeft: 15}}>
            <StatusBar barStyle={'dark-content'}/>
            <TouchableOpacity style={{width: 45, height: 45, backgroundColor: '#F8F8FB', borderRadius: 9, marginTop: 50, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../images/Arrowback.png')} style={{tintColor: '#F08F5F'}}/>
            </TouchableOpacity>
            <Text style={{fontSize: 22, fontWeight: 700}}>Your Cart 👍🏻</Text>
            <View>
                <View style={{ width: 335, height: 85, borderRadius: 16, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center', margin: 10, backgroundColor: '#F8F8FB' }}>
                    <Image source={require('../images/chainuoccam.png')} style={{marginLeft: -20, width: 53, height: 53, borderRadius: 9 }} />
                    <View style={{marginLeft: -50}}>
                        <Text style={{ fontSize: 10, color: '#B1B1B1'}}>Lauren’s</Text>
                        <Text style={{ fontSize: 12,}}>Orange Juice</Text>
                        <Text style={{ fontSize: 16, color: '#F08F5F', fontWeight: 700 }}>₹ 149</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderRadius: 5 }}>
                        <TouchableOpacity onPress={decreaseQuantity} style={{ padding: 5 }}>
                        <Text style={{ fontSize: 20, color: '#F08F5F' }}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, marginHorizontal: 10 }}>{quantity}</Text>
                        <TouchableOpacity onPress={increaseQuantity} style={{ padding: 5 }}>
                        <Text style={{ fontSize: 20, color: '#F08F5F' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: 335, height: 85, borderRadius: 16, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center', margin: 10, backgroundColor: '#F8F8FB' }}>
                    <Image source={require('../images/chainuoctrang.png')} style={{marginLeft: -20, width: 53, height: 53, borderRadius: 9 }} />
                    <View style={{marginLeft: -50}}>
                        <Text style={{ fontSize: 10, color: '#B1B1B1'}}>Baskin’s</Text>
                        <Text style={{ fontSize: 12,}}>Skimmed Milk</Text>
                        <Text style={{ fontSize: 16, color: '#F08F5F', fontWeight: 700 }}>₹ 129</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderRadius: 5 }}>
                        <TouchableOpacity onPress={decreaseQuantity} style={{ padding: 5 }}>
                        <Text style={{ fontSize: 20, color: '#F08F5F' }}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, marginHorizontal: 10 }}>{quantity}</Text>
                        <TouchableOpacity onPress={increaseQuantity} style={{ padding: 5 }}>
                        <Text style={{ fontSize: 20, color: '#F08F5F' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: 335, height: 85, borderRadius: 16, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center', margin: 10, backgroundColor: '#F8F8FB' }}>
                    <Image source={require('../images/chainuocnau.png')} style={{marginLeft: -20, width: 53, height: 53, borderRadius: 9 }} />
                    <View style={{marginLeft: -50}}>
                        <Text style={{ fontSize: 10, color: '#B1B1B1'}}>Marley’s</Text>
                        <Text style={{ fontSize: 12,}}>Aloe Vera Lotion</Text>
                        <Text style={{ fontSize: 16, color: '#F08F5F', fontWeight: 700 }}>₹ 1249</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderRadius: 5 }}>
                        <TouchableOpacity onPress={decreaseQuantity} style={{ padding: 5 }}>
                        <Text style={{ fontSize: 20, color: '#F08F5F' }}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, marginHorizontal: 10 }}>{quantity}</Text>
                        <TouchableOpacity onPress={increaseQuantity} style={{ padding: 5 }}>
                        <Text style={{ fontSize: 20, color: '#F08F5F' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View>
                <Text>Total</Text>
                <Text style={{ fontSize: 18, color: '#F08F5F', fontWeight: 700 }}>₹ 1,527</Text>
            </View>
        </SafeAreaView>
    )
}

export default Cart;