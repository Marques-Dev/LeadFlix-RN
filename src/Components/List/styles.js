import styled from "styled-components/native";


export const ContainerItem = styled.View`
    height: 110px;
    width: ${(props) => (props.trending ? 95 : 90)}px;
    margin: 5px;
    margin-right: 20px;
    
`;

export const Image = styled.Image.attrs({
    resizeMode: 'stretch',
})`
    height: 100%;
    width: 100px;
    border-radius: ${(props) => (props.trending ? 55 : 8)}px;
`;

export const Text = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
`;