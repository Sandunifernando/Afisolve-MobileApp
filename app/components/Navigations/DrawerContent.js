import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';



export function DrawerContent(props) {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>

                        {/*<View style={styles.row}>*/}
                        {/*    <View style={styles.section}>*/}
                        {/*        <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>*/}
                        {/*        <Caption style={styles.caption}>Following</Caption>*/}
                        {/*    </View>*/}
                        {/*    <View style={styles.section}>*/}
                        {/*        <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>*/}
                        {/*        <Caption style={styles.caption}>Followers</Caption>*/}
                        {/*    </View>*/}
                        {/*</View>*/}
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            // icon={({color, size}) => (
                            //     <Icon
                            //         name="home-outline"
                            //         color={color}
                            //         size={size}
                            //     />
                            // )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            // icon={({color, size}) => (
                            //     <Icon
                            //         name="account-outline"
                            //         color={color}
                            //         size={size}
                            //     />
                            // )}
                            label="My Purchase"
                            onPress={() => {props.navigation.navigate('My Purchase')}}
                        />
                        {/*<DrawerItem*/}
                        {/*    icon={({color, size}) => (*/}
                        {/*        <Icon*/}
                        {/*            name="bookmark-outline"*/}
                        {/*            color={color}*/}
                        {/*            size={size}*/}
                        {/*        />*/}
                        {/*    )}*/}
                        {/*    label="Bookmarks"*/}
                        {/*    onPress={() => {props.navigation.navigate('BookmarkScreen')}}*/}
                        {/*/>*/}
                        <DrawerItem
                            // icon={({color, size}) => (
                            //     <Icon
                            //         name="settings-outline"
                            //         color={color}
                            //         size={size}
                            //     />
                            // )}
                            label="Notification"
                            onPress={() => {navigation.navigate('Notifications')}}
                        />
                        <DrawerItem
                            // icon={({color, size}) => (
                            //     <Icon
                            //         name="account-check-outline"
                            //         color={color}
                            //         size={size}
                            //     />
                            // )}
                            label="Lodge Complaint"
                            onPress={() => {props.navigation.navigate('Lodge Complaint')}}
                        />



                    <DrawerItem
                        label="Lodge Complaint"
                        onPress={() => {props.navigation.navigate('Lodge Complaint')}}
                    />



                <DrawerItem
                    label="Feedback"
                    onPress={() => {props.navigation.navigate('FeedBack')}}
                />


            <DrawerItem
                label="Sign Out"
                onPress={() => {props.navigation.navigate('Home')}}
            />
        </Drawer.Section>
                    {/*<Drawer.Section title="Preferences">*/}
                    {/*    <TouchableRipple onPress={() => {toggleTheme()}}>*/}
                    {/*        <View style={styles.preference}>*/}
                    {/*            <Text>Dark Theme</Text>*/}
                    {/*            <View pointerEvents="none">*/}
                    {/*                <Switch value={paperTheme.dark}/>*/}
                    {/*            </View>*/}
                    {/*        </View>*/}
                    {/*    </TouchableRipple>*/}
                    {/*</Drawer.Section>*/}
                </View>
            </DrawerContentScrollView>
            {/*<Drawer.Section style={styles.bottomDrawerSection}>*/}
            {/*    <DrawerItem*/}
            {/*        icon={({color, size}) => (*/}
            {/*            <Icon*/}
            {/*                name="exit-to-app"*/}
            {/*                color={color}*/}
            {/*                size={size}*/}
            {/*            />*/}
            {/*        )}*/}
            {/*        label="Sign Out"*/}
            {/*        onPress={() => {signOut()}}*/}
            {/*    />*/}
            {/*</Drawer.Section>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
