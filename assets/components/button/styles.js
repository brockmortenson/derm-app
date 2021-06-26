import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
    },

    button: {
        // backgroundColor: 'yellow',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.43,
        shadowRadius: 2,  
        elevation: 5,
    },

    text: {
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
});

export default styles;