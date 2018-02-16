import {newsUrls }from './config'

export const getFeeds = () => {
   return fetch(newsUrls.tech)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.articles;
        }).catch((error) => {
            console.error(error);
            return error
        });
} 