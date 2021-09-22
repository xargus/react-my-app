import PostModel from "./PostModel";

const postsConverter = {
    toFirestore : (posts) => {
        return {
            data: [...posts]
        }
    },
    fromFirestore: (snapshot, options) => {
        const snapData = snapshot.data(options);
        const posts = [...snapData.data]
        return posts.map(post => new PostModel(post.id, post.text));
    }
}

export {postsConverter}