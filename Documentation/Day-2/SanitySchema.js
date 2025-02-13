// user schema
export const userSchema = {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
      { name: 'userId', type: 'string', title: 'User ID' }, // Primary Key
      { name: 'username', type: 'string', title: 'Username' },
      { name: 'email', type: 'string', title: 'Email' },
      { name: 'password', type: 'string', title: 'Password' },
      {
        name: 'role',
        type: 'string',
        title: 'Role',
        options: {
          list: [
            { title: 'Admin', value: 'admin' },
            { title: 'Customer', value: 'customer' },
            { title: 'Visitor', value: 'visitor' },
          ],
        },
      },
      { name: 'createdAt', type: 'datetime', title: 'Created At' },
      { name: 'updatedAt', type: 'datetime', title: 'Updated At' },
    ],
  };


//Product schema
export const productSchema = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      { name: 'productId', type: 'string', title: 'Product ID' }, // Primary Key
      { name: 'name', type: 'string', title: 'Product Name' },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'stock', type: 'number', title: 'Stock Level' },
      { name: 'category', type: 'string', title: 'Category' },
    //   {
    //     name: 'userId',
    //     type: 'reference',
    //     title: 'User ID',
    //     to: [{ type: 'user' }], // Foreign Key to User
    //   },
    ],
  };
  

//Order schema
export const orderSchema = {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      { name: 'orderId', type: 'string', title: 'Order ID' }, // Primary Key
    //   {
    //     name: 'userId',
    //     type: 'reference',
    //     title: 'User ID',
    //     to: [{ type: 'user' }], // Foreign Key to User
    //   },
      {
        name: 'customerId',
        type: 'reference',
        title: 'custome ID',
        to: [{ type: 'customer' }], // Foreign Key to User
      },
      {
        name: 'productId',
        type: 'reference',
        title: 'Product ID',
        to: [{ type: 'product' }], // Foreign Key to Product
      },
      { name: 'productDetail', type: 'text', title: 'Product Detail' },
      { name: 'status', type: 'string', title: 'Order Status' },
      { name: 'quantity', type: 'string', title: 'Product Quantity' },
      { name: 'totalPrice', type: 'number', title: 'Total Price' },
    ],
  };


    //Customer schema
    export const customerSchema = {
        name: 'customer',
        type: 'document',
        title: 'Customer',
        fields: [
          { name: 'customerId', type: 'string', title: 'Customer ID' }, // Primary Key
          {
            name: 'userId',
            type: 'reference',
            title: 'User ID',
            to: [{ type: 'user' }], // Foreign Key to User
          },
          { name: 'contactInfo', type: 'string', title: 'Contact Info' },
          { name: 'email', type: 'string', title: 'Email' },
          { name: 'address', type: 'text', title: 'Address' },
          {
            name: 'orderHistory',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'order' }] }],
            title: 'Order History',
          },
        ],
      };
  
      
  

//Shipment schema
  export const shipmentSchema = {
    name: 'shipment',
    type: 'document',
    title: 'Shipment',
    fields: [
      { name: 'shipmentId', type: 'string', title: 'Shipment ID' }, // Primary Key
      {
        name: 'orderId',
        type: 'reference',
        title: 'Order ID',
        to: [{ type: 'order' }], // Foreign Key to Order
      },
      { name: 'status', type: 'string', title: 'Shipment Status' },
      { name: 'deliveryDate', type: 'datetime', title: 'Delivery Date' },
      {
        name: 'zoneId',
        type: 'reference',
        title: 'Zone ID',
        to: [{ type: 'deliveryZone' }], // Foreign Key to Delivery Zone
      },
    ],
  };


//Delivery Zone schema
  export const deliverySchema = {
    name: 'deliveryZone',
    type: 'document',
    title: 'Delivery Zone',
    fields: [
      { name: 'zoneId', type: 'string', title: 'Zone ID' }, // Primary Key
      { name: 'zoneName', type: 'string', title: 'Zone Name' },
      { name: 'customerArea', type: 'text', title: 'Customer Area' },
      {
        name: 'assignedDeliverers',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'user' }] }],
        title: 'Assigned Deliverers',
      },
    ],
  };
  



  