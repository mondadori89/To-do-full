export const fetchToDos = async () => {
    const res = await fetch('http://localhost:8000/api/all');
    const dataFetched = res.json();
    return dataFetched;
};