import React, { ChangeEvent, Component, KeyboardEvent, useState } from "react";

type PropsType = {
  as?: any,
  content: string,
  callback: (s: string) => void,
  mode: boolean
}
export const EditableText = ({ content, callback, as: Component = 'div', mode }: PropsType) => {
  const [editableMode, setEditableMode] = useState(mode);
  const [newText, setNewText] = useState(content)

  const setTextHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setNewText(e.currentTarget.value)
  }
  const setEditHandler =() => {
    callback(newText)
    setNewText('')
    setEditableMode(false)
  }
  const keyDownHandler =(e: KeyboardEvent<HTMLInputElement>)=>{
    if (e.key==='Enter') setEditHandler()
  }

  return (
    <>
      {editableMode ?
        <input autoFocus={true} placeholder={"Title"} onChange={setTextHandler} value={newText} onBlur={setEditHandler} onKeyDown={keyDownHandler} ></input>
        :
        <Component onDoubleClick={()=>setEditableMode(true)}>{content}</Component>}
    </>
  );
};

