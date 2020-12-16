import React from 'react';
import { View } from 'react-native';
import Header from '../../Components/Header';
import Menu from '../../Components/Menu'
import './index.css'

const Home = () => {

    return(
        <View>
            <header>
                <Header/>
            </header>

            <footer>
                <Menu/>
            </footer>
        </View>
    )

}

export default Home;