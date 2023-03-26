import React from 'react';
import Form from '../components/form';

function BookingPage() {
    return (
        <div className="bg-white min-h-screen">
            <nav className="bg-green-700 text-white flex justify-center items-center h-16">
                <span className="text-2xl font-bold uppercase">Little Lemon</span>
            </nav>
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
