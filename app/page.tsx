import { useRouter } from 'next/navigation';
import { getSession } from 'next-auth/react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
async function HomePage() {
    const {isAuthenticated} = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    return(
        <div>
            <p className='text-black text-8xl'> HOLAAAAA </p>
        </div>
    );
}

export default HomePage;