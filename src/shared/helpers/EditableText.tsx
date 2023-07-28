import React, { useState } from "react";
type PropsType = {
  as?: any,
  content: string,
  callback: (s:string) => void,
  mode: boolean
}
export const EditableText = ({ content, callback, as, mode }: PropsType) => {
  const [editableMode, setEditableMode] = useState(mode);
  console.log(editableMode);
  return (
    <>
      {editableMode ?
        <input type="text" />
      :
      <div>{content}</div>}
    </>
  );
};

