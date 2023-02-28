// We pluck off the "users" property of the props object using destructuring assignment
// This prevents us from having to type `props.users` each time we want to refer to the users object
const Page2 = ({users})=>{
    return(
        <main className="container">
            <div>
                <h1>Hello. Where is the info? Page2</h1>
            </div>
        </main>
   
    )
}

export default Page2;