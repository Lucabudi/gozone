
export const Button = ({ text, onClick = () => {}, variant = "primary", scrolled = false } : { text: string, onClick: () => void, variant?: "primary" | "outline", scrolled?: boolean }) => {
    return (
        <button onClick={onClick} 
            className={`
                ${variant === "primary" ? "bg-[#2e6750]" : "bg-transparent border border-[#2e6750]"} 
                rounded-4xl 
                text-sm 
                ${variant === "primary"  ? "text-white" : scrolled ? "text-black" : "text-white"} 
                uppercase font-bold px-6 py-2 shadow-md hover:bg-[#2e6750]/80 hover:shadow-lg transition duration-300`}>
            {text}
        </button>
    );
};