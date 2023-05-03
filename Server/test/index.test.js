const app = require('../src/app');
const session = require('supertest');
const request = session(app)

const character = {
    id: '2507',
    name: 'Julian',
    species: 'Human',
    gender: 'Male',
    status: 'Alive',
    origin: {
        name: 'Earth'
    },
    image: 'image.jpg'
}

describe('Test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            const response = await request.get('/rickandmorty/character/2')
            // console.log(response);
            expect(response.statusCode).toBe(200)
        }
        /* async () => {
            await request.get('/rickandmorty/character/1').expect(200);
        }*/
        )

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await request.get('/rickandmorty/character/1')
            for(const prop in character){
                expect(response.body).toHaveProperty(prop)
            }

        })

        it('Responde con status: 500', async () => {
            const response = await request.get('/rickandmorty/character/J1225s')
            // console.log(response);
            expect(response.statusCode).toBe(500)
        })
    })

    describe("GET /rickandmorty/login", () => {
        it('Debe obtener {access: true} si la información de login es correcta', async () => {
            const response = await request.get('/rickandmorty/login/?email=julian.serante@gmail.com&password=pass2000')
            //console.log(response.text)
            expect(response.text).toEqual('{"access":true}')  
        })

        it('Debe obtener {access: false} si la información de login no es correcta', async () => {
            const response = await request.get('/rickandmorty/login/?email=pepito&password=1234')
            console.log(response.text)
            expect(response.text).toEqual('{"access":false}')  
        })
    })

    describe("POST /rickandmorty/fav", () => {
        it('Lo enviado por body debe ser devuelto en un arreglo', async () => {
            
            const response = await request.post('/rickandmorty/fav').send(character);
            expect(response.body).toContainEqual(character);
        })

        it('Al enviar un nuevo elemento en el body debe de volver un array con el elemento nuevo y los existentes', async () => {
            character.id = 2000;
            character.name = 'Agustín';
            const response = await request.post('/rickandmorty/fav').send(character);
            expect(response.body.length).toBe(2)
        })
    })

    describe("DELETE /rickandmorty/fav/:id", () => {
        it('Si el ID solicitado no existe, debería retornar un arreglo con todos los favoritos', async () => {
            const response = await request.delete('/rickandmorty/fav/2');
            // console.log(response.body);
            expect(response.body.length).toBe(2)
        })

        it('Si el ID enviado existe debería eliminarlo de favoritos', async () => {
            const response = await request.delete('/rickandmorty/fav/2000');
            // console.log(response.body);
            expect(response.body.length).toBe(1)
        })
    })
})

