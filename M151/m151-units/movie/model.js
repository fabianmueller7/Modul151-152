import mysql from "mysql2/promise";

const connection = await mysql.createConnection({ 
    host: "127.0.0.1",   
    user: "vmadmin",   
    password: "sml12345", 
    database: "movie-db", 
});

await connection.connect() ;

export async function getAll() {
    const query = 'SELECT * FROM Movies';
    const [data]  = await connection.query(query);
    return data;
}
async function insert(movie) { TODO }
async function update(movie) { TODO }
export async function get(id) { TODO }
export async function remove(id) {  TODO }
export function save(movie) {  TODO }


/*
function insert(movie) {
    movie.id = getNextId() ;   
    data.push(movie); 
}

function update(movie) {     
    movie.id = parseInt(movie.id, 10);   
    const index = data.findIndex((item)  =>  item.id === movie.id);   
    data[index] = movie;
}

export function get(id) {   
    return Promise.resolve(data.find((movie) =>  movie.id === id)); 
}

export function remove(id) { 
    data = data.filter((movie)  =>  movie.id !== id);   
    return Promise.resolve(); 
} 

export function save(movie) {     
    if(movie.id   ===   "" ) {
        insert(movie);
    } else {
        update(movie);
    }
    return Promise.resolve();
}
*/