import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

const AuthButton = () => {
  // add different auth states
  return (
    <Button
      variant="outline"
      className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-950/20 border-blue-500 rounded-full shadow-none"
    >
      <UserCircleIcon />
      Sign In
    </Button>
  );
};

export default AuthButton;
