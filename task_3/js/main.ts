/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert row and get new row ID
const newRowID: RowID = CRUD.insertRow(row);
console.log('Inserted row:', newRowID);

// Create updated row with age
const updatedRow: RowElement = { 
  ...row, 
  age: 23 
};

// Update row
CRUD.updateRow(newRowID, updatedRow);

// Delete row
CRUD.deleteRow(newRowID);