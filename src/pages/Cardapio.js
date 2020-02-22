import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Cardapio({ navigation }) {

  const [itens, setItens] = useState([]);

  useEffect(() => {
    console.log("\n \n Open TelaCardapio\n");

    setItens(navigation.getParam('paramNav'));
  }, []);

  return (
    <>
      <View>
        {itens.map(item => (
          <>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={{ textAlign: 'center', }}>{item.date}</Text>
            <Text style={styles.textDescription}>{item.description}</Text>
          </>
        ))
        }
      </View>
    </>
  )


}
const styles = StyleSheet.create({

  front: {
    justifyContent: 'center',
    marginTop: 100,
    left: 180,
  },
  text: {
    marginTop: 12,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#220b07',
    fontWeight: 'bold',
    fontSize: 15.5,
  },
  textDescription: {
    marginTop: 12,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 9,
  }
});

export default Cardapio;