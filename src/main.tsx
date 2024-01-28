import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/route';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
ReactDOM.createRoot(document.getElementById('root')!).render(

	<React.StrictMode>
		<ToastContainer
			position="top-right"
			autoClose={3000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
		/>
		<BrowserRouter>
			<Header />
			<AppRoutes />
			<Footer />
		</BrowserRouter>
	</React.StrictMode>,
);
