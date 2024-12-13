import { fetchUsersAction } from "@/actions";
import AddNewClient from "@/components/add-new-user/AddNewClient";
import UserCard from "@/components/user-card/UserCard";


export default async function Home() {

  const getListOfUsers = await fetchUsersAction();
  console.log(getListOfUsers);
  

  return (
    <div className="p-20 max-w-6xl" >
      <div className="flex justify-between">
        <h1>User Management</h1>
        <AddNewClient />
        
      </div>
      <div className="mt-6">
        {
          getListOfUsers && getListOfUsers.data && getListOfUsers.data.length > 0 ? getListOfUsers.data.map(user => <UserCard key={user.id} user={user} />)
          : <h3>No users found</h3>
        }
        
      </div>
    </div>
  );
}
