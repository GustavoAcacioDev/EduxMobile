import React from 'react';
import { View, Image } from 'react-native';
import './index.css'
import logout from '../../assets/logout.svg'

const Header = () => {
    return(
        <View>
            <header className="MenuSuperior">
                <h1>Edux</h1>
                <a><Image source={{logout}}/></a>
            </header>
        </View>
    )
}

export default Header;