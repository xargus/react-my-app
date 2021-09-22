import axios from "axios";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { postsConverter } from "./Converter";

export const getPosts = () => axios.get('http://localhost:4000/posts');
export const getPostsFirebase = () => getDoc(doc(firestore, "test","posts").withConverter(postsConverter));