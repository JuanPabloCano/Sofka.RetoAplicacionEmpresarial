import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';

export const FormInput = ({setContent}) => {
    const text = useRef(null);
    const readOnlyConfig = {
        readonly: false
    }

    return (
        <JoditEditor
        ref = {text}
        readOnlyConfig = {readOnlyConfig}
        tabIndex = {1}
        onBlur = {newContent => setContent(newContent)}
        onChange = {newContent => {}}
        />
    );
}
