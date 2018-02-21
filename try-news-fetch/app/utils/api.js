import {newsUrls }from './config'

export const getTechFeeds = () => {
   return fetch(newsUrls.tech)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.articles;
        }).catch((error) => {
            return error
        });
} 