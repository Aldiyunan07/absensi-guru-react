export default function TBody({ children }: TBodyProps) {
    return <tbody>{children}</tbody>;
}

interface TBodyProps {
    children: JSX.Element | JSX.Element[];
}
