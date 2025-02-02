export default function Thead({ children }: TheadProps) {
    return <thead>{children}</thead>;
}
interface TheadProps {
    children: JSX.Element | JSX.Element[];
}
