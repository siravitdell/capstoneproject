import React from 'react';
import Form from '../components/form';
import { Link } from 'react-router-dom';

function BookingPage() {
    return (
        <div className="bg-white min-h-screen">
            <header className="bg-green-700 h-16 flex items-center justify-between px-4">
                <h1 className="text-white text-lg font-bold">Little Lemon</h1>
                <nav>
                    <ul className="flex space-x-4 text-white">
                        <ul className="flex space-x-4 text-white">
                            <Link to="/">
                                <li>Home</li>
                            </Link>
                            <Link to="/booking">
                                <li>Booking</li>
                            </Link>
                        </ul>
                    </ul>
                </nav>
            </header>
            <div className="flex justify-center py-6">
                <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-md px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-3xl font-bold text-center mb-6">
                            Book a Table
                        </h2>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingPage;
