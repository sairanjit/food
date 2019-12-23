import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 2rLefbtpl4wSh3_-FNKAbUG6u0FRcYIcnC0W6ck-UqmCJs5nS6rQG0VEAFvV2gTkBI-rTmRkGYxruG-Zt1SVaTqzO2V3PCx1KOJHFv0LPgrCmOHwOhKxMcmsTNz9XXYx'
    }
});

