import React,{Component} from 'react'
import {View} from 'react-native';
import { RNCamera } from 'react-native-camera'

class QRScanner extends Component {

    constructor(props){
      super(props);
    }

  render() {
        return (
              <View style={{flex: 1}}>
                <RNCamera
                  ref={ref => {
                    this.camera = ref;
                  }}
                  style={{
                    flex: 1,
                  }}
                  onBarCodeRead={(data)=> alert(data.data)} >
                </RNCamera>
              </View> );
  }
}

export default QRScanner;