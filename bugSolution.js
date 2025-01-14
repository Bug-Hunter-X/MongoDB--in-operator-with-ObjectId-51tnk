```javascript
const { ObjectId } = require('mongodb');

//Correct usage of $in operator with an array of ObjectId
const objectIds = ["654321", "123456"].map(id => new ObjectId(id));
db.collection('myCollection').find({ _id: { $in: objectIds } }).toArray()
```