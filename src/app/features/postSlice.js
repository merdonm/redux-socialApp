import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Love",
    content: "Rather not to say",
  },
  {
    id: 2,
    title : "Long Distance",
    content : "Such a nice long distance"
  },
];

export const PostSlice = createSlice({
    name : "post",
    initialState,
    reducers:{

    }
})

export default PostSlice.reducer