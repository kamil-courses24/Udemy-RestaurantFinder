import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer C-5QWrKXBtO1rnr0LR-gpNm4A_VUJXK5Yy29shCX8ZXWXhNKsms3O-BjVD3JXrZYS2hvePAybZRqT0heSG6JMlKCmXjuNiDf1S1vkjK2mvzupUqjiHFi3UdyCzTIXnYx'
    }

})