import React from 'react';
import {

    StyleSheet,
    Text,
    View,
} from 'react-native';


function FlatCards(): React.JSX.Element {
    return (
        <>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]} >
                    <Text style={styles.cardText}>red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]} >
                    <Text style={styles.cardText}>green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]} >
                    <Text style={styles.cardText}>blue</Text>
                </View>
            </View>
        </>
    );
}
export default FlatCards
const styles = StyleSheet.create({

    headingText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#D3D3D3",
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 6,
        justifyContent: "space-between"
    },
    card: {
        width: 110,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        margin: 6,
        borderRadius: 6,
    },
    cardText: {
        color: "white"
    },
    cardOne: {
        backgroundColor: "#EF5354"
    },
    cardTwo: {
        backgroundColor: "green",
    },
    cardThree: {
        backgroundColor: "blue"
    }
});