
export const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export const firstName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 1.3,
            staggerChildren: 0.08,
            staggerDirection: 0.5,
        },
    },
    exit: {
        y: 0,
    },
};

export const firstNameS = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 1.3,
            staggerChildren: 0.08,
            staggerDirection: 0.5,
        },
    },
    exit: {
        y: 0,
    },
};

export const letter = {
    initial: {
        y: 900,
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition },
    },
    exit: {
        y: 900,
    }
};

export const ButtonLetter = {
    initial: {
        x: 400,
    },
    animate: {
        x: 0,
        transition: { duration: 1, ...transition },
    },
    exit: {
        x: 400,
    }
};