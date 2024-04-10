"use client";

import React, { useState } from "react";
import ListedUsers from "./userDetails";

export default function AddUsers(): JSX.Element {
  const [users, setUsers] = useState<string[]>([]);
  const [usernames, setUsernames] = useState<string[]>([]);

  function handleAddUser() {
    const userInput = document.querySelector<HTMLInputElement>("#user")!.value;
    const usernameInput =
      document.querySelector<HTMLInputElement>("#username")!.value;

    // If an edit is in progress, update the existing user

    // Add the input values to the arrays
    setUsers((prevUsers) => [...prevUsers, userInput]);
    setUsernames((prevUsernames) => [...prevUsernames, usernameInput]);

    // Clear input fields
    document.querySelector<HTMLInputElement>("#user")!.value = "";
    document.querySelector<HTMLInputElement>("#username")!.value = "";
  }

  function handleEditUser(index: number, editedUser: string) {
    // Set the index of the user to edit and update the user's data
    const newUsers = [...users];
    newUsers[index] = editedUser;
    setUsers(newUsers);
  }

  function handleDeleteUser(index: number) {
    // Create copies of the arrays and remove the user at the specified index
    const newUsers = [...users];
    newUsers.splice(index, 1);
    const newUsernames = [...usernames];
    newUsernames.splice(index, 1);

    // Update the state with the new arrays
    setUsers(newUsers);
    setUsernames(newUsernames);
  }

  return (
    <div className="w-full min-h-80  border-2 border-white mx-auto my-10  flex flex-col item-center justify-evenly">
      <h3 className="display-block text-center text-2xl mt-5">
        Add New User to the Users List
      </h3>
      <div className=" w-2/3 min-h-5 mx-auto h-20 border-2 border-white mt-5 flex justify-evenly items-center">
        <input
          type="text"
          name="user"
          placeholder="User"
          id="user"
          className="border-2 border-white  w-60 h-10 text-black"
        />
        <input
          type="text"
          name="username"
          placeholder="UserName"
          id="username"
          className="border-2 border-white  w-60 h-10 text-black"
        />
        <button
          type="button"
          onClick={handleAddUser}
          className="border-2 border-white  w-20 h-10"
        >
          Add User
        </button>
      </div>
      <ListedUsers
        users={users}
        usernames={usernames}
        onDeleteUser={handleDeleteUser}
        onEditUser={handleEditUser} // Ensure handleEditUser accepts two arguments
      />
    </div>
  );
}
