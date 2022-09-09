export const fetchToDos = async () => {
    const res = await fetch('http://localhost:8000/api/all');
    const dataFetched = res.json();
    return dataFetched;
};

export const postToDo = async (value) => {
    const data = { description: value };
    const dataJson = JSON.stringify(data);
    const res = await fetch('http://localhost:8000/api/create', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: dataJson,
    });
    console.log(res.status);
    return null;
};