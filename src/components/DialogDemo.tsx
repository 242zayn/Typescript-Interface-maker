"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function DialogDemo() {
  const [formData, setFormData] = useState({
    companyName: "",
    hrMobile: "",
    hrEmail: "",
    currentStatus: "",
    jobTitle: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const responce = await axios.post(
        "http://localhost:4000/api/user/create",
        formData
      );
      console.log("Form Submited", responce.status);
      if (responce) {
        setFormData({
          companyName: "",
          hrMobile: "",
          hrEmail: "",
          currentStatus: "",
          jobTitle: "",
          description: "",
        });
      }
    } catch (error) {
      console.log("Error", error);
    }

    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Information</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Comp name
              </Label>
              <Input
                id="companyName"
                onChange={handleChange}
                value={formData.companyName}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                HR Number
              </Label>
              <Input
                id="hrMobile"
                onChange={handleChange}
                value={formData.hrMobile}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                HR Email
              </Label>
              <Input
                id="hrEmail"
                onChange={handleChange}
                value={formData.hrEmail}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Status
              </Label>
              <Input
                id="currentStatus"
                value={formData.currentStatus}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Role
              </Label>
              <Input
                id="jobTitle"
                onChange={handleChange}
                value={formData.jobTitle}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Textarea
                value={formData.description}
                id="description"
                onChange={handleChange}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
