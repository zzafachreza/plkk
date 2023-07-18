import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native'
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
import { Linking } from 'react-native';
import { MyGap } from '../../components';

export default function Informasi({ navigation, route }) {

    const [data, setData] = useState([]);
    const isFocus = useIsFocused();
    const [user, setUser] = useState({});

    const _getTransaction = () => {

        getData('user').then(u => {
            setUser(u);
            axios.post(apiURL + 'plkk', {
                fid_user: u.id
            }).then(res => {

                console.log(res.data);
                setData(res.data);

            });
        })



    }


    useEffect(() => {
        if (isFocus) {
            _getTransaction();
        }
    }, [isFocus]);

    const __renderItem = ({ item }) => {
        return (

            <View style={{
                marginVertical: 2,
                flex: 1,
                padding: 10,
                borderWidth: 1,
                borderColor: colors.primary,
            }}>

                <View style={{

                }}>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            flex: 1,
                            fontFamily: fonts.secondary[800],
                            fontSize: 15,
                            color: colors.primary,
                        }}>{item.jenis}</Text>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 10,
                            alignSelf: 'center',
                            paddingVertical: 5,
                            borderRadius: 10,
                            backgroundColor: colors.secondary,
                            color: colors.white,
                            paddingHorizontal: 10,
                        }}>{item.kota}</Text>
                    </View>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 15,
                    }}>{item.nama}</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: 12,
                    }}>{item.alamat}</Text>
                </View>

            </View>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <View style={{
                flexDirection: 'row',
                backgroundColor: colors.white,
                padding: 5,
                height: 80,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{
                    padding: 5,
                }}>
                    <Icon type='ionicon' name='arrow-back-outline' size={windowWidth / 13} color={colors.black} />
                </TouchableOpacity>
                <Text style={{
                    flex: 1,
                    textAlign: 'center',
                    fontFamily: fonts.secondary[600],
                    fontSize: 20,
                    color: colors.black
                }}>Informasi PLKK</Text>


            </View>

            <ScrollView style={{
                flex: 1,
                padding: 10,
            }}>
                <View style={{
                    marginBottom: 10,
                    padding: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: colors.primary
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[800],
                        fontSize: 20,
                        color: colors.primary
                    }}>KANTOR CABANG INDUK</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 18,
                        color: colors.black
                    }}>BPJS Ketenagakerjaan Cabang Palangkaraya</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: 15,
                        color: colors.black
                    }}>Jl. RTA Milono No.92, Langkai, Kec. Pahandut, Kota Palangka Raya, Kalimantan Tengah 74874</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: 15,
                        color: colors.black
                    }}>Tlp 0536-3235849</Text>
                    <TouchableNativeFeedback onPress={() => {
                        Linking.openURL('https://maps.app.goo.gl/pydd6XtkPARzA4GB8')
                    }}>
                        <View style={{
                            marginVertical: 5,
                            width: 100,
                            textAlign: 'center',
                            padding: 5,
                            flexDirection: 'row',
                            backgroundColor: colors.primary,
                            alignItems: 'center',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                        }}>
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: 12,
                                flex: 1,
                                color: colors.white
                            }}>Lihat Peta</Text>
                            <Icon type='ionicon' name='chevron-forward-circle-outline' size={14} color={colors.white} />
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{
                    marginBottom: 10,
                    padding: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: colors.primary
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[800],
                        fontSize: 20,
                        color: colors.primary
                    }}>KANTOR CABANG PRATAMA</Text>
                    <View style={{
                        padding: 10,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 18,
                            color: colors.black
                        }}>1. </Text>
                        <View>
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: 18,
                                color: colors.black
                            }}>BPJS Ketenagakerjaan Cabang Kuala Kapuas</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: 15,
                                color: colors.black
                            }}>Jl. Tambun Bungai, Selat Tengah, Kec. Selat, Kabupaten Kapuas, Kalimantan Tengah 73516</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: 15,
                                color: colors.black
                            }}>Tlp  (0513) 2021061</Text>
                            <TouchableNativeFeedback onPress={() => {
                                Linking.openURL('https://maps.app.goo.gl/J7JxWNvW3HwuevoL8')
                            }}>
                                <View style={{
                                    marginVertical: 5,
                                    width: 100,
                                    textAlign: 'center',
                                    padding: 5,
                                    flexDirection: 'row',
                                    backgroundColor: colors.primary,
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    paddingHorizontal: 10,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: 12,
                                        flex: 1,
                                        color: colors.white
                                    }}>Lihat Peta</Text>
                                    <Icon type='ionicon' name='chevron-forward-circle-outline' size={14} color={colors.white} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    <View style={{
                        padding: 10,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 18,
                            color: colors.black
                        }}>2. </Text>
                        <View>
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: 18,
                                color: colors.black
                            }}>BPJS Ketenagakerjaan Cabang Barito Utara Muara Teweh</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: 15,
                                color: colors.black
                            }}>Jl. Tumenggung Surapati No.RT. 12, Melayu, Kec. Teweh Tengah, Kabupaten Barito Utara, Kalimantan Tengah 73814</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: 15,
                                color: colors.black
                            }}>Tlp (0519) 2022038</Text>
                            <TouchableNativeFeedback onPress={() => {
                                Linking.openURL('https://maps.app.goo.gl/6YpnVuYR35q1baAK6')
                            }}>
                                <View style={{
                                    marginVertical: 5,
                                    width: 100,
                                    textAlign: 'center',
                                    padding: 5,
                                    flexDirection: 'row',
                                    backgroundColor: colors.primary,
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    paddingHorizontal: 10,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: 12,
                                        flex: 1,
                                        color: colors.white
                                    }}>Lihat Peta</Text>
                                    <Icon type='ionicon' name='chevron-forward-circle-outline' size={14} color={colors.white} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
                <Text style={{
                    marginBottom: 10,
                    textAlign: 'center',
                    fontFamily: fonts.secondary[800],
                    fontSize: 20,
                    color: colors.black
                }}>DAFTAR PLKK</Text>
                <FlatList data={data} renderItem={__renderItem} />
                <MyGap jarak={20} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})