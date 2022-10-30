import {MongoClient, ObjectId} from 'mongodb'
import {BlogType, PostType, UserDBType} from "./repositories/types";

const mongoUri = "mongodb+srv://cluster0.qduucnh.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority"


const client = new MongoClient(mongoUri)
export const db = client.db("blogs&posts")
export const blogsCollection = db.collection<BlogType>("blogs")
export const postsCollection = db.collection<PostType>("posts")
export const usersCollection = db.collection<UserDBType>("users")


export async function runDb() {
    try {
        await client.connect();
        await client.db("blogs&posts").command({ping:1});
        console.log("Connected successfully to mongo server");
    } catch (e){
        console.log(e)
        await client.close();
    }
}
