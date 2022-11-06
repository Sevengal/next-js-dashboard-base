import Document, { DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx);
  }
}

export default MyDocument;

// import Document, { Head, Html, Main, NextScript } from 'next/document';
//
// class MyDocument extends Document {
//   render() {
//     return (
//       <Html>
//         <Head>
//           <link rel="preconnect" href="https://fonts.googleapis.com" />
//           <link rel="preconnect" href="https://fonts.gstatic.com" />
//           <link
//             href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
//             rel="stylesheet"
//           />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }
//
// export default MyDocument;
