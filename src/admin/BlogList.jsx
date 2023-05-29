import React, { useEffect } from "react";
import { Card } from "../components/ui/Design";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/reducer/auth/authSlice";
import { deleteBlog, getAllBlog } from "../redux/reducer/blogSlice";
import { toast } from "react-toastify";
const BlogList = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  const { blogs, isError, message } = useSelector((state) => state.blog);

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getAllBlog());
    }

    if (isError) {
      toast.error(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  const handleDelete = async (e, id) => {
    const result = window.confirm("are you sure you want to delete");
    if (result) {
      await dispatch(deleteBlog(id));
    }
    await dispatch(getAllBlog());
  };

  return (
    <>
      <Card>
        <section className="relative overflow-x-auto">
          {/* {isLoading && <Loader />} */}
          {blogs?.length === 0 ? (
            <h1>No Blogs Found!</h1>
          ) : (
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, index) => (
                  <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{blog.title?.slice(0, 80)}</td>
                    <td className="px-6 py-4">{blog?.image ? <img src={blog.image.filePath} alt={blog.image.filename} className="object-cover w-14 h-10 rounded-lg" /> : <span>No Image</span>}</td>
                    <td className="px-6 py-4 flex justify-between items-center">
                      <button onClick={(e) => handleDelete(e, blog._id)}>
                        <RiDeleteBin6Line size={20} className=" text-red-500" />
                      </button>
                      <NavLink to={`/edit-about/${blog._id}`}>
                        <BiEditAlt size={20} className=" text-green-500" />
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </Card>
    </>
  );
};

export default BlogList;
