import { Image, useTheme } from "@aws-amplify/ui-react";

export function Header() {
  const { tokens } = useTheme();
  console.log(tokens);

  return (
    <Image
      alt="logo"
      src="https://images.pexels.com/photos/115558/pexels-photo-115558.jpeg?auto=compress&cs=tinysrgb&w=400"
      padding={`${tokens.space.medium} 0`}
    />
  );
}
