import axios from "axios";

export const getPosts = () => axios.get('http://localhost:4000/posts');