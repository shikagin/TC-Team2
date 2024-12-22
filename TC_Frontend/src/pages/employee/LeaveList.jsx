import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import CreateRequest from '../../components/CreateRequest';

function LeaveList() {
  const [isAddRequestVisible, setIsAddRequestVisible] = useState(false);

  const toggleAddRequest = () => {
    setIsAddRequestVisible(!isAddRequestVisible);
  };

  const handleSave = (leaveData) => {
    console.log("Leave Request Data:", leaveData);
    // Add logic to handle the leave request data
  };

  // Generate a list of 10 requests with different statuses
  const requests = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Request ${index + 1}`,
    status: index % 3 === 0 ? 'Accepted' : index % 3 === 1 ? 'Declined' : 'Being Processed',
    date: `12/${index + 1}/2024`,
  }));

  return (
    <div className="bg-[#F5F5F5] h-screen pl-72 pt-24 pr-14 pb-10">
      <div className="bg-white rounded-2xl h-full p-10 flex flex-col w-full">
        {/* Title and Add Button */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-bold text-2xl font-roboto">My Requests</p>
          <button
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center"
            onClick={toggleAddRequest}
          >
            <BiPlus size={28} />
          </button>
        </div>

        {isAddRequestVisible && (
          <CreateRequest
            isVisible={isAddRequestVisible}
            onClose={() => toggleAddRequest(null)}
          />
        )}

        <div className="overflow-y-auto h-[calc(100%-8rem)]">
          {/* Header Row */}
          <div className="flex flex-row items-center justify-between py-4 px-6 rounded-xl bg-gray-200 font-bold text-gray-700">
            <p className="flex-1 text-center">Request</p>
            <p className="flex-1 text-center">Date</p>
            <p className="flex-1 text-center">Status</p>
          </div>

          {/* Request Rows */}
          {requests.map((request) => (
            <div
              key={request.id}
              className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-300 bg-white"
            >
              <p className="flex-1 text-center font-medium">{request.title}</p>
              <p className="flex-1 text-center">{request.date}</p>
              <p
                className="flex-1 text-center"
                style={{
                  color:
                    request.status === 'Accepted'
                      ? 'green'
                      : request.status === 'Declined'
                      ? 'red'
                      : 'black',
                }}
              >
                {request.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeaveList;
