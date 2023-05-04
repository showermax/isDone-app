import React from 'react';
import {ListType} from "./ListReducer";
import {Dispatch} from "redux";
import {api} from "../api/api";

export type TaskType =
    {
        creatorId: string
        createdAt: string
        assigneeId?: string | null | undefined
        assignerId?: string | null | undefined
        commentCount: number
        isCompleted: boolean
        content: string | null | undefined
        description: string | null | undefined
        due?: {
            date: string | null
            isRecurring: boolean
            datetime?: string | null | undefined
            string: string
            timezone?: string | null | undefined
        } | undefined | null,
        id: string
        labels: string[]
        order: number
        priority: number
        projectId?: string | null | undefined
        sectionId?: string | null | undefined
        parentId?: string | null | undefined
        url: string
    }

let InitialState = [
    {
        creatorId: "2671355",
        createdAt: "2019-12-11T22:36:50.000000Z",
        assigneeId: "2671362",
        assignerId: "2671355",
        commentCount: 10,
        isCompleted: false,
        content: "Buy 1",
        description: "",
        due: {
            date: "2016-09-01",
            isRecurring: false,
            datetime: "2016-09-01T12:00:00.000000Z",
            string: "tomorrow at 12",
            timezone: "Europe/Moscow"
        },
        id: "2995104339",
        labels: ["Food", "Shopping"],
        order: 1,
        priority: 1,
        projectId: "1",
        sectionId: "7025",
        parentId: "2995104589",
        url: "https://todoist.com/showTask?id=2995104339"
    },
    {
        creatorId: "2671355",
        createdAt: "2019-12-11T22:36:50.000000Z",
        assigneeId: "2671362",
        assignerId: "2671355",
        commentCount: 10,
        isCompleted: false,
        content: "Buy Meat",
        description: "",
        due: {
            date: "2016-09-01",
            isRecurring: false,
            datetime: "2016-09-01T12:00:00.000000Z",
            string: "tomorrow at 12",
            timezone: "Europe/Moscow"
        },
        id: "2995104339",
        labels: ["Food", "Shopping"],
        order: 1,
        priority: 1,
        projectId: "1",
        sectionId: "7025",
        parentId: "2995104589",
        url: "https://todoist.com/showTask?id=2995104339"
    },
    {
        creatorId: "2671355",
        createdAt: "2019-12-11T22:36:50.000000Z",
        assigneeId: "2671362",
        assignerId: "2671355",
        commentCount: 10,
        isCompleted: false,
        content: "Buy Milk",
        description: "",
        due: {
            date: "2016-09-01",
            isRecurring: false,
            datetime: "2016-09-01T12:00:00.000000Z",
            string: "tomorrow at 12",
            timezone: "Europe/Moscow"
        },
        id: "2995104339",
        labels: ["Food", "Shopping"],
        order: 1,
        priority: 1,
        projectId: "1",
        sectionId: "7025",
        parentId: "2995104589",
        url: "https://todoist.com/showTask?id=2995104339"
    },
    {
        creatorId: "2671355",
        createdAt: "2019-12-11T22:36:50.000000Z",
        assigneeId: "2671362",
        assignerId: "2671355",
        commentCount: 10,
        isCompleted: false,
        content: "Buy Meat",
        description: "",
        due: {
            date: "2016-09-01",
            isRecurring: false,
            datetime: "2016-09-01T12:00:00.000000Z",
            string: "tomorrow at 12",
            timezone: "Europe/Moscow"
        },
        id: "2995104339",
        labels: ["Food", "Shopping"],
        order: 1,
        priority: 1,
        projectId: "2",
        sectionId: "7025",
        parentId: "2995104589",
        url: "https://todoist.com/showTask?id=2995104339"
    },
    {
        creatorId: "2671355",
        createdAt: "2019-12-11T22:36:50.000000Z",
        assigneeId: "2671362",
        assignerId: "2671355",
        commentCount: 10,
        isCompleted: false,
        content: "Buy Milk",
        description: "",
        due: {
            date: "2016-09-01",
            isRecurring: false,
            datetime: "2016-09-01T12:00:00.000000Z",
            string: "tomorrow at 12",
            timezone: "Europe/Moscow"
        },
        id: "2995104339",
        labels: ["Food", "Shopping"],
        order: 1,
        priority: 1,
        projectId: "2",
        sectionId: "7025",
        parentId: "2995104589",
        url: "https://todoist.com/showTask?id=2995104339"
    },
    {
        creatorId: "2671355",
        createdAt: "2019-12-11T22:36:50.000000Z",
        assigneeId: "2671362",
        assignerId: "2671355",
        commentCount: 10,
        isCompleted: false,
        content: "Buy Meat",
        description: "",
        due: {
            date: "2016-09-01",
            isRecurring: false,
            datetime: "2016-09-01T12:00:00.000000Z",
            string: "tomorrow at 12",
            timezone: "Europe/Moscow"
        },
        id: "2995104339",
        labels: ["Food", "Shopping"],
        order: 1,
        priority: 1,
        projectId: "2",
        sectionId: "7025",
        parentId: "2995104589",
        url: "https://todoist.com/showTask?id=2995104339"
    },
    {
        creatorId: "2671355",
        createdAt: "2019-12-11T22:36:50.000000Z",
        assigneeId: "2671362",
        assignerId: "2671355",
        commentCount: 10,
        isCompleted: false,
        content: "Buy 3",
        description: "",
        due: {
            date: "2023-04-05",
            isRecurring: false,
            datetime: "2016-09-01T12:00:00.000000Z",
            string: "tomorrow at 12",
            timezone: "Europe/Moscow"
        },
        id: "2995104339",
        labels: ["Food", "Shopping"],
        order: 1,
        priority: 1,
        projectId: "3",
        sectionId: "7025",
        parentId: "2995104589",
        url: "https://todoist.com/showTask?id=2995104339"
    },
    {
        creatorId: "2671355",
        createdAt: "2019-12-11T22:36:50.000000Z",
        assigneeId: "2671362",
        assignerId: "2671355",
        commentCount: 10,
        isCompleted: false,
        content: "Buy 5",
        description: "",
        due: {
            date: "2016-09-01",
            isRecurring: false,
            datetime: "2016-09-01T12:00:00.000000Z",
            string: "tomorrow at 12",
            timezone: "Europe/Moscow"
        },
        id: "2995104339",
        labels: ["Food", "Shopping"],
        order: 1,
        priority: 1,
        projectId: "3",
        sectionId: "7025",
        parentId: "2995104589",
        url: "https://todoist.com/showTask?id=2995104339"
    },
]
export const TasksReducer = (state: TaskType[] = InitialState, action: any): TaskType[] => {
    switch (action.type) {
        case 'GET-TASKS':{return action.payload.tasks}
        default: return state
    }
};

const getTasksAC = (tasks:TaskType[]) => {
    return {
        type: 'GET-TASKS',
        payload: {tasks}
    } as const
}

export const getTasksTC = () => async (dispatch: Dispatch) => {
    try {
        let tasks = await api.getTasks()
        dispatch(getTasksAC(tasks))
    } catch (e) {

    }
}
