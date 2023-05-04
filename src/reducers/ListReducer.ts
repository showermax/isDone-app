import React from 'react';
import {RootState} from "../redux/store";
import {Dispatch} from "redux";
import {api} from "../api/api";

export type ListType = {
    id: string
    parentId?: string | null | undefined,
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
    },
    {
        id: "2",
        parentId: null,
        order: 0,
        color: "grey",
        name: "Project1",
        commentCount: 10,
        isShared: false,
        isFavorite: false,
        isInboxProject: true,
        isTeamInbox: false,
        url: "https://todoist.com/showProject?id=220474322",
        viewStyle: "list"
    },
    {
        id: "3",
        parentId: null,
        order: 0,
        color: "grey",
        name: "Project2",
        commentCount: 10,
        isShared: false,
        isFavorite: false,
        isInboxProject: true,
        isTeamInbox: false,
        url: "https://todoist.com/showProject?id=220474322",
        viewStyle: "list"
    },
    {
        id: "4",
        parentId: null,
        order: 0,
        color: "grey",
        name: "Project3",
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
        case 'GET-LISTS': return action.payload.response
        default: return state
    }
};

const getListsAC = (response: ListType[])=>{
    console.log(response)
    return {
        type: 'GET-LISTS',
        payload:{
            response
        }
    } as const
}
export const getListsTC=()=>async(dispatch:Dispatch)=>{
    try{
        let response = await api.getProjects()
        dispatch(getListsAC(response))
        console.log(response)
    }catch (e) {

    }
}