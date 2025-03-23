import { useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { updateUserStart, updateUserSuccess, updateUserFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure, signOut   } from "../redux/user/userSlice"

const Profile = () => {
  const fileRef = useRef(null)
  const dispatch = useDispatch();
  const [image, setImage] = useState(undefined)
  const [formData, setFormData] = useState();
  const [showDeletePopup, setShowDeletePopup] = useState(false);
   const { currentUser, loading, error } = useSelector((state) => state.user);
  const [ updateSuccess, setUpdateSuccess ] = useState(false)
  // useEffect(() => {
  //   if (image) {
  //     handleFileUpload(image);
  //   }
  // }, [image]);
  
  // const handleFileUpload = async (image) => {
  //   console.log(image)
  // }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });

  };

  const handleSubmit = async (e) => {
    dispatch(updateUserStart());
    e.preventDefault()
    try {
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data =  await res.json();
      console.log(data)
      if (data.success === false) {
        dispatch(updateUserFailure(data));
      }
      dispatch(updateUserSuccess(data))
      setUpdateSuccess(true)
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  }

  const userDelete = async (e) => {
    try {
      dispatch(deleteUserStart)
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data))
        return 
      } 
      dispatch(deleteUserSuccess(data))
      
    } catch(error) {
      dispatch(deleteUserFailure(error))
    }
  }


  const userSignout = async () => {
      try {
        const res = await fetch('/api/auth/signout')
        dispatch(signOut())
      } catch(error) {
        console.log(error)
      }
  }


  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };

  const confirmDelete = () => {
    setShowDeletePopup(false);
    userDelete();
  };

  const cancelDelete = () => {
    setShowDeletePopup(false);
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-white font-semibold text-center text-3xl my-4'>Profile</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
        {/* <input type="file" ref={fileRef} hidden accept="image/*"
        onChange={(e)=> setImage(e.target.files[0])}
        /> */}
        <img 
        src={ currentUser.profilePicture } 
        alt="profile" 
        className="w-23 h-23 self-center cursor-pointer rounded-full object-cover"
        // onClick={() => fileRef.current.click()}
        />

        <input defaultValue={currentUser.username}
         type="text"
          id="username"
           placeholder="Username"
            className="p-3 bg-slate-100"
            onChange={handleChange}
            />
        <input defaultValue={currentUser.email} 
        type="email" 
        id="email" 
        placeholder="Email" 
        className="p-3 bg-slate-100" 
        onChange={handleChange}
        />
        <input defaultValue={currentUser.password} 
        type="password" 
        id="password" 
        placeholder="password" 
        className="p-3 bg-slate-100" 
        onChange={handleChange}
        />
        <button className="bg-slate-600 p-2 rounded hover:opacity-95 disabled:opacity-80 uppercase font-semibold ">
          { loading ? 'Loading...':  'Update  ' }
        </button>
      </form> 
        <p className="text-red-700 mt-2 cursor-pointer">{error && 'Something went Wrong!'}</p>
        <p className="text-green-500 cursor-pointer">{updateSuccess && 'User Update Successfully'}</p>
      <div className="flex justify-between mt-5">
        <span onClick={handleDeleteClick} className="text-red-600 cursor-pointer">Delete Account</span>
        <span onClick={userSignout} className="text-red-600 cursor-pointer">Sign Out</span>
      </div>

      {/* Popup shows when showDeletePopup is true */}
      {showDeletePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded shadow-lg">
            <p className="text-lg mb-4">
              This will delete your account permanently!
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={confirmDelete}
                className="bg-red-600 text-white p-2 rounded hover:opacity-90"
              >
                Yes
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-300 p-2 rounded hover:opacity-90"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Profile