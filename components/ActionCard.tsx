import React from "react"
import { StyleSheet, View, Text, Linking, Image, TouchableOpacity } from "react-native"
export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>

                    <Text style={styles.headerText}>What's new in javascript 21 - ES12</Text>
                </View>
                <Image source={require("../assets/nodejs.jpg")} style={styles.cardImage} />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>Just like every year, Javascript brings
                        in new features. This year javasxript is bringing 4 new features, which
                        are almost in production rollout.I won't be wasting much more time an...
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => { openWebsite("https://blog.learncodeonline.in/whats-new-in-javascript-21-es12") }}>
                        <Text style={styles.socialLinks}>Read More</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com/hiteshchoudharyofficial/')}>
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#D3D3D3",
        paddingHorizontal: 8,
        marginTop: 15
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialLinks: {
        backgroundColor: "#ffffff",
        padding: 10,
        borderRadius: 5,
        fontWeight: "bold"
    },
    bodyContainer: { padding: 10 },
    headerText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: "center",
    },
    card: {
        borderRadius: 6,
        height: 360,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    cardImage: {
        height: 190,
        width: 379.5
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",

    }
})
