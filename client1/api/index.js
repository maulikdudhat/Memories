import axios from 'axios'

const url = "http://localhost:6000/posts";

export const fetchPosts = () => axios.get(url)
