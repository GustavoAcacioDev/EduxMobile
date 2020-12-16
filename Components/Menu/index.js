import React from 'react';
import { View } from 'react-native';
import './index.css'

const Menu = () => {
    return(
        <View>
            <footer className="MenuInferior">
                <div className="Container">
                    <div className="Selected">
                        
                        <a><t>Inicio</t></a>
                    </div>
                    <div className="Selected">
                        
                        <a><t>Turmas</t></a>
                    </div>
                    <div className="Selected">
                        
                        <a><t>Objetivos</t></a>
                    </div>
                </div>
                
            </footer>
        </View>
    )
}

export default Menu;