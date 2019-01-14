const sluts = ['Jynx Maze', 'Alexis Texas', 'Tori Black', 'Riley Reid']

// the index is always the second parameter
sluts.forEach(function(name, index) {
    console.log(`${index + 1} - ${name}`)
})

sluts.forEach(name => console.log(name)) // this
const showSluts = sluts => console.log(sluts) // or this
sluts.forEach(showSluts)