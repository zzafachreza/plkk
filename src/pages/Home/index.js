import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import 'moment/locale/id';
import MyCarouser from '../../components/MyCarouser';

export default function Home({ navigation, route }) {

  const [user, setUser] = useState({});
  const isFocus = useIsFocused();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState({});

  const _getTransaction = async () => {

    await getData('user').then(u => {
      setUser(u);
    })

    await axios.post(apiURL + 'company').then(res => {

      setComp(res.data.data);

    });

    await axios.post(apiURL + 'rumah_sakit').then(res => {

      console.log(res.data);
      setData(res.data);

    });
  }


  useEffect(() => {
    if (isFocus) {
      _getTransaction();
    }
  }, [isFocus]);

  const __renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('InfoPdf', item)}>
        <View style={{
          flex: 1,
          width: 170,
          height: 120,
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: colors.primary,
          margin: 5,
        }}>
          <Image source={{
            uri: item.image
          }} style={{
            width: '100%',
            height: 60,
            resizeMode: 'contain',
            marginBottom: 10,
          }} />
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: 12,
            textAlign: 'center'
          }}>{item.nama_rs}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }


  return (

    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <View style={{
        padding: 20,
        backgroundColor: colors.white,
        flexDirection: 'row'
      }}>
        <View style={{
          flex: 1,
        }}>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: 16,
            color: colors.black
          }}>Hi, {user.nama_lengkap}</Text>
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: 16,
            color: colors.black
          }}>Selamat datang di MY PLKK</Text>
        </View>
        <View>
          <Image source={require('../../assets/logo.png')} style={{
            width: 50,
            height: 50
          }} />
        </View>
      </View>
      <MyCarouser />
      <View style={{
        flex: 1,
        backgroundColor: 'white'
      }}>

        <View style={{
          flexDirection: 'row',
          padding: 5,
        }}>

          <TouchableNativeFeedback onPress={() => navigation.navigate('Informasi', {
            web: comp.website
          })}>
            <View style={{
              margin: 5,
              padding: 10,
              borderWidth: 2,
              borderRadius: 10,
              borderColor: colors.primary,
              flex: 1,
              backgroundColor: colors.white
            }}>
              <Image source={require('../../assets/plkk.png')} style={{
                width: '100%',
                height: 80,
                resizeMode: 'contain'
              }} />
              <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: 15,
                color: colors.black,
                textAlign: 'center'
              }}>Informasi PLKK</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => navigation.navigate('RumahSakit')}>
            <View style={{
              margin: 5,
              padding: 10,
              flex: 0.5,
              borderWidth: 2,
              borderRadius: 10,
              borderColor: colors.secondary,
              backgroundColor: colors.white
            }}>
              <Image source={require('../../assets/janji.png')} style={{
                width: '100%',
                height: 80,
                resizeMode: 'contain'
              }} />
              <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: 15,
                color: colors.black,
                textAlign: 'center'
              }}>Buat Janji</Text>
            </View>
          </TouchableNativeFeedback>

        </View>

        <TouchableNativeFeedback onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.myplkk')}>
          <View style={{
            marginHorizontal: 5,
            borderRadius: 10,
            padding: 10,
            flexDirection: 'row',
            backgroundColor: colors.primary,
            alignItems: 'center'
          }}>
            <Icon type='ionicon' name='logo-android' color={colors.white} />
            <Text style={{
              left: 10,
              fontFamily: fonts.secondary[600],
              color: colors.white,
              flex: 1,
              fontSize: 15
            }}>Berikan kami ulasan di Playstore</Text>
            <Icon type='ionicon' name='chevron-forward' color={colors.white} />
          </View>
        </TouchableNativeFeedback>

        {/* data RS */}
        <View style={{
          padding: 10,
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5,
          }}>
            <Image source={require('../../assets/logo.png')} style={{
              width: 25,
              height: 25
            }} />
            <Text style={{
              left: 10,
              fontFamily: fonts.secondary[600],
              fontSize: 15,
              color: colors.black,
            }}>Profile PLKK</Text>
          </View>
          <FlatList showsHorizontalScrollIndicator={false} renderItem={__renderItem} data={data} horizontal />

        </View>


      </View>








      <View style={{
        flexDirection: 'row',
        backgroundColor: colors.secondary,
        justifyContent: 'space-around'
      }}>
        <TouchableOpacity style={{
          padding: 10,
        }}>
          <Icon type='ionicon' name='home-outline' color={colors.white} size={20} />
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: 12,
            color: colors.white
          }}>Beranda</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Riwayat')} style={{
          padding: 10,
        }}>
          <Icon type='ionicon' name='calendar-outline' color={colors.white} size={20} />
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: 12,
            color: colors.white
          }}>History Janji Temu</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Account')} style={{
          padding: 10,
        }}>
          <Icon type='ionicon' name='person-outline' color={colors.white} size={20} />
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: 12,
            color: colors.white
          }}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({})