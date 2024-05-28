import { useDispatch, useSelector } from "react-redux";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../CreateEmail/crestamail.css";
import {
  setTo,
  setcompose,
  setfrom,
  setsubject,
} from "../EmailConfig/Emailconfig";
import axios from "axios";
import { useState } from "react";

export default function CreateEmail() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleFromChange = (e) => {
    dispatch(setfrom(e.target.value));
  };

  const handletochange = (e) => {
    dispatch(setTo(e.target.value));
  };

  const handlesubjectchange = (e) => {
    dispatch(setsubject(e.target.value));
  };

  const handlecomposechange = (editorState) => {
    setEditorState(editorState);
    dispatch(setcompose(editorState.getCurrentContent().getPlainText()));
  };

  const submiting = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://mail--box-client-default-rtdb.firebaseio.com/Cart.json",
        {
          email: email.from,
          to: email.to,
          subject: email.subject,
          compose: email.composing,
        }
      );
      alert(response.data.message || "Email sent sucessfully");
      setfrom("");
      setTo("");
      setcompose("");
      setsubject("");
      setEditorState(editorState.createEmpty());
    } catch (err) {
      console.error(err);
      alert("something Wrong");
    }
  };
  return (
    <>
      <form onSubmit={submiting} className="All-form-elements">
        <div >
          <input className="email-sending"  
            type="email"
            placeholder="From Email"
            value={email.from}
            onChange={handleFromChange}
          ></input>
        </div>
        <div>
          <input
            type="email"
            placeholder="To Email"
            value={email.to}
            onChange={handletochange}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            value={email.subject}
            onChange={handlesubjectchange}
          ></input>
        </div>
        <div>
          <Editor
            editorState={editorState}
            onEditorStateChange={handlecomposechange}
            placeholder="Compose email"
          ></Editor>
        </div>
        <button type="submit" className="sending">Send</button>
      </form>
    </>
  );
}
