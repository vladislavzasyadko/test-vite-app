import './App.css'
import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";

function App() {
    const markdown: string = `
  # Header 1
  ## Header 2

  _italic_

  **bold**
  
  ~~strikethrough~~
  
  * [ ] task
  
  * [x] task
  `;

    return (
        <div className={'main'}>
            Organizer
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
            </ReactMarkdown>
        </div>
    )
}

export default App
