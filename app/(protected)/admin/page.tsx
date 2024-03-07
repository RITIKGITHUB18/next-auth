// ! here we are using the client side rendering so that we have to use the custom-hooks

/** 
"use client";

import { useCurrentRole } from "@/hooks/use-current-role";

const AdminPage = () => {
  const role = useCurrentRole();

  return <div>Current role:{role}</div>;
};

export default AdminPage;
*/

// ! For client side rendering we have to fetch the data using auth and then bind with the pages
"use client";
import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { FaKey } from "react-icons/fa";
import { toast } from "sonner";

const AdminPage = () => {
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error);
      }

      if (data.success) {
        toast.success(data.success);
      }
    });
  };
  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Allowed API Route!");
      } else {
        toast.error("Forbidden API Route!");
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <p className="flex gap-x-2 items-center justify-center text-2xl font-semibold text-center">
          <FaKey color="black" />
          Admin
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to see this content" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md gap-x-2">
          <p className="text-sm font-medium">Admin-Only API Route</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md gap-x-2">
          <p className="text-sm font-medium">Admin-Only Server Action</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
