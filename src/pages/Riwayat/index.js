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

export default function Riwayat({ navigation, route }) {

    const [data, setData] = useState([]);
    const isFocus = useIsFocused();
    const [user, setUser] = useState({});

    const _getTransaction = () => {

        getData('user').then(u => {
            setUser(u);
            axios.post(apiURL + 'janji', {
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
                marginVertical: 7,
                marginHorizontal: 20,
                flex: 1,
                padding: 10,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: colors.primary,
            }}>

                <View style={{

                }}>
                    <Image source={{
                        uri: item.image
                    }} style={{
                        width: 100,
                        height: 40,
                        resizeMode: 'contain',

                    }} />
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 15,
                    }}>{item.nama_rs}</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: 12,
                    }}>{item.alamat_rs}</Text>
                </View>
                <View style={{
                    padding: 5,
                    marginTop: 10,
                    borderWidth: 1,
                    borderColor: colors.border,
                    borderRadius: 5,
                }}>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            flex: 0.4,
                            fontFamily: fonts.secondary[600],
                            fontSize: 14,
                        }}>Nama</Text>
                        <Text style={{
                            flex: 0.1,
                            fontFamily: fonts.secondary[600],
                            fontSize: 14,
                        }}>:</Text>
                        <Text style={{
                            flex: 1,
                            fontFamily: fonts.secondary[400],
                            fontSize: 14,
                        }}>{item.nama}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            flex: 0.4,
                            fontFamily: fonts.secondary[600],
                            fontSize: 14,
                        }}>No. KPJ</Text>
                        <Text style={{
                            flex: 0.1,
                            fontFamily: fonts.secondary[600],
                            fontSize: 14,
                        }}>:</Text>
                        <Text style={{
                            flex: 1,
                            fontFamily: fonts.secondary[400],
                            fontSize: 14,
                        }}>{item.kpj}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            flex: 0.4,
                            fontFamily: fonts.secondary[600],
                            fontSize: 14,
                        }}>No. Tlp</Text>
                        <Text style={{
                            flex: 0.1,
                            fontFamily: fonts.secondary[600],
                            fontSize: 14,
                        }}>:</Text>
                        <Text style={{
                            flex: 1,
                            fontFamily: fonts.secondary[400],
                            fontSize: 14,
                        }}>{item.telepon}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            flex: 0.4,
                            fontFamily: fonts.secondary[600],
                            fontSize: 14,
                        }}>Tgl Kunjungan</Text>
                        <Text style={{
                            flex: 0.1,
                            fontFamily: fonts.secondary[600],
                            fontSize: 14,
                        }}>:</Text>
                        <Text style={{
                            flex: 1,
                            fontFamily: fonts.secondary[400],
                            fontSize: 14,
                        }}>{moment(item.tanggal).format('dddd, DD MMMM YYYY')}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            flex: 0.4,
                            fontFamily: fonts.secondary[600],
                            fontSize: 14,
                        }}>Poli</Text>
                        <Text style={{
                            flex: 0.1,
                            fontFamily: fonts.secondary[600],
                            fontSize: 14,
                        }}>:</Text>
                        <Text style={{
                            flex: 1,
                            fontFamily: fonts.secondary[400],
                            fontSize: 14,
                        }}>{item.poli}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            flex: 0.4,
                            fontFamily: fonts.secondary[600],
                            fontSize: 14,
                        }}>Dokter</Text>
                        <Text style={{
                            flex: 0.1,
                            fontFamily: fonts.secondary[600],
                            fontSize: 14,
                        }}>:</Text>
                        <Text style={{
                            flex: 1,
                            fontFamily: fonts.secondary[400],
                            fontSize: 14,
                        }}>{item.dokter}</Text>
                    </View>
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
                }}>History Janji Temu</Text>


            </View>

            <View style={{
                flex: 1,
            }}>
                <FlatList data={data} showsVerticalScrollIndicator={false} renderItem={__renderItem} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})