const getPersonService = async (id) => {

    const person = await fetch(`http://localhost:3000/people/${id}`);
    return person.json();
};

export { getPersonService };