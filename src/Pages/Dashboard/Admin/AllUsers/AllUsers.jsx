import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data)
        })
    }
    return (
      <div className="w-[800px] mx-auto">
        <h2 className="text-4xl text-center mt-16  font-bold italic ...">
          {" "}
          <span className="text-[#f31312]">----</span>All Users{" "}
          <span className="text-[#f31312]">----</span>
        </h2>
        <div className="overflow-x-auto mt-16">
          <table className="table bg-[#faf5f5]">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Roll</th>
                <th>Send Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>

                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>User</td>
                  <td>
                    <button onClick={() => handleMakeAdmin(user)} className="btn">Send Email</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllUsers;