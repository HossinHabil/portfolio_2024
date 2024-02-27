"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const CookiesBanner = () => {
  const [visible, setVisible] = useState(!Cookies.get("cookiesAccepted"));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const acceptCookies = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 365 });
    setVisible(false);
  };

  const declineCookies = () => {
    setVisible(false);
  };

  if (!visible) {
    return null; // Don't render the banner if cookies have been accepted
  }

  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome to my website 😊</DialogTitle>
          <DialogDescription>
            This website uses cookies to improve user experience.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-between">
          <Button onClick={acceptCookies}>Accept</Button>
          <Button onClick={declineCookies}>Decline</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookiesBanner;
