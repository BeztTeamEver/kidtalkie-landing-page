const config = {
	API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
	NODE_ENV: import.meta.env.NODE_ENV || 'development',
};

export const { API_URL, NODE_ENV } = config;
