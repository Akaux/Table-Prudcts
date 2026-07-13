# Product Management System

## Overview

This project is a simple product management system developed using pure JavaScript, HTML, and CSS.

The application allows users to create, edit, delete, and manage products through an interactive interface. All information entered by the user is automatically stored locally on the device, allowing the data to remain available even after closing or refreshing the page.

The project was developed to practice CRUD operations, DOM manipulation, object-oriented programming concepts, and client-side data persistence.

---

## Features

### Create Products

Users can add new products by providing:

- Product name
- Price
- Quantity
- Identifier (ID)

After submitting the information, the product is added to the table and saved locally.

---

### View Products

All registered products are displayed in a dynamic table containing:

- Name
- Price
- Quantity
- ID

The table is automatically updated whenever a new action is performed.

---

### Edit Products

Users can modify existing product information.

The system allows updating product data without needing to recreate the product.

---

### Delete Products

Users can remove products from the list.

When a product is deleted, the local storage is updated to keep the saved data synchronized.

---

## Data Storage

This application uses **Local Storage** to save user information directly on the user's device.

The data is converted into JSON format before being stored.

Example:

```json
[
  {
    "name": "Rice",
    "price": 20,
    "quantity": 480,
    "id": 0
  }
]
