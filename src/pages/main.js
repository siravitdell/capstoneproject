import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div className="flex flex-col h-screen bg-gray-200">
            {/* Header */}
            <header className="bg-green-700 h-16 flex items-center justify-between px-4">
                <h1 className="text-white text-lg font-bold">Little Lemon</h1>
                <nav>
                    <ul className="flex space-x-4 text-white">
                        <Link to="/">
                        <li>Home</li>
                        </Link>
                        <Link to="/booking">
                        <li>Booking</li>
                        </Link>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-4">
                <h2 className="text-3xl font-bold mb-4 mt-4">Welcome to Little Lemon</h2>
                <p className="text-lg">
                    We sell the freshest lemons in town. Check out our selection below:
                </p>
                <section className="container mx-auto my-8 px-4 py-8 bg-white rounded-lg shadow-lg">
                    <h3 className="text-3xl font-bold mb-4">Book Your Table Now</h3>
                    <p className="text-lg text-gray-700 mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu rhoncus
                        dolor. Duis in purus interdum, eleifend est a, malesuada nisl.
                    </p>
                    <Link
                        to="/booking"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg"
                    >
                        Book Now
                    </Link>
                </section>

                {/* Lemon Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                    <div className="bg-white rounded-lg p-4 shadow">
                        <h3 className="text-lg font-bold mb-2">Meyer Lemons</h3>
                        <img src={require("../assets/images/lemon.jpg")} alt="Lime Lemons" className="mb-2" />
                        <p className="text-gray-700">$3.99 per pound</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow">
                        <h3 className="text-lg font-bold mb-2">Eureka Lemons</h3>
                        <img src={require("../assets/images/lemon.jpg")} alt="Lime Lemons" className="mb-2" />
                        <p className="text-gray-700">$2.99 per pound</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow">
                        <h3 className="text-lg font-bold mb-2">Lisbon Lemons</h3>
                        <img src={require("../assets/images/lemon.jpg")} alt="Lime Lemons" className="mb-2" />
                        <p className="text-gray-700">$2.99 per pound</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow">
                        <h3 className="text-lg font-bold mb-2">Lime Lemons</h3>
                        <img src={require("../assets/images/lemon.jpg")} alt="Lime Lemons" className="mb-2" />
                        <p className="text-gray-700">$4.99 per pound</p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-green-700 h-16 flex items-center justify-center">
                <p className="text-white">&copy; 2023 Little Lemon. All rights reserved.</p>
            </footer>
        </div>
    );
}
