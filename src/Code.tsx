import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

 type Props = {
children:React.ReactNode};


const Code=(props:Props)=> {
   
 
  
 
    return (
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {props.children}
        </SyntaxHighlighter>
      
    
  )
}

export default Code
