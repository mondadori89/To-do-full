let apiURL = '';
if (process.env.NODE_ENV === 'production') {
	apiURL = 'https://to-do-full.herokuapp.com/api';
} else {
    apiURL = 'http://localhost:8000/api';
}

export const fetchToDos = async () => {
    const res = await fetch(`${apiURL}/all`);
    const dataFetched = res.json();
    return dataFetched;
};

export const postToDo = async (newTodo) => {
    const data = { 
        id: newTodo.id,
        description: newTodo.description,
        status: newTodo.status
    };
    const dataJson = JSON.stringify(data);
    const res = await fetch(`${apiURL}/create`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: dataJson,
    });
    console.log(res.status);
    return null;
};

export const deleteToDo = async (id) => {
    const res = await fetch(`${apiURL}/remove/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
        },
    });
    console.log(res.status);
    return null;
};

export const checkToDoStatus = async (id) => {
    const res = await fetch(`${apiURL}/updateStatus/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
    });
    console.log(res.status);
    return null;
}

export const fetchToDo = async (id) => {
    const res = await fetch(`${apiURL}/${id}`);
    const dataFetched = res.json();
    return dataFetched;
}