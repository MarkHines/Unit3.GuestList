import { useFetch } from "./FetchContext"


const App = () => {
  const {guestList, selectedGuest, setSelectedGuest} = useFetch()
  
  return (
    <>
      {
        !selectedGuest.id ?
        
          <section className="guest-list">
            <h1>Guest List</h1>  
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {
                  guestList.map((guest) => {
                    //console.log(guest)
                    return (
                      <tr key={guest.id} onClick={() => {setSelectedGuest(guest)}}>
                        <td>{guest.name}</td>
                        <td>{guest.email}</td>
                        <td>{guest.phone}</td>
                      </tr>
                    )
                  })
                }
              </tbody> 
            </table>
            <p>Select a guest to see more details</p>
          </section> :
        
          <section className="guest-details">
            <h1>Guest Details</h1>
            <h2>{selectedGuest.name}</h2>
            <ul>
              <li>{selectedGuest.job}</li>
              <li>{selectedGuest.bio}</li>
              <li>{selectedGuest.email}</li>
              <li>{selectedGuest.phone}</li>
            </ul>
            <button onClick={() => {setSelectedGuest({})}}>Back</button>
          </section>
        }
      </>
    );
  }

export default App
