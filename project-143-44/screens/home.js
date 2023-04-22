import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Header, AirbnbRating, Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import axios from 'axios';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      articleDetails: {},
    };
  }
  componentDidMount() {
    this.getArticle();
  }
  getArticle = () => {
    const url = 'http://localhost:5000/get-article';
    axios
      .get(url)
      .then((response) => {
        let details = response.data.data;
        this.setState({ articleDetails: details });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  likedArticle = () => {
    const url = 'http://localhost:5000/liked-article';
    axios
      .post(url)
      .then((response) => {
        this.getArticle();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  unlikedArticle = () => {
    const url = 'http://localhost:5000/unliked-article';
    axios
      .post(url)
      .then((response) => {
        this.getArticle();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  notWatched = () => {
    const url = 'http://localhost:5000/unviewed-article';
    axios
      .post(url)
      .then((response) => {
        this.getArticle();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  render() {
    const { articleDetails } = this.state;
    if (articleDetails) {
      return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Header
              centerComponent={{
                text: 'Articles',
                style: styles.headerTitle,
              }}
              rightComponent={{
                icon: 'book',
                color: '#fff',
                type: 'material-community',
                onPress: () =>
                  this.props.navigation.navigate('RecommendedArticles'),
              }}
              backgroundColor={'#d500f9'}
              containerStyle={{ flex: 1 }}
            />
          </View>
          <View style={styles.subContainer}>
            <View style={styles.subBottomContainer}>
              <View style={styles.upperBottomContainer}>
                <Text style={styles.title}>{articleDetails[16]}</Text>
                <Text style={styles.subtitle}>{articleDetails[11]}</Text>
              </View>
              <View style={styles.lowerBottomContainer}>
                <View style={styles.iconButtonContainer}>
                  <TouchableOpacity onPress={this.likedArticle}>
                    <Icon
                      reverse
                      name={'check'}
                      type={'entypo'}
                      size={RFValue(30)}
                      color={'#76ff03'}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.unlikedArticle}>
                    <Icon
                      reverse
                      name={'cross'}
                      type={'entypo'}
                      size={RFValue(30)}
                      color={'#ff1744'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonCotainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={this.notWatched}>
                    <Text style={styles.buttonText}>Did not watch</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flex: 0.1,
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: RFValue(18),
  },
  subContainer: {
    flex: 0.9,
  },
  subTopContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  posterImage: {
    width: '60%',
    height: '90%',
    resizeMode: 'stretch',
    borderRadius: RFValue(30),
    marginHorizontal: RFValue(10),
  },
  subBottomContainer: {
    flex: 0.6,
  },
  upperBottomContainer: {
    flex: 0.2,
    alignItems: 'center',
    margin: 15,
  },
  title: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: RFValue(12),
    fontWeight: '300',
    margin: 15,
    width: 300,
  },
  middleBottomContainer: {
    flex: 0.35,
  },
  text: {
    fontSize: RFValue(13),
    textAlign: 'center',
    fontWeight: '300',
    color: 'gray',
  },
  lowerBottomContainer: {
    flex: 0.45,
    marginTop: 200,
  },
  iconButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonCotainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: RFValue(160),
    height: RFValue(50),
    borderRadius: RFValue(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: RFValue(15),
  },
  buttonText: {
    fontSize: RFValue(15),
    fontWeight: 'bold',
  },
});
