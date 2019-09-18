import React from 'react';
import {
  // createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';
import InputPhone from './screens/InputPhone';
import SearchAddress from './screens/SearchAddress';
import SelectGland from './screens/SelectGland';
import UnpaidList from './screens/UnpaidList';
import CustomDrawer from './screens/CustomDrawer';
import NumberReport from './screens/NumberReport';
import TakeReport from './screens/TakeReport';
import Login from './screens/Login';
import CustomerScreen from './screens/CustomerScreen';
import AuthContextProvider from './screens/Context/Auth';

const App = createAppContainer(
  createDrawerNavigator(
    {
      InputPhone: InputPhone,
      Login: Login,
      UnpaidList: UnpaidList,
      SearchAddress: SearchAddress,
      SelectGland: SelectGland,
      CustomerScreen: CustomerScreen,
      NumberReport: NumberReport,
      TakeReport: TakeReport,
    },
    {
      contentComponent: CustomDrawer,
      drawerPosition: 'right',
    },
    {
      headerMode: 'none',
    },
  ),
);

export default class Application extends React.Component {
  render() {
    return (
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    );
  }
}
