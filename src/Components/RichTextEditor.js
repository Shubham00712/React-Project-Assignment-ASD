import {
  ContentState,
  convertFromHTML,
  Editor,
  EditorState,
  RichUtils,
} from "draft-js";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function RichTextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const userData = useSelector((state) => state.user);
  
  const handleEditorChange = (value) => {
    setEditorState(value);
  };

  const handleStyleChange = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const handleBlockStyleChange = (style) => {
    setEditorState(RichUtils.toggleBlockType(editorState, style));
  };

  useEffect(() => {
    const initialText = `
  <b>UserId:</b> ${userData.id}<br/><b>Name:</b> ${userData.name}<br/><b>Email:</b> ${userData.email}<br/><b>Phone:</b> ${userData.phone}<br/><b>Address:</b> ${userData.address}<br/>`;

    const blocksFromHTML = convertFromHTML(initialText);
    const content = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setEditorState(EditorState.createWithContent(content));
  }, [userData]);

  return (
    <div
      style={{
        boxSizing: "border-box",
        border: "1px solid #ddd",
        padding: "10px",
        cursor: "text",
        margin:'auto',
        borderRadius:'5px'
      }}
    >
      <div className="toolbar">
        <button onClick={() => handleStyleChange("BOLD")}>Bold</button>
        <button onClick={() => handleStyleChange("ITALIC")}>Italic</button>
        <button onClick={() => handleStyleChange("UNDERLINE")}>
          Underline
        </button>
        <button onClick={() => handleBlockStyleChange("unordered-list-item")}>
          Unordered List
        </button>
        <button onClick={() => handleBlockStyleChange("ordered-list-item")}>
          Ordered List
        </button>
      </div>
      <div style={{padding:'10px',fontSize:'14px',border:'1px solid grey',height:'200px',overflow:'auto',marginTop:'6px'}}>
      <Editor editorState={editorState} onChange={handleEditorChange} />
      </div>
    </div>
  );
}

export default RichTextEditor;
