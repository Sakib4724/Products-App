export const fetchProducts = async () => {
    try {
        //const response = await fetch(process.env.REACT_APP_PRODUCT_API_URL);
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.log("Api..."+ process.env.REACT_APP_PRODUCT_API_URL);
        console.error('Failed to fetch products:', error);
        return [];
    }
};