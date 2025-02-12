// Users Schema
const mongoose = require('mongoose');
const validator = require('validator');

const usersSchema = new mongoose.Schema({
    name: { type: String, required: true, validate: {
        validator: function(v) {
            return /^[a-zA-Z\s.]+$/.test(v);
        },
        message: 'Name must contain only letters, spaces, and periods'
    }},
    username: { type: String, unique: true, required: true, minlength: 4 },
    email: { type: String, unique: true, required: true, validate: validator.isEmail, message: 'Invalid email address' },
    address: {
        street: { type: String, required: true },
        suite: { type: String, required: true },
        city: { type: String, required: true, validate: {
            validator: function(v) {
                return /^[a-zA-Z\s]+$/.test(v);
            },
            message: 'City must contain only letters and spaces'
        }},
        zipcode: {
            type: String,
            required: true,
            validate: {
                validator: function(v) {
                    return /^\d{5}-\d{4}$/.test(v);
                },
                message: 'Zip code format must be like 12345-1234 (DDDDD-DDDD, D = digit)'
            }
        },
        geo: {
            lat: { type: Number, required: true },
            lng: { type: Number, required: true }
        }
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d-\d{3}-\d{3}-\d{4}$/.test(v);
            },
            message: 'Phone format must be like 1-123-123-1234 (D-DDD-DDD-DDD, D = digit)'
        }
    },
    website: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return validator.isURL(v, { protocols: ['http', 'https'], require_protocol: true });
            },
            message: 'Invalid web address'
        }
    },
    company: {
        name: { type: String, required: true },
        catchPhrase: { type: String, required: true },
        bs: { type: String, required: true }
    }
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;

