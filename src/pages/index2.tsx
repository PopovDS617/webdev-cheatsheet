import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function Home(adad) {
  const codeString = `import React from 'react';
  import ArticleContainer from '../../../components/article/ArticleContainer';
  import ArticleNavigation from '../../../components/article/ArticleNavigation';
  import TableContainer from '../../../components/article/TableContainer';
  import PageLayout from '../../../components/layouts/PageLayout';
  
  type Props = {};
  
  const PresentSimplePage = (props: Props) => {
    return (
      <PageLayout>
        <ArticleContainer>
         
          </table>
        </ArticleContainer>
      </PageLayout>
    );
  };
  
  export default PresentSimplePage;`;
  return (
    <div className="h-screen">
      <main className="h-full flex justify-center items-center">
        <h1 className="font-mono text-9xl">Hello there</h1>

        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeString}
        </SyntaxHighlighter>
      </main>
    </div>
  );
}
