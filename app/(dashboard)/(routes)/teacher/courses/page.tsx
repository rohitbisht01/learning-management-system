import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function CoursesPage() {
  return (
    <div className="p-6">
      <Link href={"/teacher/create"}>
        <Button variant="default">New Course</Button>
      </Link>
    </div>
  );
}
