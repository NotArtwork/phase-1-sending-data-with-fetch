// Add your code here

const fetchDogs =  async () => {
    let req = await fetch('http://localhost:3000/dogs')
    let res = await req.json
    return res
}

const submitData = async (dataObj) => {
    let req = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body:JSON.stringify(dataObj)
    })
}