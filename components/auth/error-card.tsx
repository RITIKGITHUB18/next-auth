// import { Header } from "@/components/auth/header";
// import { BackButton } from "@/components/auth/back-button";

// import { Card, CardFooter, CardHeader } from "@/components/ui/card";

// export const ErrorCard = () => {
//   return (
//     <Card className="w-[400px] shadow-md">
//       <CardHeader>
//         <Header label="Oops! Something went wrong!" />
//       </CardHeader>

//       <CardFooter>
//         <BackButton label="Back To Login" href="/auth/login" />
//       </CardFooter>
//     </Card>
//   );
// };

//! or

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "@/components/auth/card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center  items-center">
        <ExclamationTriangleIcon className="text-destructive size-8" />
      </div>
    </CardWrapper>
  );
};
