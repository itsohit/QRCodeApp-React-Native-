import React,{Component} from 'react'
import {View,Button,Text} from 'react-native';

class SelectionOption extends Component {

    constructor(props){
      super(props);
      
    }
  render() {
    return (<View style={{flex: 1,justifyContent: 'center',alignItems : 'center'}}>

        <Text style={{fontSize: 26,fontFamily: 'arial',padding: 10,marginBottom : 30}}>QR Code App</Text>

        <View style={{flexDirection: 'row',marginVertical: 15}}>
                <Button onPress={()=> { this.props.navigation.navigate('QRGenerator'); }} title="QR Generate" />
        </View>
            
        <View style={{flexDirection: 'row',marginVertical: 15}}>
         <Button onPress={()=> { this.props.navigation.navigate('QRScanner'); }} title="QR Scanner" />
         </View>
    </View>)
  }
}

export default SelectionOption;