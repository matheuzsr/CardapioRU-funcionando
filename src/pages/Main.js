import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import api from '../services/api'
import convert from 'xml-js';

function Main({ navigation }) {

  function dataAtualFormatada() {
    var data = new Date(),
      dia = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0' + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      mesF = (mes.length == 1) ? '0' + mes : mes,
      anoF = data.getFullYear();
    return anoF + "-" + mesF + "-" + diaF;
  }

  
  const dia = '2020-02-04'
  //const dia = dataAtualFormatada();

  //Pegar cardapio Alegre
  async function getCardapioAlegre() {

    //Caso só contenha um item(ex: almoço)
    try {
      const xml = await api.get(`http://www.ru.alegre.ufes.br/cardapio/rss/${dia}`)
      const json = JSON.parse(convert.xml2json(xml.data, { compact: true, spaces: 4 }));

      const item = {
        date: json.rss.channel.item.pubDate._text,
        title: json.rss.channel.item.title._text,
        description: json.rss.channel.item.description._text
      }
      const itens = [item];
      navigation.navigate('Cardapio', { paramNav: itens });


    } catch (e) {
      //Caso contenha mais de um item(ex: almoço e jantar)
      try {
        const xml = await api.get(`http://www.ru.alegre.ufes.br/cardapio/rss/${dia}`)
        const json = JSON.parse(convert.xml2json(xml.data, { compact: true, spaces: 4 }));
        console.log(json)
        const itens = json.rss.channel.item.map(({ description, pubDate, title }) => {
          return {
            description: description._text,
            date: pubDate._text,
            title: title._text
          }
        });
        navigation.navigate('Cardapio', { paramNav: itens });
      }
      catch (e) {
        alert('Cardápio indisponível! :(');

      }
    };
  }

  //Pegar cardapio São Mateus
  async function getCardapioSM() {

    //Caso só contenha um item(ex: almoço)
    try {
      const xml = await api.get(`http://www.ru.saomateus.ufes.br/cardapio/rss/${dia}`)
      const json = JSON.parse(convert.xml2json(xml.data, { compact: true, spaces: 4 }));

      const item = {
        date: json.rss.channel.item.pubDate._text,
        title: json.rss.channel.item.title._text,
        description: (json.rss.channel.item.description._text
          .split('\n').join(', '))
          .split(', , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ').join(''),
      }
      const itens = [item];
      navigation.navigate('Cardapio', { paramNav: itens });

    } catch (e) {
      //Caso contenha mais de um item(ex: almoço e jantar)
      try {
        const xml = await api.get(`http://www.ru.saomateus.ufes.br/cardapio/rss/${dia}`)
        const json = JSON.parse(convert.xml2json(xml.data, { compact: true, spaces: 4 }));
        console.log(json)
        const itens = json.rss.channel.item.map(({ description, pubDate, title }) => {
          return {
            date: pubDate._text,
            title: title._text,
            description: (description._text
              .split('\n').join(', '))
              .split(', , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ').join(''),
          }
        });
        navigation.navigate('Cardapio', { paramNav: itens });
      }
      catch (e) {
        alert('Cardápio indisponível! :(');

      }
    };
  }

  //Pegar cardapio Vitoria
  async function getCardapioVix() {

    //Caso só contenha um item(ex: almoço)
    try {
      const xml = await api.get(`http://www.ru.ufes.br/cardapio/rss/${dia}`)
      const json = JSON.parse(convert.xml2json(xml.data, { compact: true, spaces: 4 }));

      const item = {
        date: json.rss.channel.item.pubDate._text,
        title: json.rss.channel.item.title._text,
        description: json.rss.channel.item.description._text
      }
      const itens = [item];
      navigation.navigate('Cardapio', { paramNav: itens });

    } catch (e) {
      //Caso contenha mais de um item(ex: almoço e jantar)
      try {
        const xml = await api.get(`http://www.ru.ufes.br/cardapio/rss/${dia}`)
        const json = JSON.parse(convert.xml2json(xml.data, { compact: true, spaces: 4 }));
        console.log(json)
        const itens = json.rss.channel.item.map(({ description, pubDate, title }) => {
          return {
            description: description._text,
            date: pubDate._text,
            title: title._text
          }
        });
        navigation.navigate('Cardapio', { paramNav: itens });
      }
      catch (e) {
        alert('Cardápio indisponível! :(');

      }
    };
  }

  return (
    <>
      <TouchableOpacity onPress={getCardapioAlegre}>
        <Text>Restaurante de Alegre</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getCardapioSM}>
        <Text>Restaurante São Mateus</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getCardapioVix}>
        <Text>Restaurante Vitoria</Text>
      </TouchableOpacity>
    </>
  );
}

export default Main;