


//accesing book name accordings to name 
import React, { useState } from 'react';

const Accessbooks = () => {
  const [data, setData] = useState([
    { name: 'aniket', books: ['harrypotter', 'magic'] },
    { name: 'vijay', books: ['focus', 'greeneffect'] },
  ]);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [getName, setGetName] = useState('');

  const findBooks = (element) => {
    const foundPerson = data.find(item => item.name ===element);

    if (foundPerson) {
      setSelectedBooks(foundPerson.books);
    } else {
      setSelectedBooks([]);
    }
  };

  return (
    <div>
      {selectedBooks.length > 0 && (
        <div>
          <h1>The books names are:</h1>
          <ul>
            {selectedBooks.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        </div>
      )}

      <input
        placeholder="Enter name to get books"
        onChange={(e) => setGetName(e.target.value)}
      />
      <button onClick={()=>findBooks(getName)}>Submit</button>
    </div>
  );
};

export default Accessbooks;
