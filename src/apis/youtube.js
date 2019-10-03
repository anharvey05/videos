import axios from 'axios';

const KEY = 'AIzaSyBApvNU1EIg7kF4lR-ML7G7YL_IxadJIyo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});