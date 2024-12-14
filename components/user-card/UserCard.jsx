"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { deleteUserAction } from "@/actions";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

function UserCard({ user }) {

  const {setCurrentEditedId, setOpenPopup, setAddNewUserFormData} = useContext(UserContext)

  async function handleDelete(userId){
    const result = await deleteUserAction(userId, '/')
  }

  function handleEdit(currentUser){
    setOpenPopup(true);
    setAddNewUserFormData({
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      email: currentUser?.email, 
      address: currentUser?.address
    });
    setCurrentEditedId(currentUser._id)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {user?.firstName} {user?.lastName}
        </CardTitle>
        <CardDescription>{user?.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{user?.address}</p>
      </CardContent>
      <CardFooter className='flex justify-between gap-2'>
        <Button onClick={()=> handleEdit(user)}>Edit</Button>
        <Button onClick={()=> handleDelete(user?._id)}>Delete</Button>
      </CardFooter>
    </Card>
  );
}

export default UserCard;
