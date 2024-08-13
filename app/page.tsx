
"use client"
import { useRouter } from 'next/navigation'

function HomePage() {
    const router = useRouter();
    router.push("/login");
}

export default HomePage;