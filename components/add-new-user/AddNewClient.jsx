"use client";
import { addNewUserAction } from "@/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils";
import { useState } from "react";

function AddNewClient() {
  const [openPopup, setOpenPopup] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserFormInitialState
  );

  console.log(addNewUserFormData);

  function handleSaveBtnValid() {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    );
  }

  async function handleAddNewUserAction() {
    const result = await addNewUserAction(addNewUserFormData);
    console.log(result);
  }

  return (
    <div className="">
      <Button onClick={() => setOpenPopup(true)}>Add new user</Button>
      <Dialog
        open={openPopup}
        onOpenChange={() => {
          setOpenPopup(false);
          setAddNewUserFormData(addNewUserFormInitialState);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add new user</DialogTitle>
          </DialogHeader>

          <form action={handleAddNewUserAction} className="grid gap-4 py-4">
            {addNewUserFormControls.map((controlItem) => (
              <div key={controlItem.name} className="my-2">
                <Label htmlFor={controlItem.name} className="text-right">
                  {controlItem.label}
                </Label>
                <Input
                  id={controlItem.name}
                  name={controlItem.name}
                  placeholder={controlItem.placeholder}
                  type={controlItem.type}
                  value={addNewUserFormData[controlItem.name]}
                  onChange={(e) => {
                    setAddNewUserFormData({
                      ...addNewUserFormData,
                      [controlItem.name]: e.target.value,
                    });
                  }}
                  className="col-span-3"
                />
              </div>
            ))}

            <DialogFooter>
              <Button disabled={!handleSaveBtnValid()} type="submit">
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewClient;
