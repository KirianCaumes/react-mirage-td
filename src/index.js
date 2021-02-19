import { ApiClient, ApiProvider } from 'jsonapi-react'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import reportWebVitals from './reportWebVitals'
import { makeServer } from "./server"

makeServer({ environment: process.env.NODE_ENV })

const client = new ApiClient({
  url: '/api',
  schema: {
    users: {
      type: "users",
      properties: {
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        },
        "email": {
          "type": "string"
        }
      }
    }
  }

})


ReactDOM.render(
  <ApiProvider client={client}>
    <App />
  </ApiProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
