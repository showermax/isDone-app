import React from 'react';
import {RootState} from "../redux/store";

export type ListType = {
    id: string
    parentId: string | null,
    order: number
    color: string
    name: string
    commentCount: number
    isShared: boolean
    isFavorite: boolean
    isInboxProject: boolean
    isTeamInbox: boolean
    url: string
    viewStyle: string
}

const InitialState = [
    {
        id: "1",
        parentId: null,
        order: 0,
        color: "grey",
        name: "Inbox",
        commentCount: 10,
        isShared: false,
        isFavorite: false,
        isInboxProject: true,
        isTeamInbox: false,
        url: "https://todoist.com/showProject?id=220474322",
        viewStyle: "list"
    }
]

export const ListReducer= (state:ListType[] = InitialState, action:any):ListType[] => {
    switch (action.type) {
        case 'GET-LIST': return state
        default: return state
    }
};

