export function getData(skip, take) {
    const url = `/api/getData?skip=${skip}&take=${take}`
    return fetch(url)
        .then(res => {
            return res.json();
        })
}
