
 import React,{ useState,useEffect} from "react";
function Boolist() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/books")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setBooks(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <table>
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    
                    <th>
                        Name
                    </th>
                    <th>
                        author
                    </th>
                    <th>
                        publisher
                    </th>
                </tr>
            </thead>
            <tbody>
                {books.map(book =>(
                    <tr key={book.id}>
                    <td>{book.id}

                   </td>
                        <td>{book.title}

                        </td>
                      
                        <td>{book.author}

                    </td>
                    <td>{book.publisher}

</td>
                        
                    </tr>

                ))}
            </tbody>
        </table>
      );
    }
  }
  export default Boolist;