import React from "react";
import { useGetOrderByEmailQuery } from "../../redux/features/orders/ordersApi";
import { useAuth } from "../../context/AuthContext";

export default function OrderPage(){
    const { currentUser } = useAuth();

    // Ensure we have a currentUser and email before making the query
    const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser?.email, {
        skip: !currentUser?.email,  // Skip query if no email
    });

    if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    if (isError) {
        return (
            <div>
                <p>Error getting orders data</p>
            </div>
        );
    }

    const ordersPlaced = orders.map((order, index) => (
        <div key={order._id} className="bg-white rounded shadow-lg p-4">
            <div className="border-b mb-4 pb-4"></div>
            <div className="flex gap-2">
                <p>{index + 1}.</p>
                <div className="">
                    <h2 className="font-bold">{order._id}</h2>
                    <p className="text-gray-600">{order.name}</p>
                    <p className="text-gray-600">{order.email}</p>
                    <p className="text-gray-600">{order.phone}</p>
                    <p className="text-gray-600">{order.sumprice}</p>
                    <h3 className="font-semibold mt-2">Address:</h3>
                    <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                    <h3 className="font-semibold mt-2">Products Id:</h3>
                    <ul>
                        {order.productIds.map((id) => 
                                (<li key={id}>{id}</li>)
                            ) 
                        }
                    </ul>
                </div>
            </div>
           

            
        </div>
    ));

    return (
        <div className="px-[20px] md:px-10 lg:px-20 xl:px-[100px]">
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-semibold mb-4">Your Orders</h1>
                {orders.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    ordersPlaced  
                )}
            </div>
        </div>
    );
}
