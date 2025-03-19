import react from "react"
import { StyleSheet, View, Text, Image, ScrollView } from "react-native"

// Define the type for each contact
interface Contact {
    uid: number;
    name: string;
    status: string;
    imageUrl: any; // Will use the string path for local images
}


export default function ContactList() {
    const contacts: Contact[] = [
        {
            uid: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: require("../assets/UserImages/UserOne.png"),
        },
        {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: require("../assets/UserImages/UserTwo.png"),
        },
        {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: require("../assets/UserImages/UserThree.png"),
        },
        {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: require("../assets/UserImages/UserFour.png"),
        },
    ];
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView scrollEnabled={false} style={styles.container}>

                {contacts.map((contact) => (
                    <View key={contact.uid} style={styles.userCard}>
                        <Image source={(contact.imageUrl)} style={styles.userImage} />
                        <View style={styles.userDescription}>
                            <Text style={styles.userName}>{contact.name}</Text>
                            <Text style={styles.userStatus}>{contact.status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingHorizontal: 15 },
    userDescription: {
        paddingLeft: 15,
        justifyContent: "center"
    },
    userCard: {
        flex: 1,
        backgroundColor: "#8D3DAF",
        marginVertical: 2,
        borderRadius: 10,
        flexDirection: "row",
        paddingHorizontal: 8,
        paddingVertical: 6
    },
    headingText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#D3D3D3",
        paddingHorizontal: 8,
        marginTop: 10,
        marginBottom: 8
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    userName: { color: "white", fontWeight: "bold" },
    userStatus: { color: "white", fontSize: 12 }
})