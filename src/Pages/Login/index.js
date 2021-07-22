import React from 'react';
import { 
    Container, 
    Logo, ImageBackground, 
    Input, 
    ContainerInput,
    Button,
    Text,
    ContainerTexts,
    Form,

} from "./styles";
import logo from "../../Assets/logot.png";
import imageBackground from "../../Assets/login.jpg";

const Login = ({ navigation }) => {

    const handleLogin = () => {
        navigation.replace("Home")
    };

    const handleEsqSenha = () => {
        alert('Esqueceu a senha validado')
    };

    const handleCriarConta = () => {
        alert('Criar conta validado')
    };


    return (
        <ImageBackground source={imageBackground}>
        <Container>
            <Logo source={logo} />
            <ImageBackground source={imageBackground} />

        <Form>
            <ContainerInput>
            <Input placeholder="E-mail" placeholderTextColor= "white"/>
            </ContainerInput>

            <ContainerInput>
            <Input placeholder="Senha" placeholderTextColor= "white"/>
            </ContainerInput>

            <Button onPress={handleLogin}>
                <Text> LOGIN </Text>
            </Button>

            <ContainerTexts>
            <Text onPress={handleEsqSenha}> Esqueceu a senha </Text>
            <Text> | </Text>
            <Text onPress={handleCriarConta}> Criar uma conta </Text>
            </ContainerTexts>
        </Form>

        </Container>
        </ImageBackground>
    );
}

export default Login;
