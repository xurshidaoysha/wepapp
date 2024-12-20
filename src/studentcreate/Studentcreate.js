import React, { useState } from 'react';
import axios from 'axios';

const CreateStudent = () => {
    const [studentData, setStudentData] = useState({
        fullName: '',
        age: '',
        phone: '',
        pincode: ''
    });

    const handleChange = (e) => {
        setStudentData({
            ...studentData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/students', studentData);
            alert('Student muvaffaqiyatli yaratildi');
        } catch (error) {
            console.error('Xatolik:', error);
            alert('Student yaratishda xatolik yuz berdi');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="fullName"
                placeholder="Ism"
                value={studentData.fullName}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="age"
                placeholder="Yosh"
                value={studentData.age}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="phone"
                placeholder="Telefon"
                value={studentData.phone}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="pincode"
                placeholder="PIN-kod"
                value={studentData.pincode}
                onChange={handleChange}
                required
            />
            <button type="submit">Student yaratish</button>
        </form>
    );
};

export default CreateStudent;
