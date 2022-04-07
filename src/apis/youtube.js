import axios from 'axios';

const KEY = 'AIzaSyDGovnlG0rPPetokEz0G8qGQVkCaSxXDeM';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});