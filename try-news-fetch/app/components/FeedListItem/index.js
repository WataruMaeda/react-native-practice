import React from 'react'
import { Image } from 'react-native'
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'
import styles from './styles'

export default getFeedCard = (feed) => {
    const { urlToImage, title, description, author } = feed.item
    const { name } = feed.item.source
    return(
        <Card style={styles.card}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: urlToImage}} />
                <Body>
                  <Text>{name}</Text>
                  <Text note>{author}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: urlToImage}} style={styles.cardThumbnail}/>
                <Text style={styles.titleText}> {title} </Text>
                <Text note> {description} </Text>
              </Body>
            </CardItem>
            <CardItem>
                <Button full info style={styles.button}>
                    <Text>Read the article</Text>
                </Button>
            </CardItem>
          </Card>
    )
}