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

  const confirm = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 365 });
    setVisible(false);
  };

  if (!visible) {
    return null; // Don't render the banner if cookies have been accepted
  }

  return (
    <Dialog open onOpenChange={confirm}>
      <DialogContent className="space-y-4 rounded-xl">
        <DialogHeader className="space-y-4 !text-center">
          <DialogTitle>Welcome to my website 😊</DialogTitle>
          <DialogDescription>
            This website uses Vercel Web Analytics to understand traffic and
            improve user experience. No personally identifiable information is
            collected.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex !justify-center">
          <Button onClick={confirm}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookiesBanner;
