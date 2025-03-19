import React from 'react';
import FlatCards from "./components/FlatCards"
import ElevatedCards from "./components/ElevatedCards"
import FancyCard from "./components/FancyCard"
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';


function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: "#363636",
        paddingVertical: StatusBar.currentHeight,
      }}>
        <ScrollView>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ContactList />
          <ActionCard />
        </ScrollView>
      </SafeAreaView >
    </>
  );
}


export default App;
