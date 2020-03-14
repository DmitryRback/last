import profileReducer, {addPostActionCreator, deletePost} from "./ProfileReducer";
import React from "react";
import {render} from "@testing-library/react";
import App from "../App";


let state = {
    posts: [
        {message: 'Hello how are youre?', id: 1, likesCount: 15},
        {message: 'It\'s my first post', id: 2, likesCount: 20},
        {message: 'Hello ', id: 3, likesCount: 15},
        {message: 'post', id: 4, likesCount: 0},
    ]
}


test('length of post shod be incremented', () => {
    let action = addPostActionCreator('test')

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
});

test('message post should be correct', () => {
    let action = addPostActionCreator('test')

    let newState = profileReducer(state, action)

    expect(newState.posts[0].message).toBe('test')
});
test('delete post should be length', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
});