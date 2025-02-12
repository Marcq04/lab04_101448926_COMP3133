const fs = require('fs');
const axios = require('axios');

const users = JSON.parse(fs.readFileSync('UsersData.json', 'utf-8'));

const uploadUsers = async () => {
    try {
        for (const user of users) {
            await axios.post('http://localhost:8081/users', user);
        }
        console.log('Users uploaded successfully');
    } catch (error) {
        console.error('Error uploading users:', error);
    }
};

uploadUsers();