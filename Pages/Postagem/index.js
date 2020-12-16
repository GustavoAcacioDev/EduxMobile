import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../Components/Header';
import Menu from '../../Components/Menu';
import './index.css';
import Imagem from '../../assets/react.jpg'


const Postagem = () => {


    return(
        <View>
            

                <header>
                    <Header/>
                </header>

                
                <div className="body">
                    <div className="Texto">
                        <h1>POSTAGENS</h1>
                    </div>
                    <TextInput style={styles.input}
                        placeholder="Qual a sua dica para hoje?"
                    />

                    <div className="Botoes" >
                        <TouchableOpacity style={styles.button}>
    
                            <Text style={styles.buttonText}> Escolher imagem </Text>
    
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button2}>
    
                            <Text style={styles.buttonText}> Postar </Text>
    
                        </TouchableOpacity>
                    </div>
    
                    <div className="Postagem">
                        
                        <Image source={Imagem}/>
    
                        
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when     an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap intoelectronic  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently     with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    </div>
                </div>


                <footer>
                    <Menu/>
                </footer>            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input : {
        height : 40,
        width : '90%',
        borderColor: 'purple',
        borderWidth : 1,
        borderRadius : '6px',
        padding: 10,
        marginTop : '10px'
    },
    button : {

        backgroundColor : '#BBBBBB',
        padding: 10,
        borderRadius: 6,
        marginTop: 10,
        alignItems : 'center',
        justifyContent: 'center'

    },
    button2 : {

        backgroundColor : '#00D65F',
        padding: 10,
        borderRadius: 6,
        width:'90%',
        marginTop: 10,
        alignItems : 'center',
        justifyContent: 'center'

    },
    buttonText : {
        fontSize: '14px',
        color : 'white',

    },
})

export default Postagem;