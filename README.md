# Dynamic_Table_React

# Installation

```
npm install dynamictable_basic

```

```
yarn add dynamictable_basic

```

# import the package

```
import Tabledata from 'dynamictable_basic'

```

- This component requires two inputs which has to be formated as like this

1. tableData will require the data that has to be placed in the table body.

```
const tableData = [
  {
    Name: "Tesitng",
    Place: "whatever",
  },
];

```

2. columnName will require the data that has to be in the table head. Note : <strong>the key name has to be (field) only </strong> and the value has to <strong> tableData </strong> key names.

```
const columnName = [
  {
    field: "Name",
  },
  {
    field: "Place",
  },
];

```

3. Place both the values like this.

```
<Tabledata tableData={tabledata} columnName={header} />

```
