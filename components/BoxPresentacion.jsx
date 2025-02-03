

import { BoxReveal } from "@/components/ui/BoxReveal";
import GppGoodTwoToneIcon from '@mui/icons-material/GppGoodTwoTone';
import HandshakeTwoToneIcon from '@mui/icons-material/HandshakeTwoTone';
import PhoneForwardedTwoToneIcon from '@mui/icons-material/PhoneForwardedTwoTone';
import { AuroraText } from "./ui/aurora-text";
import { RainbowButton } from "./ui/rainbow-button";
import Link from 'next/link';

export default function EcommercePresentation() {
    return (
        <section className="flex flex-col items-center justify-center p-6 text-center bg-background mt-10 ">
            <BoxReveal boxColor="#e644e7" duration={1}>
                <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl mb-4">
                        Bienvenidos a <AuroraText> IshopTech</AuroraText>
                </h1>
            </BoxReveal>
            <BoxReveal boxColor="#4c128c" duration={1}>
                <p className="text-xl font-bold text-text mt-4">
                    En <AuroraText>IshopTech </AuroraText> nuestra misión es ofrecerte productos de alta calidad diseñados para satisfacer tus necesidades y superar tus expectativas.
                </p>
            </BoxReveal>
            <BoxReveal boxColor="#7bc4ee" duration={1.2}>
                <p className="text-xl font-bold text-text mt-4">
                <AuroraText>¿Por qué elegirnos?</AuroraText>
                </p>
                <ul className="text-xl font-bold text-text mt-4">
                    <li className="flex items-center">
                        <GppGoodTwoToneIcon className="mr-2 text-2xl  text-accent" />
                        <strong>Calidad Garantizada:</strong> Todos nuestros productos son seleccionados cuidadosamente.
                    </li>
                    <li className="flex items-center mt-2">
                        <HandshakeTwoToneIcon className="mr-2 text-2xl  text-accent" />
                        <strong>Confianza y Seguridad:</strong> Métodos de pago seguros para proteger tu información.
                    </li>
                    <li className="flex items-center mt-2">
                        <PhoneForwardedTwoToneIcon className="mr-2 text-2xl text-accent" />
                        <strong>Atención al Cliente:</strong> Estamos aquí para ayudarte en cada paso.
                    </li>
                </ul>
            </BoxReveal>

            <RainbowButton href="/products" className="text-xl font-bold text-text mt-10">
Ver todos los productos
</RainbowButton>
        </section>
    );
}
