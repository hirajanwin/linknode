"use client";

import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Check, Copy, LinkIcon, Loader2 } from "lucide-react";
import { Input } from "../ui/input";
import { ShortWithBitly } from "@/actions/ShortWithBitly";
import { cn, encodeData } from "@/lib/utils";
import { useData } from "@/lib/context/LinkContext";
import Link from "next/link";
import { toast } from "sonner";

export default function ShortenerButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">
          <LinkIcon className="mr-2 h-4 w-4" />
          Shortener
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]" showClose={false}>
        <CardHeader className="px-0">
          <CardTitle>Dub.co</CardTitle>
          <CardDescription>
            Shorten your link with dub.co and get full control over it.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 p-0">
          <Link
            target="_blank"
            href="https://dub.co/"
            className={cn(buttonVariants(), "w-full")}
          >
            Visit website
          </Link>
        </CardContent>
      </DialogContent>
    </Dialog>
  );
}
