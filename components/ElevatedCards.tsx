import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
export default function ElevatedCards(): React.JSX.Element {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.ElevatedCard]}>
                    <Text style={styles.cardText}>Tap</Text>
                </View>
                <View style={[styles.card, styles.ElevatedCard]}>
                    <Text style={styles.cardText}>On</Text>
                </View>
                <View style={[styles.card, styles.ElevatedCard]}>
                    <Text style={styles.cardText}>Me</Text>
                </View>
                <View style={[styles.card, styles.ElevatedCard]}>
                    <Text style={styles.cardText}>To</Text>
                </View>
                <View style={[styles.card, styles.ElevatedCard]}>
                    <Text style={styles.cardText}>Scroll</Text>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({

    headingText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#D3D3D3",
        paddingHorizontal: 8,
        marginTop: 8
    },
    container: {
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 7
    },
    cardText: {
        color: "white",
    },
    card: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 12,
        marginHorizontal: 10,
        borderRadius: 6,
    },
    ElevatedCard: {
        backgroundColor: "#CAD5E2",
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.4,
        shadowColor: "#333",
        shadowRadius: 2
    }
})