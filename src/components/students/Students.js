import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Students = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    // Studentlarni olish
    useEffect(() => {
        axios.get('http://localhost:5000/api/students')
            .then(response => {
                setStudents(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Xatolik:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Yuklanmoqda...</div>;
    }

    return (
        <div>
            <h2>Studentlar Ro'yxati</h2>
            <ul>
                {students.map(student => (
                    <li key={student._id}>
                        {student.fullName} - {student.age} yosh - Telefon: {student.phone} - PIN: {student.pincode}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Students;
