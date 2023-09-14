
export default async function fetcher (phrase) {
    try {
         let response = await fetch(
           `https://tap-web-1.herokuapp.com/topics/${phrase}`
         );

        let data = await response.json();
        
        return data;

        
    } catch (error) {
        console.log(error);
    } 
};