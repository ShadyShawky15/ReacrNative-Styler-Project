import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
export default function ElevatedCards(): React.JSX.Element {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={require("../assets/OSK.jpg")} style={styles.cardImage} />

                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLabel}>Pink City</Text>
                    <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the
                        city of Jaipur , India. Built from red and pink sabdstone, it is
                        on the edge of the City Palace</Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cardTitle: {
        color: "#000000",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 4
    },
    cardLabel: {
        color: "#000000",
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: "#758283",
        fontSize: 12,
        marginTop: 6,
        marginBottom: 12,
        flexShrink: 1
    },
    cardFooter: {
        color: "#000000"
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 8,
    },
    headingText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#D3D3D3",
        paddingHorizontal: 8,
        marginTop: 8,
    }, card: {
        marginVertical: 12,
        marginHorizontal: 16,
        height: 360,
        borderRadius: 6
    },
    cardImage: {
        height: 180,
        width: 380,
        marginBottom: 8,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
    },
    cardElevated: {
        backgroundColor: "#FFFFFF",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
    }
})