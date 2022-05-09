import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return(
            <Html lang="en">
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/> 
                
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                <meta name="description" content="description of your project" />
                <meta name="theme-color" content="#000" />
                <title>Title of the project</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>

                <link rel="shortchut icon" href="favicon.ico" type="image/icon"/>
                </Head>
                <body>
                   <Main/>
                   <NextScript />
                </body>
            </Html>
        )
    }
}