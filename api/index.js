fetch("/api/data.json")
    .then(response => response.json())
    .then(data =>console.log(data))
