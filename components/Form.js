import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View} from 'react-native';

export default function Form({addHandler}) {
    const [text, setVelue] = useState('');
    const onChange = (text) => {
        setVelue(text);
    };
    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Enter the task...'/>
            <Button onPress={() => addHandler(text)} title='Add a task' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    }
});


