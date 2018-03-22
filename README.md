# Dependencies

- sqlite3
- node
- npm

# Getting Started

###### Install npm dependencies
`npm install`

###### Run the node server
`node app.js`

###### Viewing the application in your browser
`http://localhost:8000`

# Schema

## Customers

- id (integer)
- name (string)
- address (string)
- phone (string)


## Products

- id (integer)
- name (string)
- price (decimal)

## Invoices

- id (integer)
- customer_id (integer)
- discount (decimal)
- total (decimal)

## InvoiceItems

- id (integer)
- invoice_id (integer)
- product_id (integer)
- quantity (decimal)


# Resources

## Customers
```
GET|POST          /api/customers
GET|PUT|DELETE    /api/customers/{id}
```

## Products
```
GET|POST          /api/products
GET|PUT|DELETE    /api/products/{id}
```
## Invoices
```
GET|POST          /api/invoices
GET|PUT|DELETE    /api/invoices/{id}
```

## InvoiceItems
```
GET|POST          /api/invoices/{id}/items
GET|PUT|DELETE    /api/invoices/{invoice_id}/items/{id}
```

#Client side

##Invoice form
Since our products do not have image or description, I've decided to use simple table to browse all the products.
It is easy to add pagination in the future if necessary (when API gets more robust)
I've decided not to remove spinner arrows for amount control (just didn't want to spend time on that, could be removed with CSS)


I didn't spent a lot of efforts on visual part, so markup is not ideal for now.
Also there is no validation for the input fields here. This could be done later if necessary.
Right now there is no fields that can be used in an incorrect way (at least at first sight)   

 


       
