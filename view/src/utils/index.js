var cors = require('cors');


/* let apiURL = '';
let URL = '';
if (process.env.NODE_ENV === 'production') {
	apiURL = 'https://to-do-full.herokuapp.com/api';
    URL = 'https://to-do-full.herokuapp.com';
} else {
    apiURL = 'http://localhost:8000/api';
    URL = 'http://localhost:8000';
} */


// To dos APIs

export const fetchToDos = async (userId) => {
    console.log('User fetching to dos: ' + userId)
    const res = await fetch(`api/all/${userId}`);
    const dataFetched = res.json();
    return dataFetched;
};

export const postToDo = async (newTodo) => {
    const data = { 
        id: newTodo.id,
        description: newTodo.description,
        status: newTodo.status,
        user_id: newTodo.userId
    };
    const dataJson = JSON.stringify(data);
    const res = await fetch(`api/create`, {
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
    const res = await fetch(`api/remove/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
        },
    });
    console.log(res.status);
    return null;
};

export const checkToDoStatus = async (id) => {
    const res = await fetch(`api/updateStatus/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
    });
    console.log(res.status);
    return null;
};

export const fetchToDo = async (id) => {
    const res = await fetch(`api/${id}`);
    const dataFetched = res.json();
    return dataFetched;
};

export const setListOrderAsync = async (listUserID, newListOrder) => {
    const newListOrderJson = JSON.stringify(newListOrder);
    const res = await fetch(`api/setListOrder/${listUserID}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: newListOrderJson,
    });
    console.log(res.status);
    return null;
};

export const fetchListOrder = async (userId) => {
    console.log('User fetching list: ' + userId)
    const res = await fetch(`api/getListOrder/${userId}`);
    const listOrderFetched = res.json();
    return listOrderFetched;
};


// Login API

export const loginApi = async (email, password) => {
    const data = { 
        email: email,
        password: password
    };
    const dataJson = JSON.stringify(data);
    const res = await fetch(`api/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            withCredentials: true
        },
        body: dataJson,
    });

    console.log(res.status);

    if(res.status !== 200) {
        const message = res.json();
        return message
    }

    const userFetched = res.json();
    return userFetched;
};

export const logoutApi = async () => {
    const res = await fetch(`api/login/logout`, cors(corsOptions), { 
        method: 'GET',
        withCredentials: true,
    });
    const dataFetched = res.json();
    return dataFetched;
};

var corsOptions = {
    origin: [ 'http://localhost:8000', 'http://localhost:8080' ],
    optionsSuccessStatus: 200
}

export const getUser = async () => {
    try {
        const res = await fetch(`api/profile/getuser`, cors(corsOptions), { 
            method: 'GET',
            withCredentials: true,
        });
        const dataFetched = res.json();
        return dataFetched;
    }
    catch (error) {
        console.log('Some error duude: ' + error)
    }
};


// Register API

export const registerApi = async (name, email, password, password2) => {
    const data = { 
        name: name,
        email: email,
        password: password,
        password2: password2
    };
    const dataJson = JSON.stringify(data);
    const res = await fetch(`api/register`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            withCredentials: true
        },
        body: dataJson,
    });

    console.log(res.status);

    if (res.status == 201) {
        console.log(`Register done with Email: ${email} and Password: ${password}`);
    }

    const dataFetched = res.json();
    return dataFetched;
};