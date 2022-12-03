import "../index.css";
import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import useLocalStorage from "../Hooks/useLocalStorage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCode } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  const [html, setHtml] = useLocalStorage('html', "");
  const [css, setCss] = useLocalStorage('css', "");
  const [js, setJs] = useLocalStorage('js', "");
  const [srcDoc, setSrcDoc] = useState("");

  const resethandler = () => {
    setHtml("");
    setCss("");
    setJs("");
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
      return () => clearTimeout(timeout);
    }, 250)

  }, [html, css, js])
  return (

    <>
      <div className="title">
        <h1></h1>
        <h2> <FontAwesomeIcon icon={faCode} /> Online-Code-Editor</h2>
        <button className="reset-btn" onClick={resethandler}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>

      </div>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane bottom-pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}
