import { useState, useEffect } from 'react';

const UserData = () => {
    const [user, serUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((Response) => Response.json())
            .then((data) => {
                setUser(data);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (loading) return <p>Loading user data...</p>;
    return (
        <div style={{ border: '2px solid red', padding: '20px', margin: '20px' }}>
            <h3>Component 3: User Data (API)</h3>
            {user && (
                <div>
                    <p><strong>Name</strong>{user.name}</p>
                    <p><strong>Email</strong>{user.email}</p>
                    <p><strong>City</strong>{user.address.city}</p>
                </div>
            )}
        </div>
    );
};

export default UserData;