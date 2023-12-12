export const truncateString: (input: string, maxLength: number) => string = (input, maxLength) => {
    if (input.length <= maxLength) {
        return input;
    } else {
        return input.slice(0, maxLength) + '...';
    }
};
