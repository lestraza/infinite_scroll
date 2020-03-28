export function getData (skip, take) {
    const url = `/api/getData?skip=${skip}&take=${take}`
    fetch(url)
    .then( res => {
        return res.json();
    })
    .then( data => {
        console.log(data);
    })
}
