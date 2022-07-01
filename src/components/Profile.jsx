import React, { useEffect, useState } from "react";
import { account } from "../appwrite/appwriteConfig";
import { Link, useNavigate } from "react-router-dom";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function Profile() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();

  // get user data
  useEffect(() => {
    const getData = account.get();

    getData.then(
      function (response) {
        setUserDetails(response);
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  }, []);

  const handleLogOut = async () => {
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userDetails ? (
        <>
          <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
            <div>
              <p className="text-xl">Hello {userDetails.name}</p>
            </div>
            <div>
              <button
                className="bg-red-400 text-white p-1 rounded-md"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          </div>
          {/* TODO FORM */}
          <TodoForm />
          {/* TODOS BOX */}
          <Todos />
        </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link to="/">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>
  );
}

export default Profile;
