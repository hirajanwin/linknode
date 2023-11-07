"use client";

import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useData } from "@/lib/context/LinkContext";
import DemoData from "@/components/buttons/DemoData";

interface ProfileFormProps {}

type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

const ProfileForm: FC<ProfileFormProps> = () => {
  const { data, updateProfileInfo } = useData();

  const handleInputChange = (event: InputChangeEvent) => {
    const { name, value } = event.target;
    updateProfileInfo(name, value);
  };

  return (
    <Card className="w-full">
      <CardHeader className="space-y-1 grid md:grid-cols-2 gap-2 align-center items-center">
        <CardTitle className="text-2xl">Bio.New</CardTitle>

        <DemoData />
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid md:grid-cols-2 gap-2">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="n"
              type="text"
              placeholder="John Doe"
              value={data.n}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="Profile-url">Profile Picture Url</Label>
            <Input
              id="Profile-url"
              name="i"
              type="url"
              placeholder="https://example.com/pic.png"
              value={data.i}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">About yourself</Label>
          <Textarea
            id="description"
            name="d"
            placeholder="type something here..."
            value={data.d}
            onChange={handleInputChange}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
