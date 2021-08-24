const App = () => {
    const [users, setUsers] = useState([])

    return(
        <TransactionForm
        users={ users }
        setUsers= { setUsers }
        />
    )
}

const TransactionForm = (props) => {
    return (
        <Form
        users= {users}
        setUsers={
            ()=>{
                console.log('this is call within transaction form')
                setUsers(users)
            }
        }
        />
    )
}

