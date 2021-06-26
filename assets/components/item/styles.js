import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainCon: {
        flex: 1,
    },

    main: {
        width: '100%',
        height: '100%',
      },
    
      headers: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
    
      h1: {
        fontSize: 40,
        fontWeight: '500',
        textAlign: 'center',
      },
    
      h2: {
        fontSize: 16,
      },
    
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        flex: 1,
      }
});

export default styles;