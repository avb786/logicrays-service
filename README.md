# Logicrays Service

# To Run Service locally, commands:
    1. Write the command : nodemon

# Curl Scripts 

1. POST API curl: To Save to learning data 
    - curl --location --request POST 'https://logicrays-service.herokuapp.com/api/learnService/save/learning/data' \
--header 'Content-Type: application/json' \
--data-raw '{
    "language": "Marathi",
    "subject": "Grammar",
    "class": 9,
    "chapter": 11,
    "topic": "Story",
    "description": "Marathi Grammar",
    "image": "https://images-na.ssl-images-amazon.com/images/I/81-t8RacTxL.jpg"
}'


2. GET API curl: To get e-learning data with filter

 - curl --location -g --request GET 'localhost:3000/api/learnService/get/learning/filter/data?queryData={}'


3.  To run service locally remove "https://logicrays-service.herokuapp.com" and replace "http://localhost:3000" (vice-versa)