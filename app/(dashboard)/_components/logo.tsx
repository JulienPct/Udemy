import Image from 'next/image';

export const Logo = () => {
    return (
        <div className="flex items-center">
            <Image src="/logo.svg" width={130} height={130} alt="Logo" />
        </div>
    );
}