import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "La innovación y compromiso de esta empresa me dejaron sorprendido. Son líderes en el sector.",
        img: "https://avatar.vercel.sh/jack",
        color: "primary", // Color basado en el hito de "Nuestro Inicio"
    },
    {
        name: "Jill",
        username: "@jill",
        body: "Crecieron a nivel nacional y su calidad sigue intacta. Confío plenamente en ellos.",
        img: "https://avatar.vercel.sh/jill",
        color: "secondary", // Color basado en el hito de "Expansión"
    },
    {
        name: "John",
        username: "@john",
        body: "Siempre a la vanguardia de la tecnología, se nota que innovan constantemente.",
        img: "https://avatar.vercel.sh/john",
        color: "accent", // Color basado en el hito de "Innovación Continua"
    },
    {
        name: "Jane",
        username: "@jane",
        body: "Esta empresa realmente marca la diferencia con sus soluciones tecnológicas.",
        img: "https://avatar.vercel.sh/jane",
        color: "green-500", // Color basado en el hito de "El Futuro"
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body, color }) => {
    return (
        <figure
            className={cn(
                "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4 shadow-lg transition duration-300 hover:shadow-xl",
                `border-${color}`, // Usa el color específico de cada review
                "bg-background bg-opacity-80"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="40" height="40" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className={cn("text-sm font-bold tracking-tighter", `text-${color}`)}>
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium text-gray-400">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm text-gray-200 tracking-tight">{body}</blockquote>
        </figure>
    );
};

export function MarqueeReviews() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            {/* Gradientes para mejorar la visibilidad */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
        </div>
    );
}
