import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 36,
        color: 'red'
    },
    subHeading: {
        fontSize: 18,
        color: '#000',
        marginTop: 10,
        marginBottom: 10,
        fontStyle: 'italic'
    },

    bottomModal: {
        justifyContent: "flex-end",
        margin: 0
    },
    button: {
        marginBottom: 20,
        marginTop: 20,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white',
        fontSize: 24

    },
    configInput: {
        width: 200,
        height: 35,
        fontSize: 18,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10

    }
});