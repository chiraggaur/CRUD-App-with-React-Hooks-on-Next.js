import React, { useState } from "react";

export default function ListedUsers({
  users,
  usernames,
  onDeleteUser,
  onEditUser,
}: {
  users: string[];
  usernames: string[];
  onDeleteUser: (index: number) => void;
  onEditUser: (index: number, editedUser: string) => void;
}) {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editedUser, setEditedUser] = useState<string>("");

  function handleEdit(index: number) {
    setEditIndex(index);
    setEditedUser(users[index]);
  }

  function handleSaveEdit(index: number) {
    if (editedUser.trim() !== "") {
      onEditUser(index, editedUser); // Pass the edited user data to the parent component along with the index
      setEditIndex(null);
      setEditedUser("");
    }
  }

  return (
    <div>
      {users.length >= 1 &&
        users.map((user, index) => (
          <div
            key={index}
            className="w-1/3 min-h-30  max-h-40 border-2 border-white mx-auto my-10 flex flex-col item-evenly justify-center"
          >
            <ul>
              <li className="mx-10 py-5 text-xl flex ">
                <p className="mx-10">user is :</p>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editedUser}
                    onChange={(e) => setEditedUser(e.target.value)}
                    className="mx-5 text-black  w-1/3 h-10"
                  />
                ) : (
                  <span className="mx-5">{user}</span>
                )}
              </li>
              <button
                onClick={() =>
                  editIndex === index
                    ? handleSaveEdit(index)
                    : handleEdit(index)
                }
                className="border-2 border-white mx-20  w-20 my-5"
              >
                {editIndex === index ? "Save" : "Edit"}
              </button>
              <button
                onClick={() => onDeleteUser(index)}
                className="border-2 border-white w-20 my-5"
              >
                Delete
              </button>
            </ul>
          </div>
        ))}
    </div>
  );
}
