import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) =>{
    return (
    <View style ={styles.backgroundStyle}>
        <Feather style={styles.iconStyle} name="search" size={30}/>
        <TextInput
            keyboardType="visible-password"
            autoCapitalize="none"
            style={styles.inputStyle} placeholder="Search"
            value={term}
            onChangeText={newTerm=>onTermChange(newTerm)}
            onEndEditing={()=>onTermSubmit()}>
        </TextInput>
    </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle:{
        flex: 1
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;