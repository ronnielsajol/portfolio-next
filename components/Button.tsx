import { cn } from "@/lib/utils";

interface ButtonProps {
	primary?: boolean;
	secondary?: boolean;
	children: React.ReactNode;
	className?: string;
}

const Button = ({ primary, secondary, children, className }: ButtonProps) => {
	return <button className={cn("btn", { primary, secondary }, className)}>{children}</button>;
};

export default Button;
