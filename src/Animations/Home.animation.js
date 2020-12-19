
export const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export const firstName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.08,
            staggerDirection: 0.5,
        },
    },
};

export const letter = {
    initial: {
        y: -400,
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition },
    },
};