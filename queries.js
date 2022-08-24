const Pool = require('pg').Pool
const pool = new Pool({
    user: 'mehmet',
    host: '192.168.254.130',
    database: 'crudpractice1',
    password: '932582',
    port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM testtable1 ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM testtable1 WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const createUser = (request, response) => {
    const {
        name,
        email
    } = request.body
    pool.query('INSERT INTO testtable1 (first, last, email, phone, location, hobby) VALUES ($1, $2, $3, $4, $5, $6)', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${result.insertId}`)
    })
}
const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        name,
        email
    } = request.body
    pool.query(
        'UPDATE testtable1 SET first = $1, last = $2, email = $3, phone = $4, location = $5, hobby = $6 WHERE id = $7',
        [first, last, email, phone, location, hobby, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM testtable1 WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}