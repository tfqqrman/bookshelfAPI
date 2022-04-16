const {
  addBooksHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdhandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bId}',
    handler: editBookByIdhandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
