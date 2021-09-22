class PostModel {
    constructor(id ,text) {
        this.id = id
        this.text = text
    }

    toString() {
        return this.id + ' ' + this.text
    }
}

export default PostModel;