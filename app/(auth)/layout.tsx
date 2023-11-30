export default function AuthLayout ({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex itmes-center justify-center h-full">
            {children}
        </div>
    )
}