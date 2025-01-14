# MongoDB $in operator with ObjectId
This example demonstrates an incorrect usage of the `$in` operator with an array of ObjectIds in MongoDB.  The correct usage requires passing an array of actual ObjectId objects, not strings representing the ObjectIds.  Failure to do this will result in an empty result set.

## Bug
The provided code attempts to query documents where the `_id` field is in a specified array. However, the array contains strings representing ObjectIds instead of actual `ObjectId` objects.  This will not match any documents because of type mismatch.

## Solution
The solution converts the strings representing ObjectIds into actual `ObjectId` objects before using them in the query. This ensures proper comparison and matching of documents.