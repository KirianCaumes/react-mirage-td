import { createServer, Model, JSONAPISerializer } from "miragejs"
// import Schema from "miragejs/orm/schema";
// import { Server } from "miragejs/server";

// /**
//  * @typedef {object} User
//  * @property {string} firstName
//  * @property {string} lastName
//  * @property {string} email
//  */

// /** @type {import("miragejs/-types").ModelDefinition<User>}} */
// const UserModel = Model.extend({})

// /**
//  * @typedef {object} AppRegistryData
//  * @property {UserModel} user
//  */
// /**
//  * @typedef {import("miragejs/-types").Registry<AppRegistryData, {}>} AppRegistry
//  */

// /**
//  * @typedef {Schema<AppRegistry>} AppSchema
//  */
//https://github.com/miragejs/miragejs/issues/460

export function makeServer({ environment = "test" } = {}) {
    // /** @type {Server<AppRegistry>} */
    const server = createServer({
        environment,
        serializers: {
            application: JSONAPISerializer
        },
        models: {
            user: Model,
            compagny: Model
        },
        seeds(server) {
            // @ts-ignore
            server.create("user", { firstName: "test", lastName: "test", email: "kiki@mail.com" })
            // @ts-ignore
            server.create("user", { firstName: "test1", lastName: "test1", email: "kiki1@mail.com" })
            // @ts-ignore
            server.create("compagny", { name: "Toto" })
        },
        routes() {
            this.namespace = "api"
            this.get("/users", schema => {
                // @ts-ignore
                return schema.users.all()
            })
            this.get("/users/:id", (schema, request) => {
                // @ts-ignore
                return schema.users.findBy({ id: request.params.id })
            })
            // this.patch("/users/:id", (schema, request) => {
            //     const attrs = JSON.parse(request.requestBody)
            //     // @ts-ignore
            //     return schema.users.create(attrs);
            // })
            // this.put("/users/:id", (schema, request) => {
            //     const attrs = JSON.parse(request.requestBody)
            //     // @ts-ignore
            //     return schema.users.create(attrs);
            // })
            this.post("/users", (schema, request) => {
                const attrs = JSON.parse(request.requestBody)
                // @ts-ignore
                return schema.users.create(attrs);
            })
            this.delete("/users/:id", (schema, request) => {
                // @ts-ignore
                return schema.users.find(request.params.id).destroy()
            });

            this.get("/companies", schema => {
                // @ts-ignore
                return schema.companies.all()
            })

            this.post("/users")
            this.post("/companies")
        }
    })

    return server
}