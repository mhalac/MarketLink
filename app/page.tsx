"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function HomePage() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the login page when the component mounts
        router.push("http://localhost:3000/account/register");
    }, [router]);

    return (
        <div>
            {/* Content can be added here if needed */}
        </div>
    );
}

export default HomePage;