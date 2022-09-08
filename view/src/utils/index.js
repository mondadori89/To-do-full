export const fetchToDos = () => {
    console.log('trying to fetch');
    //const results = await fetch('http://localhost:8000/api/all', { method: 'GET', mode: 'no-cors' });
    //console.log(results.json());
    const res = [{"description": "aaahhh"}, {"description": "beeeeeeee"}]
    console.log('fetch done!');
    return res;
    /*
    fetch('/api/all', { method: 'GET' }).
    then(function(response) {
        console.log('fetch sucess');
        return response.json();
    });
    */
};