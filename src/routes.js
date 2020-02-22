import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Cardapio from './pages/Cardapio';

const Routes = createAppContainer(
  
  createStackNavigator({
    
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Cardápios dos Restaurantes',
        headerTitleAlign: 'center' 
      }

    },
    Cardapio: {
      screen: Cardapio,
      navigationOptions: {
        title: 'Cardápios do dia',
        headerTitleAlign: 'center'
      }
    },
  }, {
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize:20,
        fontFamily: 'Roboto'
      }, 
      
      headerTintColor: '#F80',
      headerStatusBarHeight:20,
       headerBackTitleVisible: null,
       headerStyle: {
        backgroundColor: '#fff',
      },
  
     }
  })

);

export default Routes;