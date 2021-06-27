import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        position: 'absolute',
        top: 50,
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    logo: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },

    menu: {
        width: 35,
        height: 35,
    },
});

export default styles;