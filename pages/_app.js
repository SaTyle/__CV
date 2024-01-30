import '../styles/globals.css'

import Layout from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}


// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import Layout from './layout';

// const queryClient = new QueryClient();

// function MyApp({ Component, pageProps }) {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Router> {/* Wrap your entire application with BrowserRouter */}
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       </Router>
//     </QueryClientProvider>
//   );
// }

// export default MyApp;
