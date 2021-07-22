import React, { useEffect } from "react";
import { Container, Logo, ImageBackground } from "./styles";
import logo from "../../Assets/logot.png";
import imageBackground from "../../Assets/splash.png";


const Splash = ({ navigation }) => {
    const handleLogin = () => {
        navigation.navigate("Login");
    };

    //utilizando o hook para definir ciclo de vida da tela 'splash'
    useEffect(() => {
        setTimeout(() => {
            handleLogin();
        }, 1500);
    }, []);



    return (
        <Container>
            <Logo source={logo} />
            <ImageBackground source={imageBackground}   />
        </Container>
    );
};

export default Splash;
