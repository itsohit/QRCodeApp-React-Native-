import React, {Fragment} from 'react';
import {View,Image, Button,Text,ScrollView} from 'react-native';
import randomize from 'randomatic';
import QRCode from 'react-native-qrcode-svg';
import {setArrayStore} from '../redux/action/actions'
import {connect} from 'react-redux';



class QRGenerator extends React.Component {

      constructor(props){
        super(props);
        this.state = {
          Randomvalue: randomize('A0', 16)
        }
        this.callback = this.callback.bind(this);
      }

      static navigationOptions = {
        title: 'QR Generate',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

        getDataURL = () => {
                this.svg.toDataURL(this.callback);
        }

        callback = (data) => {
            this.props.setArrayItem({ name: this.state.Randomvalue,image : data })
            this.setState({Randomvalue: randomize('A0', 16)})
        }


render() {
    console.log('this props',this.props);
  return (
      <View style={{flex: 1}}>
          <ScrollView>
    <View>
        <View style={{alignItems: 'center',padding: 10}}>
            <QRCode
            size={150}
            value={this.state.Randomvalue}
            getRef={(c) => (this.svg = c)} />
             <Text style={{marginTop: 5}}>{this.state.Randomvalue}</Text>
      </View>
     <Button title="Generate QR" onPress={()=> this.getDataURL()} />
     
     {this.props.qrArr.map((item)=> {
           return  <View key={item.name} style={{marginVertical: 5, alignItems: 'center',borderBottomColor: 'rgba(0,0,0,0.5)',borderBottomWidth: 0.4}}>
                     <Image  source={{ uri: `data:image/svg;base64,${item.image}` }} style={{width: 200,height: 200}} />
                    <Text>{item.name}</Text>
               </View>
     })}
    
    </View>
    </ScrollView>
    </View>
    );
}
};

const mapStateToProps = (state)=> {
    return state;
};
const mapDispatchToProps = (dispatch)=> {
    return { setArrayItem : qrStoreItem => dispatch(setArrayStore(qrStoreItem)) }
}

export default connect(mapStateToProps,mapDispatchToProps)(QRGenerator);