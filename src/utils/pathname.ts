import { usePathname } from "next/navigation";

export const pathname = () => {
    const path = usePathname();
    return path
}
