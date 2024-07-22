
export const cartItemsResponse={
    "id": 1,
    "numberOfItems": 1,
    "user": {
        "id": 1,
        "userName": "koushal123",
        "userEmail": "koushaljha889@gmail.com",
        "role": "USER",
        "enabled": true,
        "credentialsNonExpired": true,
        "authorities": null,
        "username": "koushaljha889@gmail.com",
        "accountNonExpired": true,
        "accountNonLocked": true
    },
    "products": [
        {
            "id": 1,
            "type": "drink",
            "name": "Banana juice",
            "description": "Tasty Banana juice",
            "price": 150.0
        },
        {
            "id": 3,
            "type": "drink",
            "name": "Banana juice",
            "description": "Tasty Banana juice",
            "price": 180.0
        },
        {
            "id": 4,
            "type": "drink",
            "name": "Banana juice",
            "description": "Tasty Banana juice",
            "price": 200.0
        }
    ],
    "productQuantityWithId": {
        "1": 2,
        "3":1,
        "4":5
    },
    "totalPrice": 900.0
}

export const GET_CART_BY_USER_ENDPOINT = '/api/cart/get';