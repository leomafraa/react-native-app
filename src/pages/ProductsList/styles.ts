import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#fff',
    },
    producttitle: {
        fontSize: 20,
        color: '#ff66c4',
        fontWeight: 'bold',
    },
    card: {
        padding: 20,
        marginBottom: 20,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    priceSection: {
        flexDirection: 'row',
    },
    price: {
        color: 'black',
        fontWeight: 'bold',
    },
    exitButton: {
        marginRight: 20
    }
});
