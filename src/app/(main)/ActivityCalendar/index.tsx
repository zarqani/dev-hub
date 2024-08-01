"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import Calender from "./Calender";
import TypoLogo from "@/components/icons/TypoLogo";

const ActivityCalendar = () => {
  const [username, setUsername] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  // const deferredUsername = useDeferredValue(usernameValue);
  console.log({ usernameValue });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("githubUsername", username);
    setUsernameValue(username);
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("githubUsername");
    if (storedUsername) {
      setUsername(storedUsername);
      setUsernameValue(storedUsername);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <div>
          <TypoLogo className="mx-auto mb-8" />
        </div>
        <h1 className="text-4xl font-bold">GitHub Contributions Calendar</h1>
        <p className="mt-2 text-lg text-gray-600">Enter your GitHub username</p>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center mt-6 space-x-4">
            <Input
              type="text"
              className="w-64"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button type="submit">Show calendar</Button>
          </div>
        </form>
      </div>
      <Calender username={usernameValue} />
    </div>
  );
};

export default ActivityCalendar;
