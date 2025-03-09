const getBaseUrl = () => {
   return process.env.NODE_ENV === "production"
   ? "https://book-store-mern-project-mny8.onrender.com"
   : "http://localhost:5000";
};


export default getBaseUrl