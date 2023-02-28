// We pluck off the "users" property of the props object using destructuring assignment
// This prevents us from having to type `props.users` each time we want to refer to the users object
const Page2 = ({users})=>{
    console.log(users[1])

    return(
        <main className="container">
            <h4>Mapping lists</h4>
            <div>
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Address</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
                        {users.map((user) => (
                            <tr key={user.login.uuid}>
                                <td>{`${user.name.first} ${user.name.last}`}</td>
                                <td>{`${user.location.street.number} ${user.location.street.name} ${user.location.city}, ${user.location.state}, ${user.location.country}`}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
   
    )
}

export default Page2;