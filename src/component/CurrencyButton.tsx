import React from 'react'
import type { PropsWithChildren } from 'react'

import { View,Text,StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

type CurrencyProps = PropsWithChildren<{
    name:string;
    flag:string;
}>

const CurrencyButton = (props:CurrencyProps) : JSX.Element =>{
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        alignItems : 'center'
    },
    flag:{
        fontSize : 28,
        color :  '#FFFFFF',
        marginBottom : 4
    },
    country:{
        fontSize : 11,
        color :  '#16537e',
        paddingBottom : 4
    }
    
})

export default CurrencyButton