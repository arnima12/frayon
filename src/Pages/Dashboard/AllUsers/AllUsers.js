import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AllUsers = () => {
    const {setUser} = useContext(AuthContext)
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })
    
    const handleMakeAdmin = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:'PUT',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
            })
            .then(res=> res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    toast.success('Make Admin successful')

                    refetch();
                }
                 console.log(data)   
                }
            )

    }
    const deleteUser = id =>{
        fetch(`http://localhost:5000/user/admin/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
            if(data.deletedCount>0){
               
                const remainingUser = users.filter( user => user._id !== id)
                setUser(remainingUser);
                refetch()
            }
        })
    }
    return (
        <div>
            <h2 className="text-4xl text-center my-8">All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
        
      </tr>
    </thead>
    <tbody>
      
      {
        users.map((user,i)=><tr key={user._id}>
            
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user?.role !== 'admin' && ( <button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-xs btn-primary">Make admin</button>)}</td>
        <td><button onClick={()=>deleteUser(user._id)} className="btn btn-xs btn-error">Delete</button></td>
      
        </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;