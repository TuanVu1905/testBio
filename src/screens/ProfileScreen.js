import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { data } from '../data/profile';

import CardInfo from '../components/CardInfo';

export default class ProfileScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataUser: 1
    }
  }

  componentDidMount() {
  }

  logConsole = () => {
    
  }

  render() {
    //const username = this.state.dataUserprops.navigation.getParams('username')
    return (
      <View style={styles.container}>
        {/* <Button title="log" onPress={this.logConsole} /> */}
        <View style={styles.navigation}>
          <Icon onPress={() => this.props.navigation.navigate("Home")} style={{}} name="home" color="black" size={20} />
          <Text style={{ fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase' }} textBreakStrategy='highQuality' numberOfLines={1} ellipsizeMode='tail' >Thông tin cá nhân</Text>
          <Icon style={{}} name="create" color="black" size={20} />
        </View>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>aaaaaaa</Text>
            <Text style={styles.info}>Thực tập sinh lập trình</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>

            <View style={styles.infoUser}>
              <FlatList
                style={{ backgroundColor: '#f4f4f4', marginTop: 20 }}
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <CardInfo title={item.title} description={item.description} urlImage={item.urlImage} job={item.job} />}
                keyExtractor={item => `${item.id}`}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 170
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  navigation: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 40
  },
});