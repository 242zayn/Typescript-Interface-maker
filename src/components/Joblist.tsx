"use client";
import { JobDataType } from "@/types/types";
import axios from "axios";
import { it } from "node:test";
import React, { useEffect, useState } from "react";
import TruncatedText from "./TruncatedText";

const Joblist = () => {
  const [data, setData] = useState<JobDataType[]>();
  console.log(data);

  const fethData = async () => {
    const responce = await axios.get("http://localhost:4000/api/user/jobs");
    setData(responce.data);
  };
  useEffect(() => {
    fethData();
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full  border border-gray-300">
          <thead>
            <tr className="">
              <th className="py-3 px-4 border-b text-left">Company Name</th>
              <th className="py-3 px-4 border-b text-left">HR Number</th>
              <th className="py-3 px-4 border-b text-left">HR Email</th>
              <th className="py-3 px-4 border-b text-left">Role</th>
              <th className="py-3 px-4 border-b text-left">Status</th>
              <th className="py-3 px-4 border-b text-left">Dec..</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="py-4 px-4 border-b">{item.companyName}</td>
                  <td className="py-4 px-4 border-b">{item.hrMobile}</td>
                  <td className="py-4 px-4 border-b">{item.hrEmail}</td>
                  <td className="py-4 px-4 border-b">{item.currentStatus}</td>
                  <td className="py-4 px-4 border-b">{item.jobTitle}</td>
                  <td className="py-4 px-4 border-b">
                    <TruncatedText text={item.description} maxLength={100} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Joblist;
